/* eslint-disable react/no-unescaped-entities */

const ContactForm = () => {
  return (
    <>
      <div className="text-left py-16 max-w-screen-2xl mx-auto bg-image-contact h-80 relative my-16">
        <span className="absolute top-0 left-0 inset-0 bg-black opacity-50"></span>
        <div className="w-11/12 lg:w-full rounded-xl mx-auto absolute z-30">
          <h2
            className="text-white font-bold text-3xl lg:text-4xl text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Say Hi Hello! Join our newsletter
          </h2>

          <p
            className="text-lg font-bold text-gray-300 text-center py-3"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Let's talk about what you need to know!!!
          </p>
          <div
            className="flex justify-center items-center py-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <input
              className="shadow-inner rounded px-3 text-md lg:text-lg focus:border-primary-100 focus:outline-none focus:shadow-outline  border-2 border-primary-100 w-full lg:w-1/2 py-6 input-width"
              placeholder="Enter your email"
              type="text"
            />
            <button className="flex items-center -ml-[145px] lg:-ml-[180px] px-5 lg:px-10 shadow-lg bg-primary-100 font-bold text-sm rounded py-3 lg:py-5  text-brand uppercase shake">
              Newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
