/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import { links } from "./MyLinks";
import { Icon } from "@iconify/react";
import Link from "next/link";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  // const router = useRouter();
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className=" text-left md:cursor-pointer group">
            <h1
              className={`md:py-7 py-2 flex justify-between items-center md:pr-0 pr-5 group hover:text-primary-100`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline ">
                <Icon
                  icon="ep:arrow-down"
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                />
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:duration-500 ">
                <Icon icon="ep:arrow-down" />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-[68px] hidden group-hover:md:block hover:md:block ">
                  <div className="pb-3 bg-white">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-gray-100 rotate-45"
                    ></div>
                  </div>
                  <div className="bg-gray-100 p-5 grid grid-cols-2 gap-5 ">
                    {link?.sublinks?.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            key={slink.name}
                            className="text-sm text-gray-600 my-2.5 hover:bg-gray-200 px-5"
                          >
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden " : "hidden"}
          `}
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
                    className="py-2 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center hover:bg-gray-300 border-b"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {/* <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon> */}
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
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      // eslint-disable-next-line react/jsx-key
                      <li
                        key={slink.name}
                        className="py-2 font-normal italic border-b pl-14 hover:bg-gray-300 hover:translate-x-1 duration-300"
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
