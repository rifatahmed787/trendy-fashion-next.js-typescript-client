"use client";
import { useEffect, useState, useContext } from "react";

import { DarkModeContext } from "../DarkModeContext/DarkModeContext";
import Link from "next/link";
import ICONS from "../shared/Icons/AllIcons";
import TextInput from "../UI/Form-items/TextInput";
import Button from "../UI/Button";
import ToastContainer from "../UI/Toast";
import { get_error_messages } from "@/lib/Error_message";
import { useUserLoginMutation } from "@/Redux/features/auth/authApi";

const SignInForm = () => {
  const { darkMode } = useContext(DarkModeContext);
  // login mutation hook
  //   const [login, { isLoading, isError, error, isSuccess }] =
  //     useUserLoginMutation();

  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");

  // form state
  const [sign_in_form, setSignInform] = useState({
    email: "",
    password: "",
  });

  //formSubmitHandler
  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const loginArgs = {
      email: sign_in_form.email,
      password: sign_in_form.password,
    };

    // login(loginArgs);
  };

  // Input handler
  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setSignInform((prev) => ({ ...prev, [key]: e.target.value }));
  };

  //error and success handlaing
  //   useEffect(() => {
  //     if (isError && error && "data" in error) {
  //       setIsAlertOpen(true);
  //       setAlertType("error");
  //       const error_messages = get_error_messages(error);
  //       setAlertMessages(error_messages);
  //     } else if (isSuccess) {
  //       setIsAlertOpen(true);
  //       setAlertType("success");
  //       setAlertMessages("Logged in successfully");
  //     }
  //   }, [error, isError, isSuccess]);

  return (
    // <div
    //   className={`min-h-screen w-full  flex items-center justify-center ${
    //     darkMode ? "bg-black" : "bg-box-pattern "
    //   }`}
    // >
    //   <form
    //     onSubmit={formSubmitHandler}
    //     className={`relative flex  max-w-lg rounded-xl w-full  flex-col gap-4 backdrop-blur-3xl bg-white/80 px-10 md:px-[74px] py-12 ${
    //       darkMode ? "bg-gradient-backdrop" : ""
    //     }`}
    //   >
    //     <div className="flex items-center justify-between gap-3 flex-wrap ">
    //       <h1 className=" text-4xl  font-anton text-ceter text-primary">
    //         LOG IN TO TRENDY_FASHION
    //       </h1>

    //       <Link href={"/"} className="flex items-center  gap-2 text-primary">
    //         {ICONS.home} Back to home
    //       </Link>
    //     </div>

    //     <div className="flex flex-col gap-6 mt-5">
    //       <TextInput
    //         type="email"
    //         placeHolder=""
    //         currentValue={sign_in_form.email}
    //         onChange={(e) => {
    //           inputChangeHandler(e, "email");
    //         }}
    //         required={true}
    //         id="email"
    //         htmlFor="email"
    //         label="Email"
    //       />
    //       <TextInput
    //         type="password"
    //         placeHolder=""
    //         currentValue={sign_in_form.password}
    //         onChange={(e) => {
    //           inputChangeHandler(e, "password");
    //         }}
    //         required={true}
    //         id="password"
    //         htmlFor="password"
    //         label="Password"
    //       />
    //     </div>

    //     {/* Submit button */}
    //     <Button
    //       type="submit"
    //       title="Submit"
    //       className="mt-6 bg-primary w-full
    // 			 text-base font-medium rounded"
    //       //   icon={isLoading ? ICONS.button_loading_icon : undefined}
    //       //   isDisabled={isLoading}
    //     />

    //     {/* Signin Footer note */}
    //     <div>
    //       <p
    //         className={`font-inter text-base text-[#000] text-center ${
    //           darkMode ? "text-gray-300" : ""
    //         }`}
    //       >
    //         Not registered?
    //         <Link href={"/auth/signup"}>
    //           <span className="ml-2  underline">Create an Account</span>
    //         </Link>
    //       </p>
    //     </div>

    //     {/* Toast */}
    //     {isAlertOpen && (
    //       <ToastContainer
    //         type={AlertType}
    //         messages={AlertMessages}
    //         isAlertOpen={isAlertOpen}
    //         setIsAlertOpen={setIsAlertOpen}
    //         className="absolute  top-20 z-50 left-0 right-0 mx-auto flex justify-center"
    //       />
    //     )}
    //   </form>
    // </div>
    <div
      id="signinModal"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Signin To Trendy.
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="signinModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
