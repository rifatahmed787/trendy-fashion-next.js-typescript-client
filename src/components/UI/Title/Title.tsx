import { cn } from "@/lib/Utils";
import React, { ReactNode } from "react";

// Define the interface for the props
interface TitleProps {
  title:string,
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <h1 className={cn("font-bold text-2xl md:text-[35px] lg:text-[45px] leading-[35px] md:leading-[50px] lg:leading-[60px] font-primary", className)}>
      {title}
    </h1>
  );
};

export default Title;
