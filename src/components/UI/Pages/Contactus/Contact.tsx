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
      <div className=" text-gray-100 px-8 ">
        <div className="max-w-6xl grid gap-8 grid-cols-1 md:grid-cols-2 px-8 xl:px-5 mx-auto text-gray-900 rounded-lg items-center">
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

      <div className="max-w-screen-xl  grid justify-items-center items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-auto py-16">
        <a
          href="https://goo.gl/maps/g94H8WE9VCS4yzoXA"
          target="_blank"
          className="group"
        >
          <div className="flex items-center border border-white group-hover:border-primary-100 duration-300 gap-4  bg-white shadow py-10 px-10 rounded-lg brand">
            <p className="bg-brand rounded-lg ">
              <Image
                src={png1}
                alt=""
                width={undefined}
                height={undefined}
                className="w-16 h-16  p-3"
              />
            </p>
            <div>
              <h1 className="text-3xl font-bold title">Our Address</h1>
              <p className="text-base font-semibold text-gray-500">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </a>

        {/* tel:+4733378901" */}
        <a href="tel:+88 01303 384414" className="group ">
          <div className="flex items-center gap-4 border border-white group-hover:border-primary-100 duration-300 bg-white shadow py-10 px-12 rounded-lg brand">
            <p className="bg-brand rounded-lg ">
              <Image
                width={undefined}
                height={undefined}
                src={png2}
                alt=""
                className="w-16 h-16  p-3"
              />
            </p>
            <div>
              <h1 className="text-3xl font-bold title">Our Phone</h1>
              <p className="text-base font-semibold text-gray-500">
                +880 1945518927{" "}
              </p>
            </div>
          </div>
        </a>
        <a href="mailto: abc@example.com" className="group">
          <div className="flex items-center border border-white group-hover:border-primary-100 duration-300 gap-4 bg-white shadow py-10 px-5 rounded-lg brand">
            <p className="bg-brand rounded-lg w-16 h-16">
              <Image
                width={undefined}
                height={undefined}
                src={png3}
                alt=""
                className="  p-3"
              />
            </p>
            <div>
              <h1 className="text-3xl font-bold px-5 title">Our Email</h1>
              <p className="text-base font-semibold text-gray-500">
                mdrifatahmed787@gmail.com
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* google map */}
      <div>
        <div className="w-full h-80 mt-3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3482689250204!2d90.35367527506733!3d23.80621167863229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c162749924dd%3A0x4d0b750e1fcaea7c!2sWeero%20Digital!5e0!3m2!1sen!2sbd!4v1683634586464!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
