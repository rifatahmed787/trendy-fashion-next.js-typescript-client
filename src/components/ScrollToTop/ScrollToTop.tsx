"use client";
import React from "react";
import ScrollToTopComponent from "react-scroll-to-top";

const ScrollToTop = () => {
  const scrollButtonStyle = {
    backgroundColor: "#FFC50F",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    zIndex: "9999",
  };
  return (
    <>
      <ScrollToTopComponent
        smooth
        color="#fffff"
        style={scrollButtonStyle}
        className="flex justify-center items-center"
      />
    </>
  );
};

export default ScrollToTop;
