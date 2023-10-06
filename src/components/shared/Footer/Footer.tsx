"use client";
import { Icon } from "@iconify/react";
import logo from "../../../assets/Logo.png";
import Image from "next/image";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="max-w-screen-2xl mx-auto relative before:absolute before:content-normal before:w-full before:h-1 before:bg-primary before:top-0 ">
      <div className="bg-gradient-backdrop pt-10 pb-1 px-5 ">
        <div className=" grid grid-cols-1 md:grid-cols-3 ">
          <div className="mb-10 w-11/12">
            <div className="flex justify-center">
              <Image src={logo} alt="" className="w-48" width={undefined} />
            </div>
            <div className="text-sm text-gray-400 pb-5 text-center pt-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          </div>

          <div className="flex justify-evenly gap-5 mb-16">
            <div>
              <h3 className="relative text-xl font-semibold mb-10 text-white before:content-normal before:absolute before:left-0 before:w-14 before:-bottom-4 before:bg-primary before:h-0.5 ">
                Useful Links
              </h3>
              <ul>
                <li className="flex items-center gap-2 text-gray-400  pb-2">
                  <Icon icon="icon-park-twotone:hand-right" width={20} />
                  <a
                    href="#"
                    className="transform hover:translate-x-1 duration-300"
                  >
                    Our Team
                  </a>
                </li>

                <li className="text-gray-400 flex items-center gap-2 pb-2">
                  <Icon icon="icon-park-twotone:hand-right" width={20} />
                  <a
                    href="#"
                    className="transform hover:translate-x-1 duration-300"
                  >
                    About Us
                  </a>
                </li>

                <li className="text-gray-400 flex items-center gap-2 pb-2">
                  <Icon icon="icon-park-twotone:hand-right" width={20} />
                  <a
                    href="#"
                    className="transform hover:translate-x-1 duration-300"
                  >
                    Our Gallery
                  </a>
                </li>

                <li className="text-gray-400 flex items-center gap-2 pb-2">
                  <Icon icon="icon-park-twotone:hand-right" width={20} />
                  <a
                    href="#"
                    className="transform hover:translate-x-1 duration-300"
                  >
                    Selection Process
                  </a>
                </li>

                <li className="text-gray-400 flex items-center gap-2 pb-2">
                  <Icon icon="icon-park-twotone:hand-right" width={20} />
                  <a
                    href="#"
                    className="transform hover:translate-x-1 duration-300"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="relative text-xl font-semibold mb-10 text-white before:content-normal before:absolute before:left-0 before:w-14 before:-bottom-4 before:bg-primary before:h-0.5 ">
                Terms
              </h3>
              <ul>
                <li className="text-gray-400 flex items-center gap-2 pb-2">
                  <Icon icon="icon-park-twotone:hand-right" width={20} />
                  <a
                    href="#"
                    className="transform hover:translate-x-1 duration-300"
                  >
                    Sponsorship
                  </a>
                </li>

                <li className="text-gray-400 flex items-center gap-2 pb-2">
                  <Icon icon="icon-park-twotone:hand-right" width={20} />
                  <a
                    href="#"
                    className="transform hover:translate-x-1 duration-300"
                  >
                    Our Policies
                  </a>
                </li>

                <li className="text-gray-400 flex items-center gap-2 pb-2">
                  <Icon icon="icon-park-twotone:hand-right" width={20} />
                  <a
                    href="#"
                    className="transform hover:translate-x-1 duration-300"
                  >
                    Our Team
                  </a>
                </li>

                <li className="text-gray-400 flex items-center gap-2 pb-2">
                  <Icon icon="icon-park-twotone:hand-right" width={20} />
                  <a
                    href="#"
                    className="transform hover:translate-x-1 duration-300"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="relative text-xl font-semibold  text-white before:content-normal before:absolute before:left-0 before:w-14 before:-bottom-4 before:bg-primary before:h-0.5 ">
                Subscribe
              </h3>
            </div>
            <div className=" mb-5">
              <p className="text-sm text-[#7e7e7e] leading-5 pt-10">
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="relative overflow-hidden ">
              <form action="#">
                <input
                  type="text"
                  placeholder="Type your email..."
                  // value={searchText}
                  // onChange={(e) => setSearchText(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 pr-12 md:py-5 md:pr-72 lg:py-5 lg:pr-72  focus:outline-none  focus:border-none relative"
                />
                <button className="absolute top-0 right-0 bg-primary py-5 px-10">
                  <Icon
                    icon="iconoir:telegram"
                    width={30}
                    className="text-white pb-2"
                  />
                </button>
              </form>
            </div>

            {/* social items icon */}
            <div className="footer-social-icon text-center pt-5">
              <span className="relative text-xl font-semibold mb-10 text-white before:content-normal before:absolute before:w-24 before:-bottom-2 before:bg-primary before:h-0.5 ">
                Follow us
              </span>

              {/* social icon */}
              <ul className="pb-10 pt-5 flex justify-center items-center gap-5">
                {/* facebook */}
                <li
                  className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-12 h-12 border-2 border-white after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-white after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
                >
                  <a href="#" className="block text-white z-10">
                    <Icon
                      icon="ri:facebook-fill"
                      width={25}
                      className="text-white group-hover:text-brand "
                    />
                  </a>
                </li>

                {/* instagram */}
                <li
                  className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-12 h-12 border-2 border-white after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-white after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
                >
                  <a href="#" className="block text-white z-10">
                    <Icon
                      icon="mdi:instagram"
                      width={25}
                      className="text-white group-hover:text-brand "
                    />
                  </a>
                </li>

                {/* twitter */}
                <li
                  className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-12 h-12 border-2 border-white after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-white after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
                >
                  <a href="#" className="block text-white z-10">
                    <Icon
                      icon="mdi:twitter"
                      width={25}
                      className="text-white group-hover:text-brand "
                    />
                  </a>
                </li>

                {/* youtube */}
                <li
                  className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-12 h-12 border-2 border-white after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-white after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
                >
                  <a href="#" className="block text-white z-10">
                    <Icon
                      icon="mdi:youtube"
                      width={25}
                      className="text-white group-hover:text-brand "
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-backdrop py-7">
        <div className="row grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
          <div className="text-gray-500">
            <p>
              Copyright &copy; {getCurrentYear()}, All Right Reserved{" "}
              <a href="#" className="text-primary">
                Hungry || Guest
              </a>
            </p>
          </div>

          <div className="hidden md:block">
            <div>
              <ul className="flex justify-end  items-center gap-10 ">
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Home</a>
                </li>
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Terms</a>
                </li>
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Privacy</a>
                </li>
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Policy</a>
                </li>
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
