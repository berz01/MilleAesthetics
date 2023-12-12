"use client";

import Image from "next/image";
import { useState } from "react";

//#5BD1D7

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItem = (
    <>
      <li>
        <a
          href="https://Millie Aesthetics.com/"
          className="font-medium uppercase text-[##404040] text-lg"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#faq"
          className="font-medium uppercase text-[##404040] text-lg"
        >
          Faq
        </a>
      </li>
      <li>
        <a
          href="https://care360.typeform.com/to/fAJ0gYLG"
          target="_blank"
          className="font-medium uppercase text-[##404040] text-lg"
        >
          Get started
        </a>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
        >
          <path
            d="M15.613 3.29688C13.2025 3.29688 10.8462 4.01166 8.84197 5.35084C6.83774 6.69002 5.27564 8.59345 4.3532 10.8204C3.43076 13.0474 3.1894 15.4979 3.65966 17.862C4.12992 20.2262 5.29067 22.3978 6.99512 24.1022C8.69957 25.8067 10.8712 26.9674 13.2353 27.4377C15.5995 27.908 18.05 27.6666 20.2769 26.7442C22.5039 25.8217 24.4073 24.2596 25.7465 22.2554C27.0857 20.2512 27.8005 17.8948 27.8005 15.4844C27.7971 12.2531 26.5119 9.15514 24.2271 6.87028C21.9422 4.58542 18.8443 3.30029 15.613 3.29688ZM9.29423 23.6289C9.97244 22.5682 10.9067 21.6953 12.011 21.0907C13.1153 20.4861 14.354 20.1691 15.613 20.1691C16.872 20.1691 18.1107 20.4861 19.2149 21.0907C20.3192 21.6953 21.2535 22.5682 21.9317 23.6289C20.1251 25.034 17.9017 25.7968 15.613 25.7968C13.3243 25.7968 11.1009 25.034 9.29423 23.6289ZM11.863 14.5469C11.863 13.8052 12.0829 13.0802 12.495 12.4635C12.907 11.8468 13.4927 11.3662 14.1779 11.0823C14.8631 10.7985 15.6171 10.7242 16.3446 10.8689C17.072 11.0136 17.7402 11.3708 18.2646 11.8952C18.7891 12.4197 19.1462 13.0879 19.2909 13.8153C19.4356 14.5427 19.3614 15.2967 19.0775 15.9819C18.7937 16.6672 18.3131 17.2528 17.6964 17.6649C17.0797 18.0769 16.3547 18.2969 15.613 18.2969C14.6184 18.2969 13.6646 17.9018 12.9613 17.1985C12.2581 16.4953 11.863 15.5414 11.863 14.5469ZM23.3192 22.3293C22.2736 20.8142 20.8034 19.642 19.0934 18.9602C20.012 18.2367 20.6822 17.245 21.011 16.1229C21.3398 15.0009 21.3108 13.8042 20.9279 12.6995C20.5451 11.5947 19.8275 10.6367 18.8749 9.95862C17.9224 9.28058 16.7822 8.91622 15.613 8.91622C14.4438 8.91622 13.3036 9.28058 12.351 9.95862C11.3985 10.6367 10.6809 11.5947 10.298 12.6995C9.91521 13.8042 9.88616 15.0009 10.2149 16.1229C10.5437 17.245 11.214 18.2367 12.1325 18.9602C10.4225 19.642 8.95231 20.8142 7.90673 22.3293C6.58552 20.8436 5.72197 19.0076 5.42007 17.0424C5.11816 15.0772 5.39077 13.0667 6.20507 11.2529C7.01937 9.43903 8.34064 7.89927 10.0098 6.81899C11.6789 5.73871 13.6248 5.16396 15.613 5.16396C17.6012 5.16396 19.547 5.73871 21.2162 6.81899C22.8853 7.89927 24.2066 9.43903 25.0209 11.2529C25.8352 13.0667 26.1078 15.0772 25.8059 17.0424C25.504 19.0076 24.6404 20.8436 23.3192 22.3293Z"
            fill="#525252"
          />
        </svg>
      </li>
    </>
  );

  return (
    <div className="shadow-lg">
      <div className="px-4 py-5 container mx-auto">
        <div className="relative flex items-center justify-between">
          <Image
            src="/assets/millielogo.svg"
            width={200}
            height={100}
            alt=""
            className="w-[160px] object-contain h-auto"
          />

          <ul className="flex items-center hidden space-x-8 lg:flex">
            {navItem}
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <Image
                      src="/assets/millielogo.svg"
                      width={200}
                      height={100}
                      alt=""
                      className="w-full"
                    />
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">{navItem}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
