import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center max-width flex-col-reverse desktop:flex-row">
      {/* left side */}
      <div className="desktop:mt-10 desktop:w-2/3">
        <div className="flex flex-col gap-4 items-center desktop:items-start max-w-2xl text-center desktop:text-left">
          <h1 className="text-grey-700 text-5xl font-bold">BI developer</h1>
          <p className="text-grey-600">
            Welcome! I'm Ramis, a seasoned Business Analyst with a passion for
            transforming raw data into actionable insights. From developing
            sleek analytical dashboards to architecting robust ETL pipelines, I
            thrive on transforming raw data into strategic assets.
          </p>
        </div>
      </div>

      {/* right side */}
      <div className="relative w-full mt-16 desktop:w-1/3 h-[600px] desktop:h-[700px]">
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
