import Image from "next/image";
import React from "react";

const Journey = () => {
  const data = [
    {
      image: "/img1.png",
      title: "Complete medical intake form",
      des: "so your Medical Doctor can develop the best treatment plan for you.",
    },
    {
      image: "/img2.png",
      title: "Meet with our Doctor",
      des: "A licensed Doctor with weight loss experience will review your information",
    },
    {
      image: "/img3.png",
      title: "Receive medication",
      des: "Receive your GLP-1 medication in the mail every month. Free shipping directly to your door.",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #50504b 0%, #eac300 100%)",
      }}
      className="w-full h-[256px] py-10"
    >
      <div className="flex items-center justify-center">
        <p className="text-2xl text-white text-center w-[250px]">
          Begin your journey in 3 easy steps
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 bg-white lg:w-[1000px] lg:mx-auto px-4 pt-6 rounded-md mt-10 mx-5 lg:border-0 border border-gray-200 lg:shadow-none shadow-lg">
        {data.map((item, i) => (
          <div key={i} className="lg:px-10 pt-8 pb-4">
            <div className="flex items-center justify-center mb-5">
              <Image width={80} height={80} src={item.image} alt="" />
            </div>
            <div>
              <h3 className="text-[#404040] font-bold text-base lg:text-start text-center lg:w-[155px]">
                {item.title}
              </h3>
              <p className="text-sm text-[#404040] lg:w-[192px]  lg:text-start text-center">
                {" "}
                {item.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
