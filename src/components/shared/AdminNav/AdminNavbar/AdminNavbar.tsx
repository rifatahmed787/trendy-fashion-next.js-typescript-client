"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Hooks/useRedux";
import { showSidebarDrawer } from "@/Redux/features/ui/sidebarSlice";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import Link from "next/link";
import AdminSearchbar from "@/components/AdminDashboard/AdminSearchbar/AdminSearchbar";
import Image from "next/image";
import ICONS from "../../Icons/AllIcons";

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="md:ml-64 py-6 px-3">
        <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
          <div className="hidden md:block">
            <Link href="/dashboard/profile" className="text-gray-500">
              Dashboard
            </Link>
            <span className="mx-3 text-gray-500 dark:text-gray-300">/</span>
            <Link href={"/"} className="text-base">
              Home
            </Link>
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="mt-5 ml-3 md:ml-0 md:mt-0">
              <AdminSearchbar />
              <div className="block md:hidden mt-3">
                <Link href="/dashboard/profile" className="text-gray-500">
                  Dashboard
                </Link>
                <span className="mx-3 text-gray-500 dark:text-gray-300">/</span>
                <Link href={"/"} className="text-base">
                  Home
                </Link>
              </div>
            </div>
            <Image
              width={40}
              height={40}
              src={
                user?.avatar ||
                "https://res.cloudinary.com/dztlowlu0/image/upload/v1700031261/avatar_ylo9mt.png"
              }
              alt=""
              className="rounded-full mx-auto -mt-5 md:-mt-0"
            />
            <div className="-mt-5 md:-mt-0">{ICONS.notification}</div>
            <div className="md:hidden -mt-5 md:-mt-0">
              <div className="flex justify-end relative ml-10">
                <button
                  className="w-10 h-6 absolute right-2 -top-2.5 z-10 flex flex-col justify-between"
                  onClick={() => {
                    dispatch(showSidebarDrawer());
                    toggleSidebar();
                  }}
                >
                  {/*hamburger menu span one*/}
                  <span
                    className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                      isSidebarOpen
                        ? "rotate-45 translate-y-2.5 duration-300"
                        : "translate-y-0 duration-300"
                    }`}
                  ></span>

                  {/*hamburger menu span two*/}
                  <span
                    className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                      isSidebarOpen ? "opacity-0" : ""
                    }`}
                  ></span>

                  {/*hamburger menu span three*/}
                  <span
                    className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                      isSidebarOpen
                        ? "-rotate-45 -translate-y-2.5 duration-300"
                        : "translate-y-0 duration-300"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>{isSidebarOpen && <MobileNav />}</AnimatePresence>
    </>
  );
};

export default AdminNavbar;
