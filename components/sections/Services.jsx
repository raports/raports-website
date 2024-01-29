import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="max-width section-padding">
      <SectionHeader
        title="Areas of my expertise"
        subtitle="What can i help you with"
      />
      <div className="grid grid-cols-1 desktop:grid-cols-3 gap-3 desktop:gap-12 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 tablet:p-12 rounded-lg flex flex-col tablet:flex-row desktop:flex-col items-center mb-4 bg-white"
            data-aos="fade-down"
            data-aos-delay={index * 100}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={200}
              height={200}
            />
            <div className="p-8 desktop:p-2">
              <div className="flex items-center justify-center tablet:justify-start desktop:justify-center min-h-[80px]">
                <h4 className="text-2xl font-semibold desktop:text-center">
                  {service.title}
                </h4>
              </div>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
