/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import serviceLogo1 from "../../../assets/HomePageBannerImg/servicelogo1.png";
import serviceLogo2 from "../../../assets/HomePageBannerImg/servicelogo2.png";
import serviceLogo3 from "../../../assets/HomePageBannerImg/servicelogo3.png";
import serviceLogo4 from "../../../assets/HomePageBannerImg/servicelogo4.png";

const HomeServiceComponent = () => {
  return (
    <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="my-5 text-center">
        <div className="flex items-center justify-center">
          <Image
            src={serviceLogo1}
            alt="serverLogo"
            className="h-14 w-14"
            width={undefined}
          />
        </div>
        <h1 className="my-3 text-xl font-bold">Amazing Value Every Day</h1>
        <p className="text-sm text-[#888888]">
          Items prices that fit your budget
        </p>
      </div>

      <div className="my-5 text-center">
        <div className="flex items-center justify-center">
          <Image
            width={undefined}
            src={serviceLogo2}
            alt="serverLogo"
            className="h-14 w-14"
          />
        </div>
        <h1 className="my-3 text-xl font-bold">Successful Customer Service</h1>
        <p className="text-sm text-[#888888]">
          We work with a focus on 100% customer satisfaction.
        </p>
      </div>
      <div className="my-5 text-center">
        <div className="flex items-center justify-center">
          <Image
            width={undefined}
            src={serviceLogo3}
            alt="serverLogo"
            className="h-14 w-14"
          />
        </div>
        <h1 className="my-3 text-xl font-bold">All Payment Methods</h1>
        <p className="text-sm text-[#888888]">
          Don't bother with payment details.
        </p>
      </div>
      <div className="my-5 text-center">
        <div className="flex items-center justify-center">
          <Image
            width={undefined}
            src={serviceLogo4}
            alt="serverLogo"
            className="h-14 w-14"
          />
        </div>
        <h1 className="my-3 text-xl font-bold">Completely free shipping</h1>
        <p className="text-sm text-[#888888]">
          Items prices that fit your budget
        </p>
      </div>
    </div>
  );
};

export default HomeServiceComponent;
