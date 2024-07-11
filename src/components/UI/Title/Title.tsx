import { cn } from "@/lib/Utils";
import React, { ReactNode } from "react";

// Define the interface for the props
interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <h2 className={cn("uppercase text-xl w-full lg:w-4/6 md:text-3xl lg:text-4xl leading-normal md:leading-[55.02px] lg:leading-[60px] font-bold font-primary relative inline-block group", className)}>
      {title}
    </h2>
  );
};

export default Title;
