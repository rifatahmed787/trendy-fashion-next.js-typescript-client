import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Paragraph from "./Paragraph/Paragraph";
import SubTitle from "./SubTitle/SubTitle";
import { IService } from "@/Types/service";
import { FaArrowRightLong } from "react-icons/fa6";

type ServiceCardProps = {
  service: IService;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  
  return (
    <div className="group overflow-hidden">
      <Image
        src={service.img}
        alt={service.value}
        className="w-14 -mb-7 group-hover:translate-x-32 transition-transform ease-out duration-700"
        width={100}
        height={100}
      />
      <div className="border border-gray-200 hover:border-primary-100 duration-500 h-60 rounded-xl px-5 py-8 shadow-md overflow-hidden">
        <SubTitle SubTitle={service.value} />
        <Paragraph className="py-3 text-gray-400">{service.service.slice(0, 50)}...</Paragraph>
        <Link
          href={`service/${service.id}`}
          className="flex items-center mt-5 -translate-x-32 group-hover:translate-x-0.5 duration-500"
        >
          <p className="text-xl font-semibold pr-2">Read more</p>
         
          <FaArrowRightLong  className="text-xl mt-1 lg:ml-3 md:ml-24 sm:ml-40 carditem-icon-margin"/>
          
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
