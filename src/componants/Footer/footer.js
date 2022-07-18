import Link from "next/link";

export default function Footer() {
  return (
    <section class="relative border w-full bg-gray-900 border-gray-700">
      <div class="text-xs text-gray-400 space-y-4 border-b border-gray-700 relative">
        <div class="max-w-7xl border-l border-r border-gray-700 py-6 relative h-full px-10 mx-auto flex flex-col sm:items-center sm:justify-between md:flex-row md:space-y-0">
          <p class="md:mb-0 mb-1">Your personal content writers.</p>
          <div class="flex sm:flex-row flex-col items-start sm:items-center">
            Visit our social channels
            <nav class="flex sm:ml-3 md:mt-0 mt-3 items-center space-x-3">
              <a
                href="https://twitter.com/mycontentpal"
                class="transition flex hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>

              <a href="#_" class="transition flex hover:text-white"></a>
            </nav>
          </div>
        </div>
      </div>
      <div class="flex md:flex-row flex-col-reverse items-stretch border-l border-r border-gray-700 justify-center h-full mx-auto max-w-7xl md:space-x-10">
        <div class="flex w-full md:w-1/2 flex-col sm:items-center justify-center space-y-5 p-10 md:pr-0 md:items-start">
          <a
            href="#_"
            class="text-white font-extrabold uppercase text- flex items-center"
          >
            <img src="./logo.svg" height={100} width={100} />
          </a>
          <nav class="flex flex-col flex-wrap sm:items-center space-y-4 text-xs font-medium text-gray-500 sm:flex-row sm:space-x-3  lg:space-x-4 sm:space-y-0">
            <a href="/" class="hover:text-white">
              Home
            </a>

            <a href="/about" class="hover:text-white">
              About
            </a>
            <a href="/contact" class="hover:text-white">
              Contact
            </a>

            <a href="/blog" class="hover:text-white">
              Blog
            </a>
          </nav>
          <p class="sm:text-center text-xs leading-5 text-gray-500 md:text-left">
            MyContentpal is a subsidiary of the Charlie Delta Group.
          </p>
        </div>
        <div class="flex w-full md:w-0 border-b md:border-r border-gray-700"></div>
        <div class="w-full md:w-1/2 md:pl-0 p-10 flex sm:items-center md:items-start flex-col justify-center">
          <h4 class="font-bold uppercase text-gray-100">Stay updated</h4>
          <p class="sm:text-center my-3 text-xs leading-5 text-gray-500 md:text-left">
            If you want to get notified about our latest features and updates
            fill out the form below and we promise to only send you updates once
            a week.
          </p>
          <div class="flex w-full space-x-2">
            <input
              type="text"
              placeholder="Enter your email"
              class="block w-full rounded bg-gray-700 placeholder-gray-400 border-gray-700 border text-sm transition px-3"
            />
            <button
              type="submit"
              class="inline-flex w-auto flex-shrink-0 cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded bg-orange-400 px-3 py-2 text-sm font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-purple-700"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div class="text-xs text-gray-400 space-y-4 border-t border-gray-700">
        <div class="max-w-7xl border-l border-r border-gray-700 py-6 h-full px-10 mx-auto flex flex-col sm:items-center sm:justify-between md:flex-row md:space-y-0">
          © {new Date().getFullYear()}, My Content Pal
          <nav class="flex flex-col space-y-1.5 md:mt-0 mt-4 sm:flex-row sm:space-y-0 sm:space-x-3">
            <a href="#" class="transition hover:text-white">
              Terms of Service
            </a>
            <a href="#" class="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" class="transition hover:text-white">
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
