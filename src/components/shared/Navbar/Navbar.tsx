/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Logo from "../../../assets/Logo/trendy.svg";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import useModal from "@/Hooks/useModal";
import { useAppDispatch, useAppSelector } from "@/Hooks/useRedux";
import Account from "./Account";
import Cookies from "js-cookie";
import { login } from "@/Redux/features/auth/authSlice";
import AnimatedFilter from "@/components/FramerMotion/AnimatedFilter/AnimatedFilter";
import "./Navbar.css";
import ICONS from "../Icons/AllIcons";
import ProductSearchbar from "@/components/Products/ProductSearchbar";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              onClick={() => setIsMenuOpen(false)}
            >
              <Account setAccountDropdownOpen={setAccountDropdownOpen} />
            </ul>
          )}
        </AnimatedFilter>
      </div>
    </>
  );

  const navbarClasses = `fixed z-40 border-b w-full border-gray-200 transition-transform duration-300 mx-0 md:px-16 ${
    isNavbarVisible
      ? "translate-y-0 top-0 md:top-[73px]"
      : "-translate-y-auto top-auto py-3"
  } bg-white shadow-sm`;
  return (
    <div>
      <nav className={navbarClasses}>
        <div className="flex items-center justify-between font-medium mx-auto max-w-screen-2xl">
          <ul className="hidden items-center gap-10 md:flex ">
            <li className={`${isNavbarVisible ? "hidden" : "block"}`}>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="logo"
                  className="w-14 md:cursor-pointer"
                  width={undefined}
                  height={undefined}
                />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`inline-block py-3 menu-item ${
                  pathname === "/"
                    ? "active px-2  text-primary-100 "
                    : "text-[#181818]"
                }`}
              >
                <span className="flex items-center gap-1 font-primary text-lg font-bold">
                  {ICONS.home}
                  Home
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className={`inline-block py-3 menu-item ${
                  pathname === "/products"
                    ? "active px-2  text-primary-100  "
                    : "text-[#181818]"
                }`}
              >
                <span className="flex items-center gap-1 font-primary text-lg font-bold">
                  {ICONS.product}
                  Products
                </span>
              </Link>
            </li>
            {/* dropdown navlinks */}
            <NavLinks previousScroll={previousScroll} />
          </ul>
          <div className={`${isNavbarVisible ? "hidden" : "hidden lg:block"}`}>
            <ProductSearchbar />
          </div>
          {user?.email && isLoggedIn ? (
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <ul className="flex items-center gap-2 py-4">
                  {/* wishlist */}
                  <li>
                    <Link
                      href="/wishlist"
                      className={`px-2 py-2 w-full flex items-center gap-2 bg-white shadow-md rounded-md`}
                    >
                      <Icon
                        icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
                        width={22}
                        className={`${
                          pathname === "/wishlist" ? "text-primary-100" : ""
                        }`}
                      />
                    </Link>
                  </li>
                  {/* Cart */}
                  <li className="mx-2">
                    <Link
                      href="/addtocart"
                      className={`px-2 py-2  w-full  flex items-center gap-2 bg-white shadow-md rounded-md`}
                    >
                      <Icon
                        icon="mdi:cart-outline"
                        width={22}
                        className={`${
                          pathname === "/addtocart" ? "text-primary-100" : ""
                        }`}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block">{account}</div>
            </div>
          ) : (
            <>
              <div className="hidden md:block">
                <div className="flex items-center px-3 rounded-md bg-primary-100 text-black">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      openModal("login");
                    }}
                    className="font-primary font-bold text-lg"
                  >
                    SignIn
                  </button>
                  <span className="bg-white w-0.5 h-8 rotate-[30deg] mx-2"></span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      openModal("register");
                    }}
                    className="font-primary font-bold text-lg"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
      {/* Mobile navbar */}
      <ul>
        <MobileNav />
      </ul>
    </div>
  );
};

export default Navbar;
