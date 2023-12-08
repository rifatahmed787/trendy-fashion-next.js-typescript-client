"use client";
import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Link from "next/link";
import ICONS from "@/components/shared/Icons/AllIcons";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleMenu = () => {
    setShowSidebar((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  return (
    <>
      <AdminNavbar toggleMenu={toggleMenu} showSidebar={showSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <h1>My Dashboard</h1>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <Link
                  href="/"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                >
                  {ICONS.home}
                  Dashboard
                </Link>
              </li>
              <li className="rounded-lg mb-2">
                <Link
                  href="/settings"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  {ICONS.settings}
                  Settings
                </Link>
              </li>
              <li className="rounded-lg mb-2 ">
                <Link
                  href="/tables"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                >
                  {ICONS.tables}
                  Tables
                </Link>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <Link
                  href="/maps"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                >
                  Maps
                </Link>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                {ICONS.signin}
                Sign In
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                {ICONS.signin}
                Sign Up
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
