"use client";

import { useUploderMutation } from "@/Redux/features/upload/uploadApi";
import {
  useEditUserMutation,
  useUserGetByIdQuery,
} from "@/Redux/features/user/userApi";
import { IProfile } from "@/Types/profile";
import TextInput from "@/components/UI/Form-items/TextInput";
import ToastContainer from "@/components/UI/Toast";
import ICONS from "@/components/shared/Icons/AllIcons";
import { get_error_messages } from "@/lib/Error_message";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const { data: users, isLoading } = useUserGetByIdQuery({});
  const users_data: IProfile = users?.data;
  const { control, handleSubmit } = useForm();
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
    let avatar = "";

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
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

  //error and success handlaing
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-600 text-center mb-6">
                Your Account Details
              </h2>

              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
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

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5 my-1.5">
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

                      <div className="md:col-span-5 mb-1.5"></div>
                      <div className="md:col-span-5 mb-1.5">
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

                      <div className="md:col-span-3 mb-1.5">
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

                      <div className="md:col-span-2 mb-1.5">
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

                      <div className="md:col-span-2 mb-1.5">
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

                      <div className="md:col-span-2 mb-1.5">
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

                      <div className="md:col-span-1 mb-1.5">
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
                              label="Post Code"
                            />
                          )}
                        />
                      </div>

                      <div className="md:col-span-5 text-right mt-3">
                        <div className="inline-flex items-end">
                          <button
                            disabled
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
