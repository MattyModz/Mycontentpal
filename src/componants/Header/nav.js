import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [Menu, ShowMenu] = useState(false);

  const Z_INDEX = {
    zIndex: 1000,
  };

  // bg-[#169CF9]

  return (
    <nav
      style={Z_INDEX}
      className="bg-body-dark w-full select-none  sticky top-0 "
    >
      <div className="flex  items-center  justify-between  h-20   py-2 mx-auto max-w-7xl md:h-20 sm:box-content">
        <div className="flex items-center  ">
          <a
            href="#_"
            className="flex items-center order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center"
          >
            <div className="">
              <div className="pl-8 flex justify-end ">
                <a href="/">
                  <img src="./logo.svg" height={100} width={100} />
                </a>
              </div>
            </div>
          </a>
        </div>{" "}
        <div>
          <div className="py-2 text-white font-bold cursor-pointer sm:block md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none mr-8">
            <svg
              onClick={() => ShowMenu((state) => !Menu)}
              aria-haspopup="true"
              aria-label="Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 "
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="4" y1="16" x2="20" y2="16"></line>
            </svg>
          </div>

          <div className={`${Menu ? "" : "hidden md:block lg:block "}`}>
            <div className="fixed  top-0 z-30 block text-gray-500 cursor-pointer pt-7 sm:pt-8 md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none ">
              <svg
                onClick={() => ShowMenu((state) => !Menu)}
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>

            <ul className="sm:p-4 bg-gray-800  space-between fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center  text-3xl md:space-y-0 md:bg-none md:text-base md:flex md:flex-row md:relative">
              <li
                className="text-white s:text-2xl lg:text-l font-bold cursor-pointer hover:text-gray-400 mr-4"
                onClick={() => ShowMenu((state) => !Menu)}
              >
                <Link href={"/about"} passHref>
                  About
                </Link>
              </li>

              <li
                className="text-white s:text-2xl s:py-4 lg:text-l mb-8  font-bold cursor-pointer   sm:hidden block"
                onClick={() => ShowMenu((state) => !Menu)}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
