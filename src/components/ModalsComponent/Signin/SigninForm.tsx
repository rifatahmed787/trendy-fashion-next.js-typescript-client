"use client";

import ICONS from "../../shared/Icons/AllIcons";
import TextInput from "../../UI/Form-items/TextInput";
import { useUserLoginMutation } from "@/Redux/features/auth/authApi";
import useModal from "@/Hooks/useModal";
import Modal from "@/components/Modal/Modal";
import ModalBody from "@/components/Modal/ModalBody/ModalBody";
import ModalHeader from "@/components/Modal/ModalHeader/ModalHeader";
import { Formik } from "formik";
import toast from "react-hot-toast";
import CheckBox from "@/components/UI/Check-box/Checkbox";

const SignInForm = () => {
  const { isOpen, onClose, openModal } = useModal();
  // login mutation hook
  const [login, { isLoading }] = useUserLoginMutation();

  return (
    <Modal isOpen={isOpen("login")} onClose={onClose}>
      <ModalBody>
        <ModalHeader title="Login" onClose={onClose} />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
              const loginRes = await login(values).unwrap();
              toast.success(loginRes?.message);
              onClose();
            } catch (err: any) {
              toast.error(err?.data?.message);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 lg:gap-8">
                <TextInput
                  label="Email address"
                  type="email"
                  required
                  onChange={handleChange}
                  currentValue={""}
                  placeHolder={""}
                />
                {errors.email && touched.email && errors.email}

                <TextInput
                  label="Password"
                  type="password"
                  required
                  onChange={handleChange}
                  currentValue={""}
                  placeHolder={""}
                />
                {errors.password && touched.password && errors.password}

                <div className="flex items-center justify-between">
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

                <button
                  className="btn btn-dark font-bold mt-4 rounded-2xl hover:ring-[2px]"
                  type="submit"
                  disabled={isSubmitting || isLoading}
                >
                  {/* {isSubmitting ? "Loging..." : "Login"} */}
                  <span className="flex justify-center items-center gap-x-1">
                    {(isSubmitting || isLoading) && ICONS.button_loading_icon}
                    Login
                  </span>
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div className="flex justify-center py-4">
          <span className=" inline-block text-[#666885]">
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
  );
};

export default SignInForm;
