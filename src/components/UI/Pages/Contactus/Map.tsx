import ICONS from "@/components/shared/Icons/AllIcons";
import React from "react";
import Heading from "../../Heading/Heading";

const Map = () => {
  return (
    <section className="bg-white my-10">
      <div className="overflow-hidden max-w-screen-2xl mx-auto">
        <div className="py-10 text-center">
        <Heading Heading="Find Us On Map"/>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5733244879043!2d90.36773377445698!3d23.798203586941153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cdfe84c5b5%3A0x4e2130281ade5fd9!2s648%2C%203%20Bashundhara%20Ln%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1721159614146!5m2!1sen!2sbd"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
