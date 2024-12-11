import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";

export const GoogleMap = ({ selectedLocation }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstances = useRef([]);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map, InfoWindow } = await loader.importLibrary("maps");

      // init marker

      const { Marker } = await loader.importLibrary("marker");

      // map option

      const mapOptions = {
        center: { lat: 47.920295308332754, lng: 106.89387227273458 },
        zoom: 4,
        mapId: "MY_NEXTJSID",
      };

      // setup the map

      if (mapRef.current && !mapInstance.current) {
        mapInstance.current = new Map(mapRef.current, mapOptions);
      }

      // put up a marker
    };
    initMap();
  }, []);

  useEffect(() => {
    if (mapInstance.current && selectedLocation.length > 0) {
      markerInstances.current.forEach((marker) => marker.setMap(null));
      markerInstances.current = [];

      selectedLocation.forEach((location) => {
        const { lat, lng, title } = location;

        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: mapInstance.current,
        });

        const contentString = `<div class="flex justify-start items-start text-black p-2 mt-0">${title}</div>`;
        const infoWindow = new google.maps.InfoWindow({
          content: contentString,
        });

        marker.addListener("click", () => {
          infoWindow.open(mapInstance.current, marker);
        });

        markerInstances.current.push(marker);
      });

      const lastLocation = selectedLocation[selectedLocation.length - 1];
      mapInstance.current.setCenter({
        lat: lastLocation.lat,
        lng: lastLocation.lng,
      });
      mapInstance.current.setZoom(12);
    }
  }, [selectedLocation]);

  return <div ref={mapRef} className="rounded-2xl w-[1900px] h-[900px]"></div>;
};
