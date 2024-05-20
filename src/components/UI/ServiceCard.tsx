import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Paragraph from "./Paragraph/Paragraph";
import SubTitle from "./SubTitle/SubTitle";

type ServiceCardProps = {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  link: string;
  linkText: string;
  className?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  link,
  linkText,
  className,
}) => {
  return (
    <div className={`group overflow-hidden ${className}`}>
      <Image
        src={imageSrc}
        alt=""
        className="w-14 -mb-7 group-hover:translate-x-32 transition-transform ease-out duration-700"
        width={undefined}
        height={undefined}
      />
      <div className="border border-gray-200 hover:border-primary-100 duration-500 h-60 rounded-xl px-5 py-8 shadow-md overflow-hidden">
        <SubTitle SubTitle={title}/>
        <Paragraph className="py-3 text-gray-400">{description}</Paragraph>
        <Link
          href={link}
          className="flex items-center mt-5 -translate-x-32 group-hover:translate-x-0.5 duration-500"
        >
          <p className="text-xl font-semibold pr-2">{linkText}</p>
          <Icon
            icon="material-symbols:arrow-right-alt"
            className="mt-1 lg:ml-3 md:ml-24 sm:ml-40 carditem-icon-margin"
            width="30"
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
