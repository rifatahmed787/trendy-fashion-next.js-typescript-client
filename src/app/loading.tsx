import React from "react";
import logo from "../assets/Logo/trendy.svg";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src={logo}
        alt=""
        width={undefined}
        height={undefined}
        className="w-1/4 animate-pulse"
      />
    </div>
  );
};

export default Loader;
