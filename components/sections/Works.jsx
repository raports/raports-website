"use client";

import React, { useEffect, useRef, useState } from "react";
import { works } from "@/constants";
import WorkCard from "@/components/WorkCard";
import SectionHeader from "@/components/SectionHeader";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useWindowSize } from "@/hooks/useWindowSize";

const Works = () => {
  const swiperRef = useRef(null);
  const [sliderPerView, setSliderPerView] = useState(3);

  const { width } = useWindowSize();

  useEffect(() => {
    if(width < 1024) {
      setSliderPerView(1);
    } else if(width < 1268) {
      setSliderPerView(2);
    } else {
      setSliderPerView(3);
    }
  }, [width]);

  return (
    <section className="max-width section-padding">
      <SectionHeader
        title="Works"
        subtitle="Portfolio of my dashbords and code"
      />
      <div>
        <div className="pb-6 border-b border-grey-200 flex items-center justify-end">
          <div className="flex gap-2">
            <button
              className="bg-white border border-grey p-1 rounded text-grey-700"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <BiChevronLeft />
            </button>
            <button
              className="bg-white border border-grey p-1 rounded text-grey-700"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <BiChevronRight />
            </button>
          </div>
        </div>
        <div className="mt-8">
          <Swiper
            slidesPerView={sliderPerView}
            spaceBetween={30}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {works.map((work, index) => (
              <SwiperSlide key={index}>
                <WorkCard key={index} {...work} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
