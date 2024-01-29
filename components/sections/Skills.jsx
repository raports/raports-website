import React from "react";
import Image from "next/image";
import { skills } from "@/constants";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "../SkillCard";

const Skills = () => {
  return (
    <section className="max-width section-padding">
      <SectionHeader
        title="My skills"
        subtitle="Technologies i use in my work"
      />
      <div className="grid grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-4 desktop:grid-cols-6 gap-3 desktop:gap-12 ">
        {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
