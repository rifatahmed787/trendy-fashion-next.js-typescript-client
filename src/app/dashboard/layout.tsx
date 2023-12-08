import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default DashboardLayout;
