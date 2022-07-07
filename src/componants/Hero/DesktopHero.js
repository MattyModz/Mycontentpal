import React from "react";

export default function DesktopHero() {
  return (
    <section
      class="w-full px-6 overflow-hidden bg-body-dark pt-12  sm:block hidden"
      data-tails-scripts="//unpkg.com/alpinejs"
    >
      <div class="flex mt-10 lg:space-x-8 xl:space-x-10">
        <div class="flex justify-end hidden w-1/5 h-36 lg:block lg:-mt-20">
          <div class="w-full h-full p-6 pb-0 bg-white shadow-sm rounded-2xl">
            <div class="grid grid-cols-12 gap-x-2 gap-y-4">
              <div class="h-3 col-span-2 bg-purple-300 rounded-full"></div>
              <div class="h-3 col-span-6 bg-purple-400 rounded-full"></div>
              <div class="h-3 col-span-4 bg-purple-300 rounded-full"></div>

              <div class="h-3 col-span-4 bg-gray-300 rounded-full"></div>
              <div class="h-3 col-span-3 bg-gray-300 rounded-full"></div>
              <div class="h-3 col-span-5 bg-gray-200 rounded-full"></div>

              <div class="h-3 col-span-6 bg-purple-400 rounded-full"></div>
              <div class="h-3 col-span-4 bg-purple-200 rounded-full"></div>
              <div class="h-3 col-span-2 bg-purple-300 rounded-full"></div>

              <div class="h-3 col-span-2 bg-gray-300 rounded-full"></div>
              <div class="h-3 col-span-6 bg-gray-300 rounded-full"></div>
              <div class="h-3 col-span-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div class="w-16 h-16 mt-2 ml-auto overflow-hidden border-8 border-white rounded-full shadow-sm">
            <img
              src="https://cdn.devdojo.com/tails/avatars/047.jpg"
              class="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div class="w-full h-96 lg:w-4/5">
          <div class="w-full h-full p-4 pb-0 bg-white rounded-b-none shadow-sm rounded-2xl">
            <div class="flex w-full h-full p-4 space-x-4 rounded-b-none bg-gray-50 rounded-2xl">
              <div class="relative flex flex-col justify-between w-32 h-full p-4 bg-white rounded-2xl">
                <div class="relative flex justify-center w-full pt-3">
                  <div class="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50">
                    <svg
                      class="w-5 h-5 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="relative space-y-4">
                  <div class="h-2 rounded-full bg-purple-50"></div>
                  <div class="h-2 rounded-full bg-purple-50"></div>
                  <div class="h-2 rounded-full bg-purple-50"></div>
                </div>
                <div class="relative flex items-center space-x-2">
                  <div class="flex-shrink-0 w-2 h-2 bg-gray-200 rounded-full"></div>
                  <div class="w-full h-2 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              <div class="w-full h-full p-5 bg-white rounded-2xl">
                <div class="flex flex-col w-full h-full space-x-1">
                  <div class="w-full rounded-lg bg-gray-50 h-28"></div>
                  <div class="flex w-full mt-2 space-x-2">
                    <div class="w-12 h-12 bg-gray-100 rounded-full"></div>
                    <div class="flex flex-col space-y-3">
                      <div class="w-32 h-3 mt-2 rounded-full bg-gray-50"></div>
                      <div class="w-24 h-3 mt-2 rounded-full bg-gray-50"></div>
                    </div>
                  </div>
                  <div class="flex flex-grow w-full h-full mt-3 space-x-4">
                    <div class="w-full h-full bg-gray-50 rounded-xl"></div>
                    <div class="w-40 h-full bg-gray-50 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden w-1/5 h-40 lg:block md:-mt-20">
          <div class="flex flex-col items-center justify-center w-full h-full p-5 space-y-4 bg-white shadow-sm rounded-2xl">
            <div class="flex items-center justify-center bg-purple-100 rounded-full w-14 h-14">
              <svg
                class="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                ></path>
              </svg>
            </div>
            <div class="w-20 h-3 bg-gray-100 rounded-full"></div>
            <div class="w-full h-3 bg-gray-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
