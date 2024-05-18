"use client";
import { Icon } from "@iconify/react";
import Paragraph from "../Paragraph/Paragraph";
import SubTitle from "../SubTitle/SubTitle";

const HomeSectionComponent = () => {
  return (
   <section>
     <div
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dztlowlu0/image/upload/e_improve:outdoor/ahmwwdb0oumziywpjajv.jpg")',
      }}
      className="relative h-96 bg-cover bg-center max-w-screen-2xl mx-auto"
    >
      <div className="absolute inset-0 bg-black opacity-60 "></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <div className="flex w-[100%] items-center justify-center text-[#e7e7e7] ">
          <div className="mx-4">
            <div className="flex items-center justify-center">
              <Paragraph className="mt-20 w-32 rounded-full bg-[#FAC213] p-1 text-center font-semibold text-black md:mt-12 lg:mt-20">NEW SEASON</Paragraph>
            </div>
            <SubTitle SubTitle="Back to the past: Earrings" className="text-center py-5"/>
            <Paragraph className="text-center">   You can hide so much behind theatrics, and I dont need to do that
              any more. My relationships <br /> with producers or photographers
              - these are relationships that took years.</Paragraph>
            <div className="flex items-center justify-center">
              <button>
                <Paragraph className="mb-10 mt-7 flex w-64 items-center justify-center border-2  px-1 py-2 text-center text-[12px] font-bold text-white duration-200 hover:bg-primary-100 hover:duration-500 hover:text-black">
                  View all leather products{" "}
                  <Icon
                    icon="ic:baseline-arrow-right"
                    width={22}
                    className="ml-5"
                  />
                </Paragraph>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  );
};

export default HomeSectionComponent;
