"use client";

import { useEffect } from "react";

export default function CarouselAdsBottom({ delay = 3000 }) {
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.querySelector(`.carousel-${delay}`);
      const slides = carousel.querySelectorAll(".carousel-item");
      const totalSlides = slides.length;

      const currentScrollPosition = carousel.scrollLeft;
      const slideWidth = slides[0].offsetWidth;
      const nextScrollPosition = currentScrollPosition + slideWidth;

      if (nextScrollPosition >= slideWidth * totalSlides) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollTo({
          left: nextScrollPosition,
          behavior: "smooth",
        });
      }
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  const scrollLeft = () => {
    const carousel = document.querySelector(`.carousel-${delay}`);
    const slides = carousel.querySelectorAll(".carousel-item");
    const slideWidth = slides[0].offsetWidth;
    const currentScrollPosition = carousel.scrollLeft;

    const prevScrollPosition = currentScrollPosition - slideWidth;

    carousel.scrollTo({
      left:
        prevScrollPosition < 0
          ? slideWidth * (slides.length - 1)
          : prevScrollPosition,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const carousel = document.querySelector(`.carousel-${delay}`);
    const slides = carousel.querySelectorAll(".carousel-item");
    const slideWidth = slides[0].offsetWidth;
    const currentScrollPosition = carousel.scrollLeft;

    const nextScrollPosition = currentScrollPosition + slideWidth;

    carousel.scrollTo({
      left:
        nextScrollPosition >= slideWidth * slides.length
          ? 0
          : nextScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="relative w-full h-full overflow-hidden rounded-xl border border-gray-200">
        <div
          className={`carousel-${delay} carousel h-full overflow-x-scroll scroll-smooth flex rounded-xl`}
        >
          <div
            id="slide1"
            className="carousel-item relative w-full h-full flex-none rounded-xl"
          >
            <img
              src="/ads.jpg"
              className="w-full h-full object-cover rounded-xl"
              style={{ transition: "transform 0.5s ease-in-out" }}
            />
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full h-full flex-none rounded-xl"
          >
            <img
              src="/tsitron.jpg"
              className="w-full h-full object-cover rounded-xl"
              style={{ transition: "transform 0.5s ease-in-out" }}
            />
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full h-full flex-none rounded-xl"
          >
            <img
              src="/adss.jpg"
              className="w-full h-full object-cover rounded-xl"
              style={{ transition: "transform 0.5s ease-in-out" }}
            />
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full h-full flex-none rounded-xl"
          >
            <img
              src="/medicineAds.jpg"
              className="w-full h-full object-cover rounded-xl"
              style={{ transition: "transform 0.5s ease-in-out" }}
            />
          </div>
        </div>

        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition-colors"
        >
          ❮
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition-colors"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
