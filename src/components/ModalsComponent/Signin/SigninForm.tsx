"use client";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import ICONS from "../../shared/Icons/AllIcons";
import TextInput from "../../UI/Form-items/TextInput";
import { useUserLoginMutation } from "@/Redux/features/auth/authApi";
import useModal from "@/Hooks/useModal";
import Modal from "@/components/Modal/Modal";
import ModalBody from "@/components/Modal/ModalBody/ModalBody";
import ModalHeader from "@/components/Modal/ModalHeader/ModalHeader";
import CheckBox from "@/components/UI/Check-box/Checkbox";
import Button from "@/components/UI/Button";
import loginlogo from "../../../assets/login/login.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { get_error_messages } from "@/lib/Error_message";
import { ILoginArgs } from "@/Types/auth.types";
import ToastContainer from "@/components/UI/Toast";

const SignInForm = () => {
  const { isOpen, onClose, openModal } = useModal();
  const { control, handleSubmit } = useForm();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [alertMessages, setAlertMessages] = useState("");
  const [login, { data: loginData, isLoading, isError, error, isSuccess }] =
    useUserLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await login(data as ILoginArgs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isError && error && "data" in error) {
      setIsAlertOpen(true);
      setAlertType("error");
      const errorMessages = get_error_messages(error);
      setAlertMessages(errorMessages);
    } else if (isSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages(loginData?.message);
    }
  }, [error, isError, isSuccess, loginData?.message]);
  if (isSuccess) {
    setTimeout(() => {
      onClose();
    }, 3000);
  }

  return (
    <>
      <Modal isOpen={isOpen("login")} onClose={onClose}>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 lg:gap-8">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextInput
                      type="email"
                      placeHolder=""
                      currentValue={field.value}
                      onChange={(e) => field.onChange(e)}
                      required={true}
                      id="email"
                      htmlFor="email"
                      label="Enter Email"
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextInput
                      type="password"
                      placeHolder=""
                      currentValue={field.value}
                      onChange={(e) => field.onChange(e)}
                      required={true}
                      id="password"
                      htmlFor="password"
                      label="Enter Password"
                    />
                  )}
                />
                <div className="flex items-center justify-between gap-10">
                  <div className="flex items-center">
                    <CheckBox id="remember-me" />
                    <label
                      className="text-[#6F6F6F] text-xs lg:text-sm ml-2"
                      htmlFor="remember-me"
                    >
                      Remember me
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="Forgot password"
                      className="text-xs lg:text-sm text-[#6F6F6F]"
                    >
                      Forgot Password
                    </label>
                  </div>
                </div>
                <Button
                  type="submit"
                  title="Submit"
                  className="bg-primary-100 w-full text-base font-medium rounded text-white"
                  icon={isLoading ? ICONS.button_loading_icon : undefined}
                  isDisabled={isLoading}
                />
              </div>
            </form>
          </div>
          <div className="flex justify-center py-4">
            <span className="inline-block text-[#666885] font-secondary">
              Don’t have an account?{" "}
              <span
                className="text-[#211E52] font-semibold cursor-pointer hover:text-[#211E52]/90"
                onClick={() => openModal("register")}
              >
                Join Today!
              </span>
            </span>
          </div>
        </ModalBody>
      </Modal>
      {isAlertOpen && (
        <ToastContainer
          type={alertType}
          messages={alertMessages}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
        />
      )}
    </>
  );
};

export default SignInForm;
