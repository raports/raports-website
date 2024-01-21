import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoTelegram, BiRightArrowAlt } from "react-icons/bi";

export default function Hero() {
  return (
    <section className="section-padding max-width flex items-center flex-col-reverse desktop:flex-row mb-16">
      {/* left side */}
      <div className="desktop:mt-10 desktop:w-2/3">
        <div className="flex flex-col gap-4 items-center desktop:items-start max-w-2xl text-center desktop:text-left">
          <h1 data-aos="fade-down" className="text-grey-700 text-5xl font-bold" >Ramis Khasianov</h1>
          <p  data-aos="fade-down" data-aos-delay="100" className="text-grey-600">
            Welcome! I'm Ramis, a seasoned Business Analyst with a passion for
            transforming raw data into actionable insights. From developing
            sleek analytical dashboards to architecting robust ETL pipelines, I
            thrive on transforming raw data into strategic assets.
          </p>
        </div>

        <div className="flex gap-5 mt-10 justify-center desktop:justify-start" data-aos="fade-down" data-aos-delay="300">
          <Link href="https://t.me/ramis_raports" className="btn btn-primary">
            <BiLogoTelegram />
            Contact me
          </Link>

          <Link href="/works" className="btn">
            View porfolio
            <BiRightArrowAlt />
          </Link>
        </div>
      </div>

      {/* right side */}
      <div className="relative w-full mt-16 desktop:w-1/3 h-[600px] desktop:h-[700px]" data-aos="fade-left" data-aos-delay="300">
        <Image
          src="/images/hero.png"
          alt="hero"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
