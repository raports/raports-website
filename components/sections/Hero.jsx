import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center max-width flex-col-reverse desktop:flex-row">
      {/* left side */}
      <div className="mt-10 desktop:w-2/3">
        <h1>Bi developer</h1>
        <p>Hire me pls</p>
        <button>Contact me</button>
      </div>

      {/* right side */}
      <div className="flex-auto">
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
