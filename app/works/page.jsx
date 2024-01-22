import React from "react";
import { works } from "@/constants";
import WorkCard from "@/components/WorkCard";
import SectionHeader from "@/components/SectionHeader";

export default function WorksPage() {
  return (
    <main>
      <section className="max-width section-padding">
        <SectionHeader title="My works" subtitle="Get to know my style" />
        <div className="grid grid-cols-3 gap-12">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </section>
    </main>
  );
}
