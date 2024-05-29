import { cn } from "@/lib/Utils";
import { ReactNode } from "react";

type BrandButton = {
  text: ReactNode;
  onClick?: () => void; 
  icon?: ReactNode;
  className?: string;
};

const WhiteButton = ({ text, onClick, icon, className }: BrandButton) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick} 
        className={cn("relative inline-flex items-center justify-center px-2 py-2 md:px-5 md:py-3 overflow-hidden font-primary font-extrabold text-gray-700 border-none shadow-2xl bg-white rounded-lg group", className)}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#faf5e6] rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg"></span>
        <span className="relative uppercase text-xs md:text-sm w-20 flex">
          {text} {icon}
        </span>
      </button>
    </>
  );
};

export default WhiteButton;
