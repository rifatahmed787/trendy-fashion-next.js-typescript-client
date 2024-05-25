"use client";

import logo from "../../../assets/Logo/trendy.svg";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "@/components/UI/Paragraph/Paragraph";
import SocialIcons from "../SocialIcons/SocialIcons";
import { footerLinks } from "./FooterLinks";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="z-30">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top area: Blocks */}
        <div className="bg-white relative after:content-normal after:absolute after:w-full after:h-1 after:top-0  after:bg-primary-100">
          <div className="grid grid-cols-12 py-8 md:py-12 border-t border-gray-200 md:mx-10">
            {/* 1st block */}
            <div className="col-span-12 md:col-span-3">
              <div className="mb-2 flex justify-center z-10">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <Image
                    src={logo}
                    alt=""
                    width={undefined}
                    height={undefined}
                    className="w-24 md:w-32"
                  />
                </Link>
              </div>
              <div className="text-sm text-gray-600 mx-5 md:mx-0">
                <Paragraph>
                  Embark on a lifelong journey of self-expression through
                  fashion! At our trendy-fashion shop, the adventure of playing
                  dress-up never truly ends.
                  {/* Your fashion story starts here, where every
                outfit is a new chapter waiting to be written.{" "} */}
                </Paragraph>
              </div>
            </div>

            <div className="col-span-12 md:col-span-9 mt-5 md:mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-5">
                {footerLinks?.map((link) => (
                  <>
                    <div key={link.Head}>
                      <h6 className={link.class}>
                        {link.Head}
                      </h6>
                      <ul>
                        {link.sublink?.map((sublnk) => (
                          <>
                            <li key={sublnk.name} className="mb-2">
                              <Link
                                href={sublnk.link}
                                className="text-gray-600 hover:text-gray-900 hover:translate-x-1 hover:duration-500 text-sm font-tertiary font-semibold"
                              >
                                {sublnk.name}
                              </Link>
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex flex-row-reverse md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 md:mx-10 relative before:absolute before:content-normal before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-primary-100">
            {/* Social links */}
            <div className="mr-0 lg:mr-16">
              <SocialIcons />
            </div>

            {/* Copyrights note */}
            <div className="text-sm text-gray-600 mr-4 lg:ml-10">
              Made by{" "}
              <a
                className="text-primary-100 hover:underline font-semibold"
                href="https://cruip.com/"
              >
                trendy-fashion {getCurrentYear()}
              </a>
              . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
