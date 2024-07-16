"use client";
import ServiceDetailsSkeleton from "@/components/Skeleton/ServiceDetailsSkeleton";
import HomeServiceDetails from "@/components/UI/Home-items/HomeServiceDetails";
import SubTitle from "@/components/UI/SubTitle/SubTitle";
import { useGetSingleServicesQuery } from "@/Redux/features/service/serviceApi";
import { IService } from "@/Types/service";
import React from "react";

const ServiceDetails = ({ params }: any) => {
  const serviceId = params?.serviceId;

  const { data: service_details_data, isLoading } =
    useGetSingleServicesQuery(serviceId);

  const service_details: IService = service_details_data?.data;

  return (
    <section>
      <div className="bg-primary-100">
            <SubTitle SubTitle="Service Details" className="pt-10 pb-20 text-center"/>
        </div>
      <div>
        {isLoading ? (
          <ServiceDetailsSkeleton />
        ) : (
          <div className="mx-auto max-w-screen-2xl">
            {service_details && (
              <HomeServiceDetails service_details={service_details} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceDetails;
