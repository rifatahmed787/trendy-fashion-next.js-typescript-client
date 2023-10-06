const CustomerServices = () => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 max-w-screen-xl mx-auto">
        <div className="text-center lg:text-start">
          <h4 className="text-[14px] text-sm font-bold text-[#6e6e6e]">
            CUSTOMER SERVICES
          </h4>
          <h1 className="my-2 text-3xl font-bold text-gray-900">
            (+777) 450-15-415
          </h1>
          <h4 className="text-[12px] font-bold text-[#6e6e6e]">
            Monday – Friday: 9:00 - 20:00
          </h4>
        </div>
        <div className="">
          <div className="">
            <h3 className="text-[14px] text-[#6e6e6e] ">NEWSLETTER</h3>
            <div className="my-3 flex bg-white font-sans text-black">
              <div className="flex w-[100%] overflow-hidden rounded border ">
                <input
                  type="text"
                  className="w-full px-2 py-2"
                  placeholder="Search..."
                />
                <button>Submit</button>
              </div>
            </div>
            <p className="text-[14px] text-[#6e6e6e]">
              Sign up to get the latest on new Products, Promotions, Design news{" "}
              <br />
              and more
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerServices;
