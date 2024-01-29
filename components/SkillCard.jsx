import React from "react";
import Image from "next/image";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const renderStars = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest half

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<BiSolidStar key={i} />);
    } else if (i - 0.5 === roundedRating) {
      stars.push(<BiSolidStarHalf key={i} />);
    } else {
      stars.push(<BiStar key={i} />);
    }
  }

  return stars;
};

const SkillCard = ({ title, level, image }) => {
  return (
    <div className="justify-self-center flex flex-col items-center justify-center gap-2 bg-white rounded-full h-[140px] w-[140px] desktop:h-[160px] desktop:w-[160px]">
      <div className="relative w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px]">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <h4 className="font-semibold text-grey-600">{title}</h4>
      <div className="flex items-center text-yellow">{renderStars({ rating: level })}</div>
    </div>
  );
};

export default SkillCard;
