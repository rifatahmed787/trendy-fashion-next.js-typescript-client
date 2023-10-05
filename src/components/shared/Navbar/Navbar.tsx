"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import Logo from "../../../assets/Logo.png";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-50 w-full bg-white shadow-sm">
        <div className="flex items-center justify-around font-medium">
          <div className="z-50 flex w-full justify-between p-5 md:w-auto">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="h-9 w-20 md:cursor-pointer"
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
                href="/eid/collection"
                className={`py-  inline-block ${
                  location.pathname === "/eid/collection"
                    ? "border-b-4 border-b-[#0090A6] px-2 py-[26px] text-black "
                    : "text-[#181818]"
                }`}
              >
                Eid Collections
              </Link>
            </li>

            <li>
              <Link
                href="/sale/offer"
                className={`py-  inline-block ${
                  location.pathname === "/sale/offer"
                    ? "border-b-4 border-b-[#0090A6] px-2 py-[26px] text-black "
                    : "text-[#181818]"
                }`}
              >
                Sale Offer
              </Link>
            </li>
            <NavLinks />

            <li>
              <Link
                href="/pre/order"
                className={`py-  inline-block ${
                  location.pathname === "/pre/order"
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
                  location.pathname === "/shop/location"
                    ? "border-b-4 border-b-[#0090A6] px-2 py-[26px] text-black "
                    : "text-[#181818]"
                }`}
              >
                Shop Location
              </Link>
            </li>
          </ul>

          <div className="hidden md:block ">
            <div className="flex gap-4">
              <Link href="/goldsmith/order/summery">
                <Icon icon="solar:cart-line-duotone" />
              </Link>
              <Icon
                icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
                // onClick={() => setShowMyModal(true)}
              />

              <Link href="/goldsmith/account">
                <Icon icon="uiw:user" />
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
