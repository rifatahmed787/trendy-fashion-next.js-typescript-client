import React from "react";
import { IService } from "@/Types/service";

const HomeServiceDetails = ({ service_details }: { service_details: IService }) => {
  return (
    <div key={service_details.id}>
        <div className="">

        </div>
      <h2>{service_details.value}</h2>
      <p>{service_details.service}</p>
    </div>
  );
};

export default HomeServiceDetails;
