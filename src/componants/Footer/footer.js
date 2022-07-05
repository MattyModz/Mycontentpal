import Link from "next/link";

const Footer = () => {
  return (
    <section class="relative border w-full bg-gray-900 border-gray-700">
      <div class="text-xs text-gray-400 space-y-4 border-b border-gray-700 relative">
        <div class="max-w-7xl border-l border-r border-gray-700 py-6 relative h-full px-10 mx-auto flex flex-col sm:items-center sm:justify-between md:flex-row md:space-y-0">
          <p class="md:mb-0 mb-1">Your personal content writers.</p>
          <div class="flex sm:flex-row flex-col items-start sm:items-center">
            Visit our social channels
            <nav class="flex sm:ml-3 md:mt-0 mt-3 items-center space-x-3">
              <a href="#_" class="transition flex hover:text-white">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#_" class="transition flex hover:text-white">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#_" class="transition flex hover:text-white">
                <svg
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 80 56"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m41.771 55.637-16.395-.3c-5.308-.104-10.63.104-15.834-.978-7.916-1.618-8.477-9.548-9.064-16.2-.809-9.35-.496-18.872 1.03-28.145.862-5.204 4.252-8.309 9.495-8.647C28.703.141 46.52.287 64.18.86c1.865.052 3.743.339 5.582.665 9.078 1.591 9.299 10.578 9.888 18.143.586 7.642.339 15.325-.783 22.915-.9 6.285-2.622 11.556-9.888 12.065-9.104.665-18 1.2-27.129 1.03 0-.04-.052-.04-.078-.04Zm-9.638-15.912c6.86-3.94 13.59-7.813 20.411-11.725-6.873-3.94-13.59-7.813-20.411-11.726v23.451Z"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </a>
              <a href="#_" class="transition flex hover:text-white">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
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
            <a href="#_" class="hover:text-white">
              Home
            </a>
            <a href="#_" class="hover:text-white">
              Products
            </a>
            <a href="#_" class="hover:text-white">
              About
            </a>
            <a href="#_" class="hover:text-white">
              Contact
            </a>
            <a href="#_" class="hover:text-white">
              Resources
            </a>
            <a href="#_" class="hover:text-white">
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
};

export default Footer;
