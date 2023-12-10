"use client";
import contact from "../../../../assets/contact/contact.png";
import png1 from "../../../../assets/contact/locationn.png";
import png2 from "../../../../assets/contact/phone-call (1).png";
import png3 from "../../../../assets/contact/m.png";
import { useEffect } from "react";
import "./Contact.module.css";
import Image from "next/image";
import TextInput from "../../Form-items/TextInput";
import Button from "../../Button";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import TextArea from "../../Form-items/TextArea";

const Contact = () => {
  const { control, handleSubmit } = useForm();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="mt-16">
      <div className=" text-gray-100 px-5 md:px-8 ">
        <div className="max-w-6xl grid gap-8 grid-cols-1 md:grid-cols-2 xl:px-5 mx-auto text-gray-900 rounded-lg items-center">
          <div className="text-center">
            <Image
              width={undefined}
              height={undefined}
              src={contact}
              alt=""
              className="h-full move-1 rounded-xl"
            />
          </div>

          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 lg:gap-8">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextInput
                      type="text"
                      placeHolder=""
                      currentValue={field.value}
                      onChange={(e) => field.onChange(e)}
                      required={true}
                      id="name"
                      htmlFor="name"
                      label="Full Name"
                    />
                  )}
                />
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
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextArea
                      placeHolder="Your Message"
                      currentValue={field.value}
                      onChange={(e) => field.onChange(e)}
                      required={true}
                    />
                  )}
                />

                <Button
                  type="submit"
                  title="Submit"
                  className=" bg-primary-100 w-full 
					          text-base font-medium rounded"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
