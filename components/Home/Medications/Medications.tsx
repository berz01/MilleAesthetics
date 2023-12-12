import React from "react";

const Medications = () => {
  return (
    <div className="lg:mt-[300px] mt-[670px]">
      <div>
        <h3 className="text-center text-2xl px-5 font-semibold text-[#5BD1D7] lg:w-[448px] mx-auto">
          Real Medications. Doctors that care. Delivered to your doorstep.
        </h3>
      </div>
      <div className="md:bg-[url(/assets/background.svg)] bg-[#f3eaff] w-full lg:h-[80vh] h-full md:py-0 py-10  bg-no-repeat bg-center bg-cover mt-12 grid lg:grid-cols-2 grid-cols-1 items-center px-5">
        <div></div>
        <div>
          <img
            src="/assets/mobile_bg.png"
            alt=""
            className="mb-5 rounded md:hidden block"
          />
          <p className="lg:text-3xl text-2xl font-medium text-[#404040] lg:w-[430px]">
            We aim to deliver{" "}
            <span className="text-[#5BD1D7]">premium telemedicine support</span>{" "}
            tailored to your unique health conditions. With our team of highly
            trained clinicians, we ensure that the most potent treatments are{" "}
            <span className="text-[#5BD1D7]">always within your reach.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Medications;
