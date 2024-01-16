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
        subtitle="Technolgies i use in my work"
      />
      <div className="grid grid-cols-3 desktop:grid-cols-5 gap-3 desktop:gap-12 ">
        {skills.slice(0, 3).map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
