export default function Sectionthree() {
  return (
    <>
      <section class="relative w-full  font-inter ">
        <div class="absolute right-0 hidden w-1/2 h-full bg-[url('/pattern.svg')]  md:block"></div>

        <div class="relative flex flex-col md:flex-row"></div>

        <div class="relative px-5 mx-auto py-14 md:pt-20 md:pb-32 max-w-7xl md:px-0 ">
          <div class="relative items-center gap-8 px-4 mx-auto xl:px-0 md:flex">
            <div class="w-full md:pl-10 text-color md:w-1/3">
              <h1 class="text-6xl font-black text-center text-gray-900 s:text-5xl md:text-6xl lg:text-7xl xl:w-full xl:text-8xl md:text-left">
                Research. Prep. Create.
              </h1>

              <p class="mt-2 text-base text-center text-gray-700 sm:text-xl md:text-left xl:text-3xl xl:mt-10 font-interr">
                Share your brief, upload your keywords, and let us take care of
                the rest. <br />
                Our <span className="text-orange-300">
                  skilled writers
                </span>{" "}
                will research and craft the content while ensuring it’s{" "}
                <span className="text-orange-300">highly</span> optimized and
                readable.
              </p>
              <a
                href="#_"
                class="block w-full py-6 mt-5 text-xl font-bold text-center text-white bg-orange-400 rounded-full xl:text-3xl xl:w-11/12 xl:mt-10"
              >
                Get Content
              </a>
            </div>

            <img
              className=" object-fill w-full mt-8 ml-2 md:ml-12 md:mt-0 md:w-2/3"
              src="hp-primary-desktop_e0dab1f509.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
