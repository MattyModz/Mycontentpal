import { motion } from "framer-motion";

export default function Tweets() {
  return (
    <>
      <section class="w-full   sm:py-16 py-12 md:py-20 relative font-interr bg-body-dark ">
        <div class="max-w-7xl mx-auto px-10">
          <div class="flex flex-col mb-7 sm:mb-20 items-start md:items-center justify-center">
            <p class="sm:tracking-widest sm:text-base text-4xl  text-inter font-inter text-white">
              What people are saying about us
            </p>
            <h2 class="text-white mt-2 text-2xl sm:text-4xl tracking-tight font-bold sm:font-extrabold font-interr md:text-5xl dark:text-white">
              Don't just take our word for it.
            </h2>
            <div class="mt-1 md:mt-4 items-center flex text-orange-500">
              <svg
                class="w-8 h-8 sm:block hidden mr-1.5 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 w-full">
            <div class="col-span-4 space-y-6">
              <motion.div
                class="h-auto bg-white rounded-xl shadow-sm p-6 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img
                    src="./JamesGregory.png"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      James Gregory
                    </p>
                    <p class="font-medium text-gray-400 text-sm">
                      Business growth at Searcharoo
                    </p>
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  Level up your content game with content that sells I needed
                  terrific content that aligns with my client's brand narrative
                  and tone while simultaneously positioning them in a certain
                  way in the marketplace.
                  <br />
                  <br /> No other content provider understood that. But Craig
                  did. He's my number one provider now for Surfer SEO-optimized
                  money site content for the foreseeable future.
                </blockquote>
                <svg
                  class="h-auto absolute z-0 top-0 right-0 w-12 opacity-30 mt-6 mr-7 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
              </motion.div>
              <motion.div
                class="h-auto bg-white rounded-xl shadow-sm p-6 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img
                    src="./JamesBrockbank.png"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      James Brockbank
                    </p>
                    <p class="font-medium text-gray-400 text-sm">
                      CEO DigitalLoft
                    </p>
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  "One of the best content agencies we've used...
                  <br />
                  <br />
                  Having tested a number of content agencies over the last six
                  months (and having been left feeling frustrated about the
                  quality delivered by most of these), we recently placed an
                  order with My Content Pal for 60,000 words of content for a
                  recently launched site.
                  <br />
                  <br /> The quality of the content is great, it need minimal
                  edits from our in-house team and the account management is
                  strong, always keeping us updated.
                </blockquote>
                <svg
                  class="h-auto absolute z-0 top-0 right-0 w-12 opacity-30 mt-6 mr-7 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
              </motion.div>
              <motion.div
                class="h-auto bg-white rounded-xl shadow-sm p-6 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img
                    src="/AlexChapman.jpg"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Alex Chapman
                    </p>
                    <p class="font-medium text-sm text-gray-400">
                      Founder and SEO Director - SEO Partners
                    </p>
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  "High Quality and great value.
                  <br /> I’ve been using my content pal for about a year now and
                  for good reason, they deliver. I’ve tried a number of other
                  content companies in the past, but they’ve always fallen
                  short. <br /> <br /> If you’re after quality content, at a
                  good price, give MCP a go."
                </blockquote>
                <svg
                  class="h-auto absolute z-0 top-0 right-0 w-12 opacity-30 mt-6 mr-7 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
