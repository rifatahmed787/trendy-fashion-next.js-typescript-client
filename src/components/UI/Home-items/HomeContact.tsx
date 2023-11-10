/* eslint-disable react/no-unescaped-entities */

const ContactForm = () => {
  return (
    <>
      <div className="text-left py-16 max-w-screen-2xl mx-auto bg-image-contact h-80 relative mt-10">
        <span className="absolute top-0 left-0 inset-0 bg-black opacity-50"></span>
        <div className="w-11/12 lg:w-full rounded-xl mx-auto absolute z-30">
          <h2 className=" font-bold text-2xl lg:text-4xl text-center text-gray-200">
            Join our newsletter
          </h2>

          <p className="text-lg font-bold text-gray-300 text-center py-3">
            Let's talk about what you need to know!!!
          </p>
          <div className="flex justify-center items-center py-5">
            <input
              className="shadow-inner rounded px-3 text-md lg:text-lg focus:border-primary-100 focus:outline-none focus:shadow-outline  border-2 border-primary-100 w-full lg:w-1/3 py-3 input-width"
              placeholder="Enter your email"
              type="text"
            />
            <button className="flex items-center -ml-[130px] lg:-ml-[140px] px-3 lg:px-5 shadow-lg bg-primary-100 font-bold text-sm rounded py-2 lg:py-3  text-brand uppercase shake">
              Newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
