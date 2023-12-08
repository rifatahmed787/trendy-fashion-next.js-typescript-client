import ICONS from "@/components/shared/Icons/AllIcons";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <div>
      {/* for small device */}

      <motion.aside
        className={`fixed top-5 left-0 z-20 duration-500  transition-all sm:translate-x-0 ml-5 md:left-0 flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 py-4 px-6  h-[calc(100%-6vh)] border border-primary-100 rounded-xl `}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
            <h1 className="text-center title font-bold text-base md:text-xl">
              Admin Dashboard
            </h1>
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
                <li className="px-4 flex items-center gap-3 rounded-lg mb-2 text-gray-700">
                  {ICONS.log_out}
                  Log Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.aside>
    </div>
  );
};

export default MobileNav;
