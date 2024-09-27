import React from "react";
import { IService } from "@/Types/service";
import Image from "next/image";
import SubTitle from "../SubTitle/SubTitle";
import Paragraph from "../Paragraph/Paragraph";

const HomeServiceDetails = ({
  service_details,
}: {
  service_details: IService;
}) => {
  return (
    <div
      key={service_details.id}
      className="w-11/12 lg:w-4/5 -mt-10 mx-auto bg-white shadow-custom-tertiary"
    >
      <Image
        src={service_details?.img}
        width={80}
        height={80}
        alt={service_details?.value}
        className="mx-auto pt-5 pb-3"
      />
      <SubTitle SubTitle={service_details?.value} className="text-center"/>

      <Paragraph className="pb-16 pt-5 text-center mx-5">{service_details?.service}</Paragraph>
    </div>
  );
};

export default HomeServiceDetails;
