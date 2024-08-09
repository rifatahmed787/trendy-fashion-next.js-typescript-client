import { useUploderMutation } from "@/Redux/features/upload/uploadApi";
import { useEditUserMutation } from "@/Redux/features/user/userApi";
import { IProfile } from "@/Types/profile";
import { Button } from "@/components/UI/Button";
import TextInput from "@/components/UI/Form-items/TextInput";
import FileInput from "@/components/UI/Form-items/UpdateFileInput";
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

const EditProfile = ({
  users_data,
  setIsEditMode,
}: {
  users_data: IProfile;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

      setIsEditMode(false);
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
        <div className="px-5 pl-5 md:pl-20 pt-10">
          <div className=" mt-24">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-32 mx-auto">
                {previewUrl ? (
                  <div className="relative">
                    <Image
                      src={previewUrl}
                      alt="profile"
                      width={100}
                      height={100}
                      className="object-cover mx-auto rounded-full -mt-24 flex items-center justify-center relative"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm text-white bg-black bg-opacity-50 w-28 h-28 rounded-full flex items-center justify-center">
                        Change Image
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    {users_data?.avatar ? (
                      <>
                        {" "}
                        <Image
                          src={users_data?.avatar}
                          alt="profile"
                          width={100}
                          height={100}
                          className="object-cover mx-auto rounded-full -mt-24 flex items-center justify-center relative"
                        />
                      </>
                    ) : (
                      <>
                        {" "}
                        <div className="w-28 h-28 bg-indigo-100 mx-auto p-2 rounded-full -mt-24 flex items-center justify-center text-indigo-500">
                          {ICONS.my_profile}
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm text-white bg-black bg-opacity-50 w-28 h-28 rounded-full flex items-center justify-center">
                        Change Image
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* FileInput component for changing the image */}
              <FileInput
                label=""
                onChange={handleFileChange}
                currentFile={file}
                placeholder="Choose an image"
                required={false}
                className="flex flex-col items-center justify-center w-28 h-28 rounded-full duration-500 cursor-pointer absolute top-0 opacity-0 -ml-14 "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-5">
          <div className="grid grid-cols-2 gap-3">
            <Controller
              name="firstName"
              control={control}
              defaultValue={users_data?.username?.split(" ")[0] || ""}
              render={({ field }) => (
                <TextInput
                  type="text"
                  onChange={field.onChange}
                  currentValue={field.value}
                  placeHolder=""
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue={users_data?.username?.split(" ")[1] || ""}
              render={({ field }) => (
                <TextInput
                  type="text"
                  placeHolder=""
                  currentValue={field.value}
                  onChange={field.onChange}
                  required={false}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Controller
              name="street_address"
              control={control}
              defaultValue={users_data?.address?.street_address}
              render={({ field }) => (
                <TextInput
                  label=""
                  type="text"
                  onChange={field.onChange}
                  currentValue={field.value}
                  placeHolder=""
                />
              )}
            />
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
                />
              )}
            />
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
                />
              )}
            />
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
                />
              )}
            />
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
                />
              )}
            />
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
                />
              )}
            />
          </div>
        </div>

        {/* submit and cancel button */}
        <div className="flex items-center gap-3 mt-5 justify-end">
          <button
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 flex items-center gap-1"
            type="button"
            onClick={() => setIsEditMode(false)}
          >
            Cancel Changes
          </button>

          <Button
            type="submit"
            title="Save Changes"
            className="bg-primary-100 text-base font-medium rounded px-5 py-1.5"
            icon={addressLoading ? ICONS.button_loading_icon : undefined}
            isDisabled={addressLoading}
          >Submit</Button>
        </div>

        {isAlertOpen && (
          <ToastContainer
            type={AlertType}
            messages={AlertMessages}
            isAlertOpen={isAlertOpen}
            setIsAlertOpen={setIsAlertOpen}
            className="absolute top-10 z-50 left-0 right-0 mx-auto flex justify-center"
          />
        )}
      </form>
    </>
  );
};

export default EditProfile;
