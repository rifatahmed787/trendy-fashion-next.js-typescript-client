/* eslint-disable react/no-unescaped-entities */
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
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
import SocialIcons from "@/components/shared/SocialIcons/SocialIcons";

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
      <div className="max-w-6xl  mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 my-20 shadow-custom-primary rounded-2xl overflow-hidden">
          <div className="p-10 bg-white rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-primary font-bold text-primary-100">
              Let's get in touch
            </h3>
            <p className="text-sm pt-5 font-open_sans">
              At Trendy Fashion, we value open communication and are here
              to assist you with any inquiries or support you may need. Whether
              you have questions about our products, need technical assistance,
              or simply want to provide feedback, our dedicated team is ready to
              help. Please feel free to reach out to us via phone, email, or by
              filling out the contact form below. We look forward to connecting
              with you!
            </p>
            <div className="py-8">
              <p className="flex items-center gap-1 font-open_sans">
                <MdLocationPin className="text-2xl text-primary-100" />
                <span>West Kazipara, Mirpur-10, Dhaka</span>
              </p>
              <p className="flex items-center gap-1 font-open_sans py-2">
                <MdEmail className="text-xl text-primary-100" />
                <span>mdrifatahmed787@gmail.com</span>
              </p>
              <p className="flex items-center gap-1 font-open_sans">
                <FaPhone className="text-lg text-primary-100" />
                <span>+880 1945518927</span>
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-3xl lg:text-4xl font-primary font-bold text-primary-100 pb-2">
                Connect with us:
              </h4>
              <div className="flex items-center gap-3 pt">
                <SocialIcons />
              </div>
            </div>
          </div>
          <div className="bg-primary-100 px-5 py-10 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-primary font-bold text-white">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
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
                      className=" border-white focus:border-white  bg-primary-100 text-white placeholder-white"
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
                      className=" border-white focus:border-white  bg-primary-100 text-white placeholder-white"
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextInput
                      type="number"
                      placeHolder=""
                      currentValue={field.value}
                      onChange={(e) => field.onChange(e)}
                      required={true}
                      id="phone"
                      htmlFor="phone"
                      label="Enter Phone"
                      className=" border-white focus:border-white  bg-primary-100 text-white placeholder-white"
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
                      className="h-32 border-white focus:border-white bg-primary-100 text-white placeholder-gray-500"
                    />
                  )}
                />

                <Button
                  type="submit"
                  title="Submit"
                  className="text-lg font-open_sans py-2 bg-white rounded-lg font-semibold hover:bg-primary-100 hover:text-white border-2 hover:border-white duration-500"
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
