import { usePostAddressMutation } from "@/Redux/features/user/userApi";
import { Button } from "@/components/UI/Button";
import TextInput from "@/components/UI/Form-items/TextInput";
import ToastContainer from "@/components/UI/Toast";
import ICONS from "@/components/shared/Icons/AllIcons";
import { get_error_messages } from "@/lib/Error_message";
import React, { useEffect, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const PostAddress = ({
  setIsEditMode,
}: {
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { control, handleSubmit } = useForm();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");

  const [
    addressData,
    {
      isLoading: addressLoading,
      isError: addressIError,
      error: AddressError,
      isSuccess: addressIsSuccess,
    },
  ] = usePostAddressMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await addressData({
        street_address: data.street_address,
        phone_number: data.phone_number,
        district_name: data.district_name,
        country: data.country,
        city: data.city,
        postal_code: data.postal_code,
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
      <div>
        <h1 className="text-base md:text-2xl font-bold title my-10 text-center">
          Add Your Address First !
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Controller
              name="street_address"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  label="Street Address"
                  type="text"
                  onChange={field.onChange}
                  currentValue={field.value}
                  placeHolder=""
                  id="street_address"
                  htmlFor="street_address"
                />
              )}
            />
            <Controller
              name="phone_number"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  label="Phone Number"
                  type="text"
                  placeHolder=""
                  currentValue={field.value}
                  onChange={field.onChange}
                  required={false}
                  id="phone"
                  htmlFor="phone"
                />
              )}
            />
            <Controller
              name="district_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  label="District Name"
                  type="text"
                  placeHolder=""
                  currentValue={field.value}
                  onChange={field.onChange}
                  required={false}
                  id="district"
                  htmlFor="district"
                />
              )}
            />
            <Controller
              name="country"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  label="Country"
                  type="text"
                  placeHolder=""
                  currentValue={field.value}
                  onChange={field.onChange}
                  required={false}
                  id="country"
                  htmlFor="country"
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  label="City"
                  type="text"
                  placeHolder=""
                  currentValue={field.value}
                  onChange={field.onChange}
                  required={false}
                  id="city"
                  htmlFor="city"
                />
              )}
            />
            <Controller
              name="postal_code"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  label="Post Code"
                  type="text"
                  placeHolder=""
                  currentValue={field.value}
                  onChange={field.onChange}
                  required={false}
                  id="post"
                  htmlFor="post"
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
            Cancel
          </button>

          <Button
            type="submit"
            title="Save"
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

export default PostAddress;
