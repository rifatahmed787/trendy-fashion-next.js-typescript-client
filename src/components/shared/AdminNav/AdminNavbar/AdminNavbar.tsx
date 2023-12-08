"use client";
import React, { useState } from "react";
import { useAppDispatch } from "@/Hooks/useRedux";
import { showSidebarDrawer } from "@/Redux/features/ui/sidebarSlice";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
        <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
          <div className="md:hidden">
            <div className="flex justify-end relative bg-red-500 w-64">
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
      </nav>
      <AnimatePresence>{isSidebarOpen && <MobileNav />}</AnimatePresence>
    </>
  );
};

export default AdminNavbar;
