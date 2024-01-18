"use client";

import React, { useRef } from "react";
import { works } from "@/constants";
import WorkCard from "@/components/WorkCard";
import SectionHeader from "@/components/SectionHeader";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Works = () => {
  const swiperRef = useRef(null);

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
        <div>
          <Swiper
            slidesPerView={3}
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
