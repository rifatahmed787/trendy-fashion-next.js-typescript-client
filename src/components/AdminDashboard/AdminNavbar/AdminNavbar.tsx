import React from "react";

type menuBar = {
  toggleMenu: () => void;
  showSidebar: boolean;
};

const AdminNavbar = ({ toggleMenu, showSidebar }: menuBar) => {
  return (
    <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="md:hidden">
          <div className="flex justify-end relative">
            <button
              className="w-10 h-6 absolute right-2 -top-2.5 z-10 flex flex-col justify-between"
              onClick={toggleMenu}
            >
              {/*hamburger menu span one*/}
              <span
                className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                  showSidebar
                    ? "rotate-45 translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>

              {/*hamburger menu span two*/}
              <span
                className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                  showSidebar ? "opacity-0" : ""
                }`}
              ></span>

              {/*hamburger menu span three*/}
              <span
                className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                  showSidebar
                    ? "-rotate-45 -translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
