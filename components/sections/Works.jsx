import React from "react";
import { works } from "@/constants";
import WorkCard from "@/components/WorkCard";
import SectionHeader from "../SectionHeader";

const Works = () => {
  return <section className="max-width section-padding">
    <SectionHeader title="Works" subtitle="Portfolio of my dashbords and code" />
    {works.map((work, index) => (
      <WorkCard key={index} {...work} />
    ))}
  </section>;
};

export default Works;
