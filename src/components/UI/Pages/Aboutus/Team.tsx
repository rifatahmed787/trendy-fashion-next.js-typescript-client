/* eslint-disable react/no-unescaped-entities */
import React from "react";
import team1 from "../../../../assets/AboutUsImage/team1.png";
import team2 from "../../../../assets/AboutUsImage/team2.webp";
import team3 from "../../../../assets/AboutUsImage/team3.webp";
import team4 from "../../../../assets/AboutUsImage/team4.webp";
import team5 from "../../../../assets/AboutUsImage/team5.webp";
import team6 from "../../../../assets/AboutUsImage/team6.webp";
import team7 from "../../../../assets/AboutUsImage/team7.webp";
import team8 from "../../../../assets/AboutUsImage/team8.webp";

import Image from "next/image";

const Team = () => {
  return (
    <>
      <section className="px-2 py-16 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-11/12 md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md ">
                <div className="partners-intro--thumb aos-init team-circle">
                  <div className="partners-intro--partners">
                    <div className="partners-intro--partners-item -pos-1">
                      <Image
                        src={team1}
                        width={undefined}
                        height={undefined}
                        alt="team one"
                        className="rounded-t-full w-10 h-10 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-2">
                      <Image
                        src={team2}
                        width={undefined}
                        height={undefined}
                        alt="team one"
                        className="rounded-full w-10 h-10 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-3">
                      <Image
                        src={team3}
                        width={undefined}
                        height={undefined}
                        alt="team one"
                        className="rounded-full w-10 h-10 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-4">
                      <Image
                        src={team4}
                        width={undefined}
                        height={undefined}
                        alt="team one"
                        className="rounded-full w-10 h-10 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-5">
                      <Image
                        src={team5}
                        width={undefined}
                        height={undefined}
                        alt="team one"
                        className="rounded-full w-10 h-10 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-6">
                      <Image
                        src={team6}
                        width={undefined}
                        height={undefined}
                        alt="team one"
                        className="rounded-full w-10 h-10 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-7">
                      <Image
                        src={team7}
                        width={undefined}
                        height={undefined}
                        alt="team one"
                        className="rounded-full w-10 h-10 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-8">
                      <Image
                        src={team8}
                        width={undefined}
                        height={undefined}
                        alt="team one"
                        className="rounded-full w-10 h-10 md:w-20 md:h-20"
                      />
                    </div>
                  </div>
                  <div className="partners-intro--logo title">Our Team</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-5">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl title">
                  <span className="block xl:inline">Our Inspiration, Our</span>
                  <span className="block text-primary-100 xl:inline">Team</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl">
                  Behind every creation is a team dedicated to perfection. Meet
                  the dreamers, the creators, and the storytellers behind Trendy
                  Fashion. We are more than a team; we're a family, united by a
                  shared vision and a relentless pursuit of excellence.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg bg-primary-100 rounded-md sm:mb-0 sm:w-auto"
                  >
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a
                    href="#_"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
