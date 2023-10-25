/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Logo from "../../../assets/Logo/trendy.svg";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);

  const pathname = usePathname();

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > previousScroll) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }

    setPreviousScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, previousScroll]);

  const navbarClasses = `fixed   z-20 border-b w-full border-gray-200 transition-transform duration-300 ${
    isNavbarVisible ? "translate-y-0 top-10" : "-translate-y-full top-auto"
  } bg-white shadow-sm`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="flex items-center justify-around font-medium">
          <div className="z-50 flex w-full justify-between p-1 md:w-auto">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="w-16 h-16 md:cursor-pointer"
                width={undefined}
              />
            </Link>
            {/* hamburg menu start*/}
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
              <Icon
                icon="solar:hamburger-menu-broken"
                name={`${open ? "close" : "menu"}`}
              />
            </div>
            {/* hamburg menu end*/}
          </div>
          <ul className="hidden items-center gap-5 md:flex ">
            <li>
              <Link
                href="/"
                className={`inline-block hover:border-b-primary-200 ${
                  pathname === "/"
                    ? "border-b-2 border-b-primary-200 px-2 py-[26px] text-black "
                    : "text-[#181818]"
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/sale/offer"
                className={`py-  inline-block ${
                  pathname === "/sale/offer"
                    ? "border-b-4 border-b-[#0090A6] px-2 py-[26px] text-black "
                    : "text-[#181818]"
                }`}
              >
                Sale Offer
              </Link>
            </li>

            {/* dropdown navlinks */}
            <NavLinks />

            <li>
              <Link
                href="/pre/order"
                className={`py-  inline-block ${
                  pathname === "/pre/order"
                    ? "border-b-4 border-b-[#0090A6] px-2 py-[26px] text-black "
                    : "text-[#181818]"
                }`}
              >
                Pre Order
              </Link>
            </li>

            <li>
              <Link
                href="/shop/location"
                className={`py-  inline-block ${
                  pathname === "/shop/location"
                    ? "border-b-4 border-b-[#0090A6] px-2 py-[26px] text-black "
                    : "text-[#181818]"
                }`}
              >
                Shop Location
              </Link>
            </li>
          </ul>

          <div className="hidden md:block">
            <div className="flex gap-4">
              {/* <Link href="/goldsmith/order/summery">
                <Icon icon="solar:cart-line-duotone" />
              </Link>
              <Icon
                icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
                // onClick={() => setShowMyModal(true)}
              /> */}

              <Link href="/login">
                <button
                  data-modal-target="signinModal"
                  data-modal-toggle="signinModal"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center gap-1"
                  type="button"
                >
                  <Icon icon="mdi:user" width={25} />
                  Signin
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile navbar */}
          <ul
            className={`fixed
        bottom-0 top-0 w-full overflow-y-auto bg-white py-24 pl-4 font-bold duration-500
        md:hidden ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            {/* <li className="hover:bg-gray-300 duration-200 border-b">
            <Link to="/home" className="py-7 px-3 inline-block ">
              Home
            </Link>
          </li> */}
            <NavLinks />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
