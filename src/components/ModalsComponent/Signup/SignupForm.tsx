"use client";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import TextInput from "@/components/UI/Form-items/TextInput";
import ICONS from "@/components/shared/Icons/AllIcons";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal/Modal";
import ModalBody from "@/components/Modal/ModalBody/ModalBody";
import ModalHeader from "@/components/Modal/ModalHeader/ModalHeader";
import useModal from "@/Hooks/useModal";
import loginlogo from "../../../assets/login/login.jpg";
import Image from "next/image";
import CheckBox from "@/components/UI/Check-box/Checkbox";
import { useUploderMutation } from "@/Redux/features/upload/uploadApi";
import {
  useOtpSignupMutation,
} from "@/Redux/features/auth/authApi";
import { Button } from "@/components/UI/Button";
import { InputOTPForm } from "./InputOTPForm";
import { get_error_messages } from "@/lib/Error_message";
import ToastContainer from "@/components/UI/Toast";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const { control, handleSubmit } = useForm();
  const { isOpen, onClose, openModal } = useModal();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const [uploader] = useUploderMutation();

  const [sendOtp, {data:sendOtpData, isLoading, isSuccess, error, isError }] =
    useOtpSignupMutation();

  const [file, setFile] = useState<File | undefined>();
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // let avatar = "";

    // if (file) {
    //   const formData = new FormData();
    //   formData.append("image", file);

    //   try {
    //     const uploadResponse = await uploader({ data: formData });
    //     if (uploadResponse && "data" in uploadResponse) {
    //       avatar = uploadResponse?.data?.images[0];
    //     }
    //   } catch (error) {
    //     console.error("Error uploading file:", error);
    //   }
    // }

    try {
      await sendOtp({
        email: data.email,
      });
      setUserData({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

  useEffect(() => {
    if (isError && error && "data" in error) {
      setIsAlertOpen(true);
      setAlertType("error");
      const error_messages = get_error_messages(error);
      setAlertMessages(error_messages);
    } else if (isSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages(sendOtpData?.message ?? "OTP Send Successfully");
    }
  }, [
    isError,
    isSuccess,
    sendOtpData?.message,
    error,
  ]);

  return (
    <>
      <Modal isOpen={isOpen("register")} onClose={onClose}>
        <ModalBody>
          <ModalHeader title="Login" onClose={onClose} />

          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
            <Image
              src={loginlogo}
              alt=""
              width={undefined}
              height={undefined}
              className="w-full md:w-1/2"
            />
            {!isSuccess || error || isError ? (
              <>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-3">
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextInput
                            label="First Name"
                            type="text"
                            onChange={field.onChange}
                            currentValue={field.value}
                            placeHolder=""
                            id="firstName"
                            htmlFor="firstName"
                          />
                        )}
                      />
                      <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextInput
                            type="text"
                            placeHolder=""
                            currentValue={field.value}
                            onChange={field.onChange}
                            required={false}
                            id="lastName"
                            htmlFor="lastName"
                            label="Last Name"
                          />
                        )}
                      />
                    </div>

                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextInput
                          type="email"
                          placeHolder=""
                          currentValue={field.value}
                          onChange={field.onChange}
                          required={false}
                          id="email"
                          htmlFor="email"
                          label="Enter Email"
                        />
                      )}
                    />
                    {/* <div className="grid grid-cols-3 -my-2 items-center text-gray-400">
                      <hr className="border-gray-400" />
                      <p className="text-center text-sm">OR</p>
                      <hr className="border-gray-400" />
                    </div>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextInput
                          type="number"
                          placeHolder=""
                          currentValue={field.value}
                          onChange={(e) => field.onChange(e)}
                          required={false}
                          id="email"
                          htmlFor="email"
                          label="Enter Phone"
                        />
                      )}
                    /> */}

                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextInput
                          type="password"
                          placeHolder=""
                          currentValue={field.value}
                          onChange={field.onChange}
                          required={true}
                          id="password"
                          htmlFor="password"
                          label="Password"
                        />
                      )}
                    />
                    {/* <FileInput
                  label=""
                  onChange={(selectedFile) => {
                    setFile(selectedFile);
                  }}
                  currentFile={file}
                  placeholder="Choose an image"
                  required={false}
                  id="image"
                  htmlFor="image"
                  currentValue=""
                /> */}
                  </div>

                  <div className="flex items-center justify-between py-6">
                    <div className="flex items-center">
                      <CheckBox id="remember-me" />
                      <label
                        className="text-[#6F6F6F] text-xs lg:text-sm ml-2"
                        htmlFor="remember-me"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    title="Sign Up"
                    className=" bg-primary-100 w-full 
					          text-base font-medium rounded text-white"
                    icon={isLoading ? ICONS.button_loading_icon : undefined}
                    isDisabled={isLoading}
                  >
                    Sign UP
                  </Button>
                </form>
              </>
            ) : (
              <>
                <InputOTPForm userData={userData} />
              </>
            )}
          </div>
          <div className="flex justify-center py-4">
            <span className=" inline-block text-[#666885] font-secondary">
              Already have an account?{" "}
              <span
                className="text-[#211E52] font-semibold cursor-pointer hover:text-[#211E52]/90"
                onClick={() => openModal("login")}
              >
                Login!
              </span>
            </span>
          </div>
        </ModalBody>
      </Modal>
      {isAlertOpen && (
        <ToastContainer
          type={AlertType}
          messages={AlertMessages}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
        />
      )}
    </>
  );
};

export default SignUpForm;
