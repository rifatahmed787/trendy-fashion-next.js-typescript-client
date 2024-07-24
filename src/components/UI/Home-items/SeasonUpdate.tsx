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
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="absolute bottom-0 left-0 right-0 top-0  flex items-center justify-center">
          <div className="flex w-full md:w-4/5 lg:w-1/2 items-center justify-center text-[#e7e7e7] ">
            <div className="mx-4 border rounded-md py-10 px-5 backdrop-blur-sm bg-white/100">
              <div className="flex items-center justify-center">
                <Paragraph className=" w-32 rounded-full bg-primary-100 p-1 text-center font-semibold text-black">
                  NEW SEASON
                </Paragraph>
              </div>
              <SubTitle
                SubTitle="Fashion Forward"
                className="text-center py-5"
              />
              <Paragraph className="text-center">
                Step into the world of Fashion Forward, where cutting-edge style
                meets unparalleled elegance. Discover the latest trends, curated
                collections, and exclusive pieces that set you apart from the
                crowd. Embrace your unique style with Fashion Forward, where
                every outfit tells a story.
              </Paragraph>
              <div className="flex items-center justify-center">
                <button>
                  <Paragraph className="mt-7 flex w-64 items-center justify-center border-2  px-1 py-2 text-center text-[12px] font-bold text-white duration-200 hover:bg-primary-100 hover:duration-500 hover:text-black">
                    View all products{" "}
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
