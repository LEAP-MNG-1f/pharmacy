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
    <div className="w-full flex justify-center p-3">
      <div className="w-[1200px] flex justify-center">
        <div className="relative">
          <div className="carousel w-[1200px] overflow-x-scroll scroll-smooth flex">
            <div
              id="slide1"
              className="carousel-item relative w-full h-[100px] flex-none"
            >
              <img src="/emm.png" className="w-full h-full object-cover" />
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full h-[100px] flex-none"
            >
              <img src="/emtseneg.png" className="w-full h-full object-cover" />
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full h-[100px] flex-none"
            >
              <img src="/emm.png" className="w-full h-full object-cover" />
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full h-[100px] flex-none"
            >
              <img src="/emtseneg.png" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
