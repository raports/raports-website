import Image from "next/image";
import React from "react";
import { socialLinks } from "@/constants";

export const metadata = {
  title: "Raports - Contact Me",
};

const page = () => {
  return (
    <main>
      <section className="max-width section-padding">
        <div className="bg-white p-8 tablet:p-12 rounded-lg text-center flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold text-grey-700">
            Let's Collaborate for Mutual Success
          </h2>
          <p className="text-grey-600">
            Interested in exploring how we can achieve mutual success? Whether
            it's discussing opportunities or brainstorming innovative projects,
            I'm here to collaborate. Let's connect and see where our journey
            takes us.
          </p>
        </div>
      </section>

      <section className="max-width section-padding flex max-tablet:flex-col gap-16">
        <div className="tablet:max-w-md w-full">
          <div className="space-y-4">
            <div className="bg-white tablet:p-12 rounded-lg p-6">
              <p className="text-grey-600">You can Email me here</p>
              <h6 className="text-grey-700 font-semibold">
                ramis.khasianov@raports.net
              </h6>
            </div>
            <div className="bg-white tablet:p-12 rounded-lg p-6">
              <p className="text-grey-600">You can telegram me on</p>
              <h6 className="text-grey-700 font-semibold">+1 234 56 768</h6>
            </div>
            <div className="bg-white tablet:p-12 rounded-lg p-6">
              <p className="text-grey-600">My current location</p>
              <h6 className="text-grey-700 font-semibold">
                Tashkent, Uzbekistan
              </h6>
            </div>
            <h6 className="mt-10 mb-3 text-grey-700 max-tablet:text-center">
              My social profiles
            </h6>
            <div className="flex gap-3 bg-white rounded-lg p-6 w-max max-tablet:mx-auto">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="w-10 h-10 bg-blue text-peach flex items-center justify-center rounded"
                >
                  <link.icon size={24} fill="white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white tablet:p-4 rounded-lg w-full">
          <div className="relative w-full h-full">
            <Image
              src="/images/contact.png"
              alt="contact"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
