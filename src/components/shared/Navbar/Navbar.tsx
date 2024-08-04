/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/Logo/2 (1).png";
import NavLinks from "./MegaLinks";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import useModal from "@/Hooks/useModal";
import { useAppDispatch, useAppSelector } from "@/Hooks/useRedux";
import Account from "./Account";
import Cookies from "js-cookie";
import { login } from "@/Redux/features/auth/authSlice";
import ProductSearchbar from "@/components/Products/ProductSearchbar";
import { NavItems } from "./NavLinks";
import MegamenuMotion from "@/components/UI/Framer-motion/MegamenuMotion";
import { useGetCartProductsQuery } from "@/Redux/features/cart/cartApi";
import { useGetWishListQuery } from "@/Redux/features/wishlist/wishApi";
import { ModeToggle } from "@/components/DarkModeContext/Mode-toggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const { openModal } = useModal();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  const accountDropdownRef = useRef(null);

  const { data: Products } = useGetCartProductsQuery({});
  const { data: products } = useGetWishListQuery({});

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
              className="rounded-full mx-auto w-12 h-12"
            />
          </span>
          <Icon
            icon="iconamoon:arrow-down-2-bold"
            className="group-hover:translate-y-1 duration-300 text-primary-100"
            width="25"
          />
        </div>

        <MegamenuMotion isDropdownOpen={accountDropdownOpen}>
          <div
            ref={accountDropdownRef}
            className={`dropdown-menu ${
              accountDropdownOpen && "border-t-2 border-primary-100"
            } absolute right-0 left-auto w-48 z-50 shadow-lg divide-y-2 `}
          >
            <Account setAccountDropdownOpen={setAccountDropdownOpen} />
          </div>
        </MegamenuMotion>
      </div>
    </>
  );

  const navbarClasses = `fixed z-40 border-b w-full border-gray-200 transition-transform duration-300 mx-0 md:px-5 lg:px-10 ${
    isNavbarVisible
      ? "translate-y-0 top-0 md:top-[73px]"
      : "-translate-y-auto top-auto py-3"
  } ${theme === "dark" ? "bg-gray-900" : "bg-white"} shadow-sm`;
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

            {NavItems?.map((item) => {
              const isSelected = pathname === item?.ref;
              return (
                <li
                  key={item.ref}
                  className={`${
                    isSelected
                      ? "border-b-[3px] border-primary-100 text-primary-100"
                      : "mainNav-hover-effect"
                  }`}
                >
                  <Link href={item?.ref} className={`font-bold py-2 `}>
                    <div className="flex group cursor-pointer items-center">
                      <span>{item?.value}</span>
                    </div>
                  </Link>
                </li>
              );
            })}

            {/* dropdown navlinks */}
            <NavLinks previousScroll={previousScroll} />
          </ul>
          <div className={`${isNavbarVisible ? "hidden" : "hidden lg:block"}`}>
            <ProductSearchbar />
          </div>
          {user?.email && isLoggedIn ? (
            <div className="flex items-center gap-2">
              <div
                className={`mx-2 bg-white shadow-md rounded-md`}
              >
                <ModeToggle />
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center gap-2 py-4">
                  {/* wishlist */}
                  <li className="relative">
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
                      <p className="text-lg text-primary-100 absolute -top-4 right-0">
                        {products?.data?.length ?? 0}
                      </p>
                    </Link>
                  </li>
                  {/* Cart */}
                  <li className="mx-2 relative">
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
                      <p className="text-lg text-primary-100 absolute -top-4 right-0">
                        {Products?.data?.length ?? 0}
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block">{account}</div>
            </div>
          ) : (
            <>
              <div className="hidden md:block">
                <div className="flex justify-center gap-5">
                  <ModeToggle />
                  <div className="flex items-center px-3 rounded-md bg-primary-100 text-white">
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
