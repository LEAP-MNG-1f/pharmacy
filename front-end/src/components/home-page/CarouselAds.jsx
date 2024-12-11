"use client";
import { useEffect } from "react";

export default function CarouselAds() {
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.querySelector(".carousel");
      const slides = document.querySelectorAll(".carousel-item");
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-item");
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
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-item");
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
    <div className="w-full flex justify-center ">
      <div className="w-[200px] flex justify-center">
        <div className="relative">
          <div className="carousel w-full overflow-x-scroll scroll-smooth flex">
            <div
              id="slide1"
              className="carousel-item relative w-full h-[400px] flex-none"
            >
              <img
                src="/freshpack.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full h-[400px] flex-none"
            >
              <img src="/mbank.png" className="w-full h-full object-cover" />
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full h-[400px] flex-none"
            >
              <img
                src="/casadavinci.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full h-[400px] flex-none"
            >
              <img src="/kfc.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
