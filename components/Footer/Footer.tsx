import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" border-t border-gray-100 mt-20">
      <div className="px-4 pt-16 mx-auto container">
        <div className="grid row-gap-10 mb-8">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            <div>
              <p className="font-medium text-[#171717] lg:text-lg text-base">
                About Us
              </p>
              <ul className="mt-2 lg:space-y-2">
                <li>
                  <Link href="/" className="lg:text-sm text-[#404040] text-xs">
                    About MilleAesthetics.com
                  </Link>
                </li>
                <li>
                  <Link href="/" className="lg:text-sm text-[#404040] text-xs">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://carevalidate.jotform.com/240098066578971"
                    target="_blank"
                    className="lg:text-sm text-[#404040] text-xs"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#171717] lg:text-lg text-base">
                Existing Customers
              </p>
              <ul className="mt-2 lg:space-y-2">
                <li>
                  <Link href="https://careglp.carevalidate.com/login" className="lg:text-sm text-[#404040] text-xs">
                    Patients Portal
                  </Link>
                </li>
                <li>
                  <Link href="/" className="lg:text-sm text-[#404040] text-xs">
                    Instructions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#171717] lg:text-lg text-base">
                Helpful Links
              </p>
              <ul className="mt-2 lg:space-y-2">
                <li>
                  <Link href="/" className="lg:text-sm text-[#404040] text-xs">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="https://support.careglp.com/support/home" className="lg:text-sm text-[#404040] text-xs">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#171717] lg:text-lg text-base">
                Contact Us
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <div className="flex gap-[6px] items-center">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/email.png"
                      alt=""
                      className="lg:w-5 w-4"
                    />
                    <a
                      href="mailto:-support-careglp@carevalidate.com"
                      className="lg:text-sm text-xs text-[#404040]"
                    >
                      support-careglp@carevalidate.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-[6px]">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/phone.png"
                      alt=""
                      className="lg:w-5 w-4"
                    />
                    <a
                      className="lg:text-sm text-xs text-[#404040]"
                      href="tel:8443573601"
                    >
                      844-357-3601
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="mb-[74px]">
          <Image
            src="/assets/footer-logo.svg"
            width={140}
            height={120}
            alt=""
            className="w-[140px]"
          />
        </div> */}

        <div className="flex flex-col justify-between lg:pt-5 pb-10 sm:flex-row">
          <p className="lg:text-sm text-xs text-[#737373]">
            © 2023 Mille Aesthetics, Inc. All rights reserved.
          </p>
          <div className="flex items-center lg:mt-4 mt-2 lg:space-x-4 space-x-2 sm:mt-0">
            <Link
              className="text-[#5B21B6] lg:mx-1 underline lg:text-sm text-xs"
              href="https://www.MilleAesthetics.com/terms-of-services"
            >
              Terms & Conditions.
            </Link>
            <Link
              className="text-[#5B21B6] lg:mx-1 underline lg:text-sm text-xs"
              href="https://www.MilleAesthetics.com/privacy"
            >
              Privacy Policy.
            </Link>
            <Link
              className="text-[#5B21B6] lg:mx-1 underline lg:text-sm text-xs"
              href="/"
            >
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
