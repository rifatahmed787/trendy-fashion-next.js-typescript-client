import { cn } from "@/lib/Utils";
import React, { ReactNode } from "react";

// Define the interface for the props
interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <h1 className={cn("uppercase text-2xl md:text-2xl lg:text-4xl font-bold font-primary relative inline-block group", className)}>
      {title}
      <span className="heading-underline"></span>
    </h1>
  );
};

export default Title;
