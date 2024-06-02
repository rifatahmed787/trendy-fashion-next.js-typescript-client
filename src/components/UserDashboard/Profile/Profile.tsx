"use client";

import { useUploderMutation } from "@/Redux/features/upload/uploadApi";
import {
  useEditUserMutation,
  useUserGetByIdQuery,
} from "@/Redux/features/user/userApi";
import { IProfile } from "@/Types/profile";
import BrandButton from "@/components/Button/PrimaryButton";
import Button from "@/components/UI/Button";
import TextInput from "@/components/UI/Form-items/TextInput";
import FileInput from "@/components/UI/Form-items/UpdateFileInput";
import ToastContainer from "@/components/UI/Toast";
import ICONS from "@/components/shared/Icons/AllIcons";
import { get_error_messages } from "@/lib/Error_message";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import SkeletonProfile from "./Skeleton";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const { data: users, isLoading: profileDataLoading } = useUserGetByIdQuery(
    {}
  );
  const users_data: IProfile = users?.data;
  console.log(users_data);
  const { control, handleSubmit, reset } = useForm();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const selectedFile = e.target.files?.[0] || undefined;
    setFile(selectedFile);

    // Create a preview URL for the selected file
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const [
    addressData,
    {
      isLoading: addressLoading,
      isError: addressIError,
      error: AddressError,
      isSuccess: addressIsSuccess,
    },
  ] = useEditUserMutation();
  const [uploader] = useUploderMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let avatar = users_data?.avatar || ""; 

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const uploadResponse = await uploader({ data: formData });
        if (uploadResponse && "data" in uploadResponse) {
          avatar = uploadResponse.data.images[0];
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    try {
      await addressData({
        username: `${data.firstName} ${data.lastName}`,
        email: data.email,
        avatar,
        address: {
          street_address: data.street_address,
          phone_number: data.phone_number,
          district_name: data.district_name,
          country: data.country,
          city: data.city,
          postal_code: data.postal_code,
        },
      });

      setEditMode(false);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  //error and success handling
  useEffect(() => {
    if (addressIError && AddressError && "data" in AddressError) {
      setIsAlertOpen(true);
      setAlertType("error");

      const error_messages = get_error_messages(AddressError);
      setAlertMessages(error_messages);
    } else if (addressIsSuccess) {
      setAlertType("success");
    }
  }, [AddressError, addressIError, addressIsSuccess]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    reset();
    setPreviewUrl(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              {profileDataLoading ? (
                <>
                  <SkeletonProfile />
                </>
              ) : (
                <>
                  {" "}
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="">
                      <div className="text-gray-600 relative">
                        {previewUrl ? (
                          <div className="">
                            <Image
                              src={previewUrl}
                              alt="profile"
                              width={150}
                              height={150}
                              className="object-cover relative mx-auto rounded-full flex items-center justify-center"
                            />
                            <BiEditAlt className="text-xl text-center text-white absolute w-7 h-7 p-1 rounded-full bg-primary-100 right-1/3 bottom-2" />
                          </div>
                        ) : (
                          <div className="">
                            {users_data?.avatar ? (
                              <Image
                                src={users_data?.avatar}
                                alt="profile"
                                width={150}
                                height={150}
                                className="object-cover relative mx-auto rounded-full shadow-xl  flex items-center justify-center"
                              />
                            ) : (
                              <div className="w-28 h-28 bg-indigo-100 mx-auto p-2 rounded-full flex items-center justify-center text-indigo-500">
                                {ICONS.my_profile}
                              </div>
                            )}

                            <BiEditAlt className="text-xl text-center text-white absolute w-7 h-7 p-1 rounded-full bg-primary-100 right-1/3 bottom-2" />
                          </div>
                        )}
                      </div>
                      {/* FileInput component for changing the image */}
                      {editMode && <FileInput
                        label=""
                        onChange={handleFileChange}
                        currentFile={file}
                        placeholder=""
                        required={false}
                        className=" w-40 h-40 rounded-full duration-500 cursor-pointer absolute left-[20%] top-1/3 opacity-0 "
                        disabled={!editMode}
                      />}

                      <h3 className="text-xl md:text-2xl font-primary font-bold mt-3 text-center">
                        {users_data?.username}
                      </h3>
                      <p className="text-base md:text-lg font-secondary font-semibold text-center">
                        {users_data?.email}
                      </p>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-3 my-3">
                          <Controller
                            name="firstName"
                            control={control}
                            defaultValue={
                              users_data?.username?.split(" ")[0] || ""
                            }
                            render={({ field }) => (
                              <TextInput
                                type="text"
                                onChange={field.onChange}
                                currentValue={field.value}
                                placeHolder=""
                                disabled={!editMode}
                                id="firstName"
                                htmlFor="firstName"
                                label="First Name"
                              />
                            )}
                          />
                        </div>
                        <div className="md:col-span-2 my-3">
                          <Controller
                            name="lastName"
                            control={control}
                            defaultValue={
                              users_data?.username?.split(" ")[1] || ""
                            }
                            render={({ field }) => (
                              <TextInput
                                type="text"
                                placeHolder=""
                                currentValue={field.value}
                                onChange={field.onChange}
                                required={false}
                                disabled={!editMode}
                                id="lastName"
                                htmlFor="lastName"
                                label="Last Name"
                              />
                            )}
                          />
                        </div>

                        <div className="md:col-span-5 mb-3">
                          <Controller
                            name="email"
                            control={control}
                            defaultValue={
                              users_data?.email || "Email not found."
                            }
                            render={({ field }) => (
                              <TextInput
                                type="email"
                                placeHolder=""
                                currentValue={field.value}
                                onChange={field.onChange}
                                required={false}
                                disabled={true}
                                id="email"
                                htmlFor="email"
                                label="Email"
                              />
                            )}
                          />
                        </div>
                        <div className="md:col-span-5 mb-3">
                          <Controller
                            name="phone_number"
                            control={control}
                            defaultValue={users_data?.address?.phone_number}
                            render={({ field }) => (
                              <TextInput
                                type="text"
                                placeHolder=""
                                currentValue={field.value}
                                onChange={field.onChange}
                                required={false}
                                disabled={!editMode}
                                id="phone"
                                htmlFor="phone"
                                label="Phone Number"
                              />
                            )}
                          />
                        </div>

                        <div className="md:col-span-3 mb-3">
                          <Controller
                            name="country"
                            control={control}
                            defaultValue={users_data?.address?.country}
                            render={({ field }) => (
                              <TextInput
                                type="text"
                                placeHolder=""
                                currentValue={field.value}
                                onChange={field.onChange}
                                required={false}
                                disabled={!editMode}
                                id="country"
                                htmlFor="country"
                                label="Country"
                              />
                            )}
                          />
                        </div>

                        <div className="md:col-span-2 mb-3">
                          <Controller
                            name="district_name"
                            control={control}
                            defaultValue={users_data?.address?.district_name}
                            render={({ field }) => (
                              <TextInput
                                type="text"
                                placeHolder=""
                                currentValue={field.value}
                                onChange={field.onChange}
                                required={false}
                                disabled={!editMode}
                                id="district"
                                htmlFor="district"
                                label="District"
                              />
                            )}
                          />
                        </div>

                        <div className="md:col-span-2 mb-3">
                          <Controller
                            name="city"
                            control={control}
                            defaultValue={users_data?.address?.city}
                            render={({ field }) => (
                              <TextInput
                                type="text"
                                placeHolder=""
                                currentValue={field.value}
                                onChange={field.onChange}
                                required={false}
                                disabled={!editMode}
                                id="city"
                                htmlFor="city"
                                label="City"
                              />
                            )}
                          />
                        </div>
                        <div className="md:col-span-2 mb-3">
                          <Controller
                            name="street_address"
                            control={control}
                            defaultValue={users_data?.address?.street_address}
                            render={({ field }) => (
                              <TextInput
                                type="text"
                                onChange={field.onChange}
                                currentValue={field.value}
                                placeHolder=""
                                disabled={!editMode}
                                id="street"
                                htmlFor="street"
                                label="Street Address"
                              />
                            )}
                          />
                        </div>
                        <div className="md:col-span-1 mb-3">
                          <Controller
                            name="postal_code"
                            control={control}
                            defaultValue={users_data?.address?.postal_code}
                            render={({ field }) => (
                              <TextInput
                                type="text"
                                placeHolder=""
                                currentValue={field.value}
                                onChange={field.onChange}
                                required={false}
                                id="post"
                                htmlFor="post"
                                disabled={!editMode}
                                label="Post Code"
                              />
                            )}
                          />
                        </div>

                        <div className="md:col-span-5 text-right mt-3">
                          <div className="inline-flex items-end">
                            {!editMode ? (
                              <BrandButton
                                text="Edit Now "
                                className="bg-primary-100 w-full text-base font-medium rounded text-white"
                                onClick={handleEditClick}
                              />
                            ) : (
                              <div className="flex gap-3">
                                <BrandButton
                                  text="Cancel"
                                  className="bg-red-500 w-full text-base font-medium rounded px-5 text-white"
                                  onClick={handleCancelClick}
                                />
                                <Button
                                  type="submit"
                                  title="Save"
                                  className="bg-primary-100 w-full text-base font-medium rounded text-white"
                                  icon={
                                    addressLoading
                                      ? ICONS.button_loading_icon
                                      : undefined
                                  }
                                  isDisabled={addressLoading}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
      {isAlertOpen && (
        <ToastContainer
          type={AlertType}
          messages={AlertMessages}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          className="absolute top-10 z-50 left-0 right-0 mx-auto flex justify-center"
        />
      )}
    </>
  );
};

export default Profile;
