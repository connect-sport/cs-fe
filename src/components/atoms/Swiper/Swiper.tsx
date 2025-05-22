"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { NavigationOptions, SwiperOptions } from "swiper/types";

interface BaseSwiperProps {
  children: React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
  breakpoints?: SwiperOptions["breakpoints"];
  loop?: boolean;
}

const BaseSwiper = ({
  children,
  slidesPerView = 3,
  spaceBetween = 16,
  className,
  loop = true,
  breakpoints,
  ...props
}: BaseSwiperProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={slidesPerView}
        loop={loop}
        spaceBetween={spaceBetween}
        className={className}
        breakpoints={breakpoints}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
        {...props}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        className="absolute top-1/2 z-10 transform -left-4 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100 "
      >
        ←
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
      >
        →
      </button>
    </div>
  );
};

export { BaseSwiper };
