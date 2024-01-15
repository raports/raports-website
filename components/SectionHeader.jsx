import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="max-w-xl mx-auto mb-4 text-center">
      <h2 className="text-gray-700 mb-2 text-3xl font-semibold">{title}</h2>
      <p className="text-grey-600">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
