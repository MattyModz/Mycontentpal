export default function CTA() {
  return (
    <section className="bg-orange-500 container border-4 border-orange-400 rounded-xl ">
      <div class="px-4 mx-auto text-center w-full text-white  p-8 rounded-xl max-w-7xl sm:px-6 lg:px-8 ">
        <h2 class="text-3xl font-extrabold tracking-tight  sm:text-4xl md:text-5xl xl:text-6xl">
          The New Standard for Design
        </h2>
        <p class="max-w-md mx-auto mt-3 text-base  sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Use our award-winning tools to help you maximize your profits. We've
          uncovered the correct recipe for converting visitors into customers.
        </p>
        <div class="flex justify-center mt-8 space-x-3">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-700"
          >
            Sign Up Today
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}