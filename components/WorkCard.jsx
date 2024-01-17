import React from "react";
import Image from "next/image";

const WorkCard = ({ title, image, description, url }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="relative h-[70px] w-[70px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <p>{description}</p>
      <a className="btn btn-primary" src={url}>
        View Project
      </a>
    </div>
  );
};

export default WorkCard;
