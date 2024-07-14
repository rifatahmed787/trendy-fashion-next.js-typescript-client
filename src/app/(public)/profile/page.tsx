import Profile from "@/components/UserDashboard/Profile/Profile";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Trendy Fashion / profile",
  description: "This is your profile section. You can change your profile from here.",
};

const MyProfile = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default MyProfile;
