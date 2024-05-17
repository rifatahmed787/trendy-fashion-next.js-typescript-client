/* eslint-disable react/jsx-key */
"use client";
import React, { useState, useRef } from "react";
import { links } from "./MyLinks";
import { Icon } from "@iconify/react";
import Link from "next/link";
import MegamenuMotion from "@/components/UI/Framer-motion/MegamenuMotion";
import ICONS from "../Icons/AllIcons";

const NavLinks = ({ previousScroll }: any) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [isPageOpen, setIsPageOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = (linkName: React.SetStateAction<string>) => {
    setHeading(linkName);
    setIsPageOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPageOpen(false);
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name} onMouseLeave={handleMouseLeave}>
          <div className="text-left md:cursor-pointer group">
            <h1
              onMouseEnter={() => handleMouseEnter(link.name)}
              className={`md:py-4 py-2 flex justify-between items-center text-lg text-secondary group hover:text-primary-100`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <span className="flex items-center gap-1 font-primary text-lg font-bold">
                {ICONS.page}
                {link.name}
              </span>
              <span className="text-xl md:hidden inline">
                <Icon
                  icon="ep:arrow-down"
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                />
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:duration-500">
                <Icon icon="ep:arrow-down" />
              </span>
            </h1>

            {isPageOpen && heading === link.name && (
              <div
                ref={dropdownRef}
                className={`absolute ${previousScroll ? "top-4/5" : "top-[80%]"}`}
                onMouseEnter={() => setIsPageOpen(true)}
                onMouseLeave={handleMouseLeave}
              >
                <MegamenuMotion>
                  <div className="pb-3 bg-white">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-gray-100 rotate-45"></div>
                  </div>
                  <div className="bg-gray-100 p-5">
                    {link?.sublinks?.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-primary font-bold py-2">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((link) => (
                          <li
                            key={link.name}
                            className="font-primary text-lg font-bold border border-primary-100 w-full pr-16 pl-3 my-1 hover:bg-primary-100 duration-500"
                          >
                            <Link href={link.link}>{link.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </MegamenuMotion>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div
            className={`cursor-pointer ${heading === link.name ? "md:hidden" : "hidden"}`}
          >
            {/* sub-links */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-2 pl-7 font-bold font-primary md:pr-0 pr-5 flex justify-between text-black items-center hover:bg-gray-300 border-b"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <Icon
                        icon="ep:arrow-down"
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      />
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                    {slinks.sublink.map((slink) => (
                      <li
                        key={slink.name}
                        className="py-2 border font-primary italic border-b font-bold pl-14 text-black hover:bg-primary-100 hover:translate-x-1 duration-300"
                      >
                        <Link href={slink.link} className="">
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
