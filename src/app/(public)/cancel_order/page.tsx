import CancelOrder from '@/components/UserDashboard/CancelOrder/CancelOrder';
import SideLink from '@/components/UserDashboard/LinkItems/SideLink';
import React from 'react';

const Cancel = () => {
    return (
        <section>
        <div className="container pt-10 px-5 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-6">
            <div className="lg:col-span-1">
             <SideLink/>
            </div>
            <div className=" lg:col-span-5">
              <CancelOrder/>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Cancel;