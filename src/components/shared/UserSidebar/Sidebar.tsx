"use client";

import Link from "next/link";
import ICONS from "../Icons/AllIcons";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  return (
    <div className="group">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mt-20"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
        className={`fixed top-0 left-0 z-20 hidden md:block duration-500 h-screen transition-all sm:translate-x-0 ${
          isSidebarHovered ? "w-48" : "w-14"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 mt-20">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/profile"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white "
              >
                {ICONS.profile}
                <span className="flex-1 ml-4 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/my_order"
                className="flex items-center p-2 text-gray-900 rounded-lg  "
              >
                {ICONS.product}
                <span className="flex-1 ml-4 whitespace-nowrap ">My Order</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
