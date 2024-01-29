import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Raports - About me",
};

const page = () => {
  return (
    <main>
      <section className="max-width section-padding flex flex-col desktop:flex-row gap-20 items-center">
        <div className="relative w-full desktop:w-1/2 h-[calc(300px+20vw)] desktop:h-[600px]">
          <Image
            src="/images/hero.png"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="desktop:w-1/2">
          <h1 className="text-gray-700">I'm Ramis</h1>
        </div>
      </section>
    </main>
  );
};

export default page;
