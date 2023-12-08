import ICONS from "@/components/shared/Icons/AllIcons";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="px-5 md:ml-72 pt-24">
        <div className="p-8 bg-transparent shadow">
          <div className="relative">
            <div className="w-48 h-48 mx-auto rounded-full shadow-xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              {ICONS.my_profile}
            </div>
          </div>
          <div className="mt-28">
            <h1 className="text-xl md:text-3xl font-bold text-center">
              MD Rifat
            </h1>
            <h2 className="text-base md:text-lg text-center">
              mdrifatahmed787@gmail.com
            </h2>
          </div>

          <div className="mt-12 flex flex-col justify-center">
            {" "}
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>{" "}
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              {" "}
              Show more
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
