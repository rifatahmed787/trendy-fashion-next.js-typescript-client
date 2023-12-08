"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ICONS from "../Icons/AllIcons";
import { useState } from "react";
import { useAppDispatch } from "@/Hooks/useRedux";
import {
  onSidebarClose,
  showSidebarDrawer,
} from "@/Redux/features/ui/sidebarSlice";

const Sidebar = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="group">
      <button
        type="button"
        onClick={() => {
          dispatch(showSidebarDrawer());
          toggleSidebar();
        }}
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mt-20"
      >
        <span className="sr-only">Open sidebar</span>
        {ICONS.side_hamburger}
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

      {/* for small device */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            className="fixed top-0 left-0 z-20 block md:hidden h-screen w-48"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="h-full px-3 py-7 overflow-y-auto bg-gray-100 mt-16">
              <button
                onClick={() => {
                  dispatch(onSidebarClose());
                  toggleSidebar();
                }}
                className="absolute right-2"
              >
                {ICONS.cross_icon}
              </button>
              <ul className="space-y-2 font-medium">
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white "
                  >
                    {ICONS.profile}
                    <span className="flex-1 ml-4 whitespace-nowrap">
                      Profile
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my_order"
                    className="flex items-center p-2 text-gray-900 rounded-lg  "
                  >
                    {ICONS.product}
                    <span className="flex-1 ml-4 whitespace-nowrap ">
                      My Order
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
