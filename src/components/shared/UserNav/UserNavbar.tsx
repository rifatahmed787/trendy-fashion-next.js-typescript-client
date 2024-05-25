/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Logo from "../../../assets/Logo/trendy.svg";
import NavLinks from "../Navbar/MegaLinks";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import MobileNav from "../Navbar/MobileNav";
import useModal from "@/Hooks/useModal";
import ProductSearchbar from "@/components/Products/ProductSearchbar";
import { useAppDispatch, useAppSelector } from "@/Hooks/useRedux";
import Account from "../Navbar/Account";
import Cookies from "js-cookie";
import { login } from "@/Redux/features/auth/authSlice";
import AnimatedFilter from "@/components/FramerMotion/AnimatedFilter/AnimatedFilter";

const UserNavbar = () => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const { openModal } = useModal();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const userObject = JSON.parse(userCookie);
      const { user, isLoggedIn } = userObject;
      const accessToken = Cookies.get("token") || null;

      dispatch(
        login({
          user,
          isLoggedIn,
          accessToken,
          refreshToken: null,
        })
      );
    }
  }, [dispatch]);

  const toggleAccountDropdown = () =>
    setAccountDropdownOpen(!accountDropdownOpen);
  const accountDropdownClose = () => setAccountDropdownOpen(false);

  // account menu
  const account = (
    <>
      {/*................ Account dropdown menu start ................*/}
      <div
        className=" cursor-pointer  relative"
        onMouseEnter={toggleAccountDropdown}
        onMouseLeave={accountDropdownClose}
      >
        <div
          className="flex group cursor-pointer items-center"
          onClick={toggleAccountDropdown}
        >
          <span onClick={() => setAccountDropdownOpen(false)}>
            <Image
              width={50}
              height={50}
              src={
                user?.avatar ||
                "https://res.cloudinary.com/dztlowlu0/image/upload/v1700031261/avatar_ylo9mt.png"
              }
              alt=""
              className="rounded-full mx-auto"
            />
          </span>
          <Icon
            icon="iconamoon:arrow-down-2-bold"
            className="group-hover:translate-y-1 duration-300 text-primary-100"
            width="25"
          />
        </div>

        <AnimatedFilter isVisible={accountDropdownOpen}>
          {accountDropdownOpen && (
            <ul
              className={`dropdown-menu border-t-2 border-primary-100 absolute right-0 left-auto w-48 z-50 shadow-lg duration-300 ease-in-out divide-y-2 `}
            >
              <Account setAccountDropdownOpen={setAccountDropdownOpen} />
            </ul>
          )}
        </AnimatedFilter>
      </div>
    </>
  );

  const navbarClasses = `fixed z-40 border-b w-full border-gray-200 transition-transform duration-300 mx-0 md:px-10 bg-white shadow-sm`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="flex items-center justify-between font-medium">
          <div className="z-50 flex w-full justify-between p-1 ml-3 md:ml-0 md:w-auto">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="w-16 h-16 md:cursor-pointer"
                width={undefined}
              />
            </Link>
          </div>
          <ul className="hidden items-center gap-10 md:flex ">
            <div className="mx-10">
              <ProductSearchbar />
            </div>
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
                href="/products"
                className={`inline-block hover:border-b-primary-200 ${
                  pathname === "/products"
                    ? "border-b-2 border-b-primary-200 px-2 py-[26px] text-black "
                    : "text-[#181818]"
                }`}
              >
                Products
              </Link>
            </li>

            {/* dropdown navlinks */}
            <NavLinks />
          </ul>

          {user?.email && isLoggedIn ? (
            <div className="hidden md:block">{account}</div>
          ) : (
            <>
              <div className="hidden md:block">
                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      openModal("login");
                    }}
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 flex items-center gap-1"
                    type="button"
                  >
                    <Icon icon="mdi:user" width={25} />
                    Signin
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Mobile navbar */}
          <ul className={`fixed z-50 w-full md:hidden`}>
            <MobileNav />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
