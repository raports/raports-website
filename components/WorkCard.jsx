import React from "react";
import Image from "next/image";

const WorkCard = ({ title, image, description, url }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white rounded-xl p-8">
      <h4 className="text-2xl font-semibold mb-5">{title}</h4>
      <div className="relative w-full h-80 mb-5">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1440px) 33vw, 100vw" />
      </div>

      <p className="text-grey-700 mb-4">{description}</p>
      <div className="flex w-full justify-start">
        <a className="btn btn-primary cursor-pointer" href={url}>
          View Project
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
