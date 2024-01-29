import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Raports - About me",
};

const page = () => {
  return (
    <main>
      <section className="max-width section-padding">
        <div className="relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px]">
          <Image
            src="/images/hero.png"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="tablet:w-1/2">
          
        </div>
      </section>
    </main>
  );
};

export default page;
