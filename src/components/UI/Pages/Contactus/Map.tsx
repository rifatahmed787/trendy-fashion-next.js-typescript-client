import ICONS from "@/components/shared/Icons/AllIcons";
import React from "react";

const Map = () => {
  return (
    <section className="bg-white my-10">
      <div className="container px-5 md:px-16 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <a href="mailto: abc@example.com" className="group">
                <span className="inline-block p-3 rounded-full bg-primary-100">
                  {ICONS.email}
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm font-bold ">
                  mdrifatahmed787@gmail.com
                </p>
              </a>
            </div>

            <div>
              <a
                href="https://goo.gl/maps/g94H8WE9VCS4yzoXA"
                target="_blank"
                className="group"
              >
                <span className="inline-block p-3 bg-primary-100 rounded-full">
                  {ICONS.location}
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm font-bold">
                  Kazipara, Mirpur-10, Dhaka
                </p>
              </a>
            </div>

            <div>
              <a href="tel:+88 01303 384414" className="group ">
                <span className="inline-block p-3 bg-primary-100 rounded-full">
                  {ICONS.phone}
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  24/7 hours service
                </p>
                <p className="mt-2 text-sm font-bold">+880 1945518927</p>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3482689250204!2d90.35367527506733!3d23.80621167863229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c162749924dd%3A0x4d0b750e1fcaea7c!2sWeero%20Digital!5e0!3m2!1sen!2sbd!4v1683634586464!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
