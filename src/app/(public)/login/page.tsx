"use client";
import useModal from "@/Hooks/useModal";
import { selectAuth } from "@/Redux/features/auth/authSlice";
import SignInForm from "@/components/ModalsComponent/Signin/SigninForm";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const Login = () => {
//   const { user, accessToken } = useSelector(selectAuth);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleExpand = (e: MouseEvent, status: boolean) => {
//     e.stopPropagation();
//     setIsExpanded(status);
//   };

//   return (
//     <div>
//       <SignInForm />
//     </div>
//   );
// };

// export default Login;
