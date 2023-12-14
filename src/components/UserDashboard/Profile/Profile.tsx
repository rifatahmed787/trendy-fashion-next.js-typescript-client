"use client";

import { useUserGetByIdQuery } from "@/Redux/features/user/userApi";
import { IProfile } from "@/Types/profile";
import ICONS from "@/components/shared/Icons/AllIcons";
import Image from "next/image";
import React, { useState } from "react";

import EditProfile from "./EditProfile";
import PostAddress from "./PostAddress";

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { data: users, isLoading } = useUserGetByIdQuery({});
  const users_data: IProfile = users?.data;

  return (
    <div>
      <div className="px-5 pl-5 md:pl-20 pb-16">
        {isEditMode ? (
          // Edit mode
          <>
            {users_data?.address ? (
              <EditProfile
                users_data={users_data}
                setIsEditMode={setIsEditMode}
              />
            ) : (
              <PostAddress setIsEditMode={setIsEditMode} />
            )}
          </>
        ) : (
          // View mode
          <>
            <div className="px-5 pl-5 md:pl-20 pb-16">
              <div className="p-8 bg-white shadow mt-24">
                <div className="relative">
                  <div>
                    {users_data?.avatar ? (
                      <Image
                        src={users_data?.avatar}
                        alt="profile"
                        width={100}
                        height={100}
                        className="object-cover mx-auto rounded-full shadow-xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center"
                      />
                    ) : (
                      <div className="w-28 h-28 bg-indigo-100 mx-auto p-2 rounded-full -mt-24 flex items-center justify-center text-indigo-500">
                        {ICONS.my_profile}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="text-xl md:text-2xl font-bold text-center">
                    {users_data?.username}
                  </h1>
                  <h2 className="text-base text-center">{users_data?.email}</h2>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-16 w-4/5 mx-auto">
                <p>
                  <span className="font-bold">Address:</span>{" "}
                  {users_data?.address?.street_address}
                </p>
                <p>
                  <span className="font-bold">Phone Number:</span>{" "}
                  {users_data?.address?.phone_number}
                </p>
                <p>
                  <span className="font-bold">District:</span>{" "}
                  {users_data?.address?.district_name}
                </p>
                <p>
                  <span className="font-bold">Country:</span>{" "}
                  {users_data?.address?.country}
                </p>
                <p>
                  <span className="font-bold">City:</span>{" "}
                  {users_data?.address?.city}
                </p>
                <p>
                  <span className="font-bold">Post Code:</span>{" "}
                  {users_data?.address?.postal_code}
                </p>
              </div>
              <div className="flex justify-end mt-10 w-11/12 md:w-4/5">
                <button
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 flex items-center gap-1"
                  type="button"
                  onClick={() => setIsEditMode(true)}
                >
                  Edit {ICONS.editicon}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
