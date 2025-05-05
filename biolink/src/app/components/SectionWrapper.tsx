import React from "react";

export default function SectionWrapper({ children, className = "", padding = "md:py-8 py-4" }) {
  return (
    <div className={`w-full mx-auto md:px-12 px-4 ${padding} ${className}`}>
      {children}
    </div>
  );
}
