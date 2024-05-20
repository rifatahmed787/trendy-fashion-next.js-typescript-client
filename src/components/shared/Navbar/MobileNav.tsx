import Link from "next/link";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import ProductSearchbar from "@/components/Products/ProductSearchbar";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/Hooks/useRedux";
import useModal from "@/Hooks/useModal";
import { usePathname } from "next/navigation";
import Account from "./Account";
import Cookies from "js-cookie";
import { login } from "@/Redux/features/auth/authSlice";
import Logo from "../../../assets/Logo/trendy.svg";
import SidebarSlide from "@/components/UI/Framer-motion/SidebarSlide";
import ICONS from "../Icons/AllIcons";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const { openModal } = useModal();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

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

        
          {accountDropdownOpen && (
            <ul
              className={`dropdown-menu border-t-2 border-primary-100 absolute right-0 left-auto w-48 z-50 shadow-lg duration-300 ease-in-out divide-y-2 `}
              onClick={() => setIsMenuOpen(false)}
            >
              <Account setAccountDropdownOpen={setAccountDropdownOpen} />
            </ul>
          )}
        
      </div>
    </>
  );

  return (
    <>
      <div className="fixed z-50 w-full md:hidden bg-white py-5">
        <div className="flex justify-between items-center px-5">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="w-14 md:cursor-pointer"
                width={undefined}
                height={undefined}
              />
            </Link>
          </div>
          <div className="flex justify-end">
            <button
              className="w-10 h-6 flex  absolute top-9  z-50 flex-col items-center justify-between"
              onClick={toggleMenu}
            >
              {/*hamburger menu span one*/}
              <span
                className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                  isMenuOpen
                    ? "rotate-45 translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>

              {/*hamburger menu span two*/}
              <span
                className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>

              {/*hamburger menu span three*/}
              <span
                className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>
            </button>
          </div>
        </div>
        <SidebarSlide isMenuOpen={isMenuOpen}>
          <div
            key="menu"
            className={`absolute top-5 left-0 z-30 w-full pb-10 bg-gray-100 overflow-y-auto
             `}
          >
            <div className="shadow-sm hover:text-primary-100 mt-4 pl-5">
              <nav className="flex justify-between">
                <ul className=" items-center gap-5 pl-4">
                  <li>
                    <Link
                      href="/"
                      className={`inline-block hover:border-b-primary-200 ${
                        location.pathname === "/"
                          ? "border-b-2 border-b-primary-200  py-2 text-black "
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
                      className={`inline-block hover:border-b-primary-200 pt-2 ${
                        location.pathname === "/products"
                          ? "border-b-2 border-b-primary-200 py-2 text-black "
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
                  <NavLinks />
                </ul>
                {/* signin button */}
                {user?.email && isLoggedIn ? (
                  <>{account}</>
                ) : (
                  <>
                    <div>
                      <div className="flex gap-4">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            openModal("login");
                          }}
                          className="text-gray-900 font-primary font-bold bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center gap-1"
                          type="button"
                        >
                          <Icon icon="mdi:user" width={25} />
                          Signin
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </nav>
              {/* searchbar */}
              <div className="pt-4 w-[70%] pl-4">
                <ProductSearchbar />
              </div>
            </div>
          </div>
        </SidebarSlide>
      </div>
    </>
  );
};

export default MobileNav;
