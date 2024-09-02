
import OrderTabs from "@/components/UserDashboard/My-order/OrderTabs";
import React from "react";
import SideLink from "@/components/UserDashboard/LinkItems/SideLink";

const Orders = () => {
  return (
    <section>
      <div className="container pt-10 px-5 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className=" lg:col-span-1">
           <SideLink/>
          </div>
          <div className="lg:col-span-5">
            <OrderTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
