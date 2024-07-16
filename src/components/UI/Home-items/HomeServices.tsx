"use client";
import useInView from "@/Hooks/useInView";
import BottomToTop from "../Framer-motion/BottomToTop";
import ServiceCard from "../ServiceCard";
import { useGetServicesQuery } from "@/Redux/features/service/serviceApi";
import ServiceSkeleton from "@/components/Skeleton/ServiceSkeleton";
import { IService } from "@/Types/service";

const HomeServiceComponent = () => {
  const { ref, isInView, hasAnimated } = useInView();
  const { data: services, isError, error, isLoading } = useGetServicesQuery({});

  return (
    <section className="px-5 md:px-10" ref={ref}>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mx-auto justify-items-center items-center gap-5 mt-5">
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mx-auto justify-items-center items-center gap-5 mt-5">
          {!isError &&
            services?.data?.length > 0 &&
            services.data.map((service: IService, index: number) => (
              <div className="w-[90%] md:min-w-[95%] lg:min-w-full" key={service.id}>
                {(isInView || hasAnimated) ? (
                  <BottomToTop>
                    <ServiceCard service={service} />
                  </BottomToTop>
                ) : (
                  <ServiceCard service={service} />
                )}
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default HomeServiceComponent;
