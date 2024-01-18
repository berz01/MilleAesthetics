"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border rounded-[6px] shadow-sm bg-white">
      <button
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="lg:text-lg text-start text-base font-medium text-[#404040]">
          {title}
        </p>
        <div className="flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-black transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700 lg:text-base text-sm">{children}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    /* 

The Mille Aesthetics obesity telemedicine program is powered by the Care360™ platform by CareValidate Inc. Care360™ is a patient management platform that collaborates with independent physicians and practitioners providing services through the SOC2 and HIPAA Compliant Care360 platform. CareValidate Inc. does not directly offer medical or pharmacy services, and payment does not guarantee the prescription writing or dispensing process. Medical services are facilitated by independent providers and Patel Group PC. The information presented on this website is for informational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment. If you have questions or concerns about your health, please consult with your doctor.”


*/

    {
      title: "Platform Information",
      des: "The Mille Aesthetics obesity telemedicine program is powered by the CareGLP™ platform by CareValidate Inc. CareGLP™ is a patient management platform that collaborates with independent physicians and practitioners providing services through the SOC2 and HIPAA Compliant Care360 platform. CareValidate Inc. does not directly offer medical or pharmacy services, and payment does not guarantee the prescription writing or dispensing process. Medical services are facilitated by independent providers and CareGLP's telehealth clinician network. The information presented on this website is for informational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment. If you have questions or concerns about your health, please consult with your doctor.",
    },
    {
      title: "How does Mille Aesthetics's Weight loss program work?",
      des:
        "Mille Aesthetics is designed to be more than a telehealth platform, but still simple for our clients. You can start treatment in three easy-steps.\n" +
        " 1) Complete our elgibility quiz and have our providers may request lab work done to verify a medical need for treatment.\n" +
        " 2) Speak to your new healthcare provider through a telehealth appointment.\n" +
        " 3) If medically appropriate, receive your medication in the mail every 30-days, or 60-days, or 90-days from our mail order pharmacy provider (depending on your provider’s decision).\n" +
        " We want to enable you to form a long-term connection with your provider so that they can provide ongoing care for your specific condition. With that in mind, The Mille Aesthetics weight loss program is designed for patients seeking long-term care.",
    },
    {
      title: "Is this confidential?",
      des: "Yes. Your medical data and order history can only be viewed by our medical team and prescribers. You can view our Privacy Policy for more information.",
    },
    {
      title: "Do I need a prescription?",
      des: "If you're eligible for treatment, our medical team will issue you a private prescription. You don't need an existing prescription to use the Mille Aesthetics Weight loss program!",
    },
    {
      title: "How much is Mille Aesthetics's Weight loss program?",
      des:
        "Mille Aesthetics's Weight loss program will create a customized prescription plan. Guided by doctors you will receive a personalized plan, medication, and support.\n" +
        "The cost is $395 for the 1st month, which includes Medical Telehealth Consultation, Prescription, 1-Month of Segmaglutide Medication, and Shipping",
    },
    {
      title: "Safety Information",
      des:
        "Notify your provider immediately if you notice a lump or swelling in your neck, hoarseness, difficulty swallowing, or shortness of breath. These could be symptoms of thyroid cancer.\n" +
        "Semaglutide is contraindicated if you or any of your family members have ever had medullary thyroid carcinoma (MTC), or if you suffer from an endocrine system condition called Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).\n" +
        "The safety and efficacy of combining semaglutide with other weight loss products have not been established.\n" +
        "Sharing your complete medical history with your provider is crucial. Specifically, inform your provider if you have a history of:\n" +
        "Type 1 or Type 2 diabetes,\n" +
        "Thyroid cancer,\n" +
        "Pancreatitis,\n" +
        "Kidney disease,\n" +
        "Diabetic retinopathy,\n" +
        "Depression,\n" +
        "Suicidal thoughts or behavior,\n",
    },
    {
      title: "How often will I receive a shipment?",
      des: "Your shipment will arrive promptly after our doctors review your progress and issue the next prescription. Routinely every 30 days. You will always have medicine on hand to continue your journey.",
    },
    {
      title: "How much weight will I lose?",
      des: "Actual weight lost is dependent on a number of factors but many Henry Meds clients lose around 5% of their initial body weight. Over 12 weeks, it can be as high as 10%. This equates to a weight loss of 10–20 pounds for a 200 pound person",
    },
    {
      title: "How do I inject my medicine?",
      des: "Please see our learning videos on GLP1 Injection How-to-Videos about performing a subcutaneous injection. Always ask your provider or licensed medical professional if you have any difficulties or questions.",
    },
  ];

  // high yellow - #eac300
  // mid - #fedc80
  // light-white yellow - #fff8e6

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #eac300 0%, #ded9c0 50%, #ded9c0 100%)",
      }}
      className="lg:pt-[96px] pt-[70px] lg:pb-[160px] pb-[70px] rounded shadow-2xl -mt-[3px]"
    >
      <div className="lg:w-[1000px] w-full mx-auto px-5">
        <h2 className="text-center lg:text-4xl text-3xl text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Item key={i} title={faq.title}>
                {faq.des}
              </Item>
            ))}
          </div>
          <div className="lg:mt-20 mt-10">
            <Link
              href="https://carevalidate.jotform.com/240098066578971"
              target="_blank"
            >
              <button className="w-full bg-[#eac300] rounded-lg py-3 flex items-center gap-2 justify-center">
                <span className="text-white text-lg">See if I qualify</span>
                <Image
                  width={28}
                  height={28}
                  src="/assets/right-arrow.png"
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
