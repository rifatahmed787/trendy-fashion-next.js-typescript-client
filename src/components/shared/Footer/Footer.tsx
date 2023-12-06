"use client";

import logo from "../../../assets/Logo/trendy.svg";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "@/components/UI/Paragraph/Paragraph";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="bg-gray-200 relative before:absolute before:content-normal before:left-0 before:top-0 before:w-32 before:h-32 before:bg-primary-100 before:rounded-br-full z-30">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 ">
        {/* Top area: Blocks */}
        <div className="grid grid-cols-12 py-8 md:py-12 border-t border-gray-200 md:mx-10">
          {/* 1st block */}
          <div className="col-span-12 md:col-span-3">
            <div className="mb-2 flex justify-center">
              {/* Logo */}
              <Link href="/" className="inline-block" aria-label="Cruip">
                <Image
                  src={logo}
                  alt=""
                  width={undefined}
                  height={undefined}
                  className="w-20 "
                />
              </Link>
            </div>
            <div className="text-sm text-gray-600 mx-5 md:mx-0">
              <Paragraph>
                Embark on a lifelong journey of self-expression through fashion!
                At our trendy-fashion shop, the adventure of playing dress-up
                never truly ends.
                {/* Your fashion story starts here, where every
                outfit is a new chapter waiting to be written.{" "} */}
              </Paragraph>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9 mt-5 md:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-5">
              {/* 2nd block */}
              <div>
                <h6 className="text-gray-800 font-medium mb-2 relative after:absolute after:content-normal after:bottom-0 after:left-0 after:w-[70px] after:h-0.5 after:bg-primary-100">
                  Products
                </h6>
                <ul className="text-sm">
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Web Studio
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      DynamicBox Flex
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Programming Forms
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Command-line
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div>
                <h6 className="text-gray-800 font-medium mb-2 relative after:absolute after:content-normal after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-primary-100">
                  Resources
                </h6>
                <ul className="text-sm">
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Tutorials & Guides
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Support Center
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div>
                <h6 className="text-gray-800 font-medium mb-2 relative after:absolute after:content-normal after:bottom-0 after:left-0 after:w-[70px] after:h-0.5 after:bg-primary-100">
                  Company
                </h6>
                <ul className="text-sm">
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Company values
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 5th block */}
              <div>
                <h6 className="text-gray-800 font-medium mb-2 relative after:absolute after:content-normal after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-primary-100">
                  Subscribe
                </h6>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest news and articles to your inbox every month.
                </p>
                <form>
                  <div className="flex flex-wrap mb-4">
                    <div className="relative md:mb-6">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border focus:border-primary-100 bg-transparent px-3  leading-[1.6] text-gray-700 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate px-3 pt-2 peer-focus:pt-0 leading-[1.6] text-gray-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-gray-700 peer-focus:bg-gray-200"
                      >
                        Email address
                      </label>

                      <button
                        type="submit"
                        className="absolute inset-0 left-auto"
                        aria-label="Subscribe"
                      >
                        <span
                          className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-400"
                          aria-hidden="true"
                        ></span>
                        <svg
                          className="w-3 h-3 fill-current text-primary-100 mx-3 flex-shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex flex-row-reverse md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 md:mx-10 relative before:absolute before:content-normal before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-primary-100">
          {/* Social links */}
          <SocialIcons />

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Made by{" "}
            <a
              className="text-primary-100 hover:underline"
              href="https://cruip.com/"
            >
              Trendy-Fashion {getCurrentYear()}
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
