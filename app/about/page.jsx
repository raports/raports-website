import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { timeline } from "@/constants";

export const metadata = {
  title: "Raports - About me",
};

const page = () => {
  return (
    <main>
      <section className="max-width section-padding flex flex-col desktop:flex-row gap-20 items-center">
        <div className="relative w-full desktop:w-1/2 h-[calc(300px+20vw)] desktop:h-[800px]">
          <Image
            src="/images/aboutHero.jpg"
            alt="hero"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="desktop:w-1/2">
          <div className="space-y-3 max-tablet:text-center flex flex-col">
            <h1 className="text-gray-700 text-5xl font-bold mb-8">I'm Ramis</h1>
            <p className="text-grey-700">
              I am deeply passionate about the transformative power of data.
              Throughout my career, I've honed my skills in analyzing data
              across various business functions, uncovering insights that drive
              strategic decisions. From transforming raw data into actionable
              insights to setting up new data services, I thrive on leveraging
              data to empower organizations and drive innovation.
            </p>
          </div>
          <div className="w-full bg-white rounded-lg desktop:border-t-2 desktop:border-b-2 desktop:border-blue desktop:rounded-none desktop:bg-transparent flex flex-col desktop:flex-row gap-12  py-8 px-10 mt-14 desktop:mt-24">
            <div className="flex items-center gap-10 justify-start desktop:justify-center desktop:block">
              <h3 className="text-grey-700 text-3xl font-semibold text-nowrap min-w-[75px]">
                9 <span className="text-blue">+</span>
              </h3>
              <p className="text-grey-600">Years of experience</p>
            </div>
            <div className="flex items-center gap-10 justify-start desktop:justify-center desktop:block">
              <h3 className="text-grey-700 text-3xl font-semibold text-nowrap min-w-[75px]">
                200 <span className="text-blue">+</span>
              </h3>
              <p className="text-grey-600 overflow-hidden">Dashboards and services developed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-width section-padding">
        <SectionHeader
          title="Milestones of my career"
          subtitle="Companies i've worked for"
        />
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px desktop:before:mx-auto
        desktop:before:translate-x-0 before:h-full before:w-0.5 before:bg-blue before:bg-opacity-30"> 
          {timeline.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between desktop:justify-normal desktop:even:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shrink-0 desktop:order-1
              desktop:group-even:-translate-x-1/2 desktop:group-odd:translate-x-1/2">
                <span className="w-3 h-3 bg-blue rounded-full"></span>
              </div>
              <div className="bg-white p-5 desktop:p-8 rounded-lg w-[calc(100%-4rem)] desktop:w-[calc(50%-2.5rem)]">
                <div className="flex items-center justify-between mb-1 space-x-2">
                  <h6 className="font-semibold text-grey-700">{item.title}</h6>
                  <p className="font-semibold text-blue text-nowrap ml-8">{item.duration}</p>
                </div>
                <div className="text-grey-600">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
