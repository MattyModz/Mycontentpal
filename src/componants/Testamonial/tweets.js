import { motion } from "framer-motion";

export default function Tweets() {
  return (
    <>
      <section class="w-full   sm:py-16 py-12 md:py-20 relative font-interr bg-gray-50">
        <div class="max-w-7xl mx-auto px-10">
          <div class="flex flex-col mb-7 sm:mb-20 items-start md:items-center justify-center">
            <p class="sm:tracking-widest sm:text-base text-4xl  text-inter font-inter text-black">
              What people are saying about us
            </p>
            <h2 class="text-black mt-2 text-2xl sm:text-4xl tracking-tight font-bold sm:font-extrabold font-interr md:text-5xl dark:text-white">
              Don't just take our word for it.
            </h2>
            <div class="mt-1 md:mt-4 items-center flex text-orange-400">
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
                    src="./skintdad.jpg"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Skint Dad
                    </p>
                    <div className="flex">
                      <p class="font-medium text-gray-400 text-sm">@SkintDad</p>
                      <img
                        src="/twitter-verified-badge.svg"
                        className="w-6 pl-2 h-6 pb-1"
                      />
                    </div>
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  "We exclusively use @mycontentpal for outsourced content.
                  Every article has been of super high quality, with very little
                  changes needed."
                </blockquote>
                <div className="flex justify-end">
                  <img src="twitter-6.svg" class="rounded-full mr-3 w-6 h-6" />
                </div>
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
                    src="./KirstyM.png"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Kirsty M
                    </p>

                    <img src="stars-5-1.svg" class=" mr-3 w-24 h-6" />
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  "Highly recommend the service. I can't believe how easy the
                  briefing process was compared with the quality of the output.
                  The content was tightly on point, and well optimised. Low
                  effort needed from me to get them started. It was like they'd
                  read my mind. Absolutely brilliant."
                </blockquote>
                <div className="flex justify-end">
                  <img
                    src="trustpilot-1 (1).svg"
                    class="rounded-full mr-3 w-24 h-6"
                  />
                </div>
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
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.3 },
                }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img
                    src="./Markslorance.png"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Mark Slorance
                    </p>

                    <img src="stars-5-1.svg" class=" mr-3 w-24 h-6" />
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  "Using MCP is like having my very own in-house editorial team
                  that I never knew I needed. Ever since our company made the
                  decision to use MCP, I've had more time on my hands, which has
                  allowed me to focus on bigger picture issues in our
                  organisation."
                </blockquote>
                <div className="flex justify-end">
                  <img
                    src="trustpilot-1 (1).svg"
                    class="rounded-full mr-3 w-24 h-6"
                  />
                </div>
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

            <div class="col-span-4 sm:block hidden space-y-5">
              <motion.div
                class="h-auto bg-white rounded-xl shadow-sm p-6 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.8 },
                }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img
                    src="./Dylan Thompson.png"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Dylan Thompson
                    </p>
                    <img src="stars-5-1.svg" class=" mr-3 w-24 h-6" />
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  I had a great experience working with Craig and My Content Pal
                  and couldn't have asked for better quality writing. Looking
                  forward to ordering more content in the future.
                </blockquote>
                <div className="flex justify-end">
                  <img
                    src="trustpilot-1 (1).svg"
                    class="rounded-full mr-3 w-24 h-6"
                  />
                </div>
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
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 2.3 },
                }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img
                    src="./Kirsty Mcubbin.jpg"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Kirsty McCubbin
                    </p>
                    <p class="font-medium text-sm text-gray-400">
                      @AffiliateStuff
                    </p>
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  Just had my articles delivered by @mycontentpal . Absolutely
                  brilliant service. They delivered comprehensive optimised
                  content, with minimal briefing needed.
                  <br />
                  <br />
                  As someone who sweats the small stuff this has been an
                  absolute eye opener. Huge difference in mental load.
                </blockquote>
                <div className="flex justify-end">
                  <img src="twitter-6.svg" class="rounded-full mr-3 w-6 h-6" />
                </div>
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
                whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img src="Alex_d.jpg" class="rounded-full mr-3 w-12 h-12" />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Alex
                    </p>
                    <p class="font-medium text-sm text-gray-400">@the_alex_d</p>
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  "If you're in affiliate marketing or work in house and want
                  quality content at scale have a chat eith @craigd0412 about
                  @mycontentpal.
                </blockquote>
                <div className="flex justify-end">
                  <img src="twitter-6.svg" class="rounded-full mr-3 w-6 h-6" />
                </div>

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

            <div class="col-span-4 lg:block hidden space-y-5">
              <motion.div
                class="h-auto bg-white rounded-xl shadow-sm p-6 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img
                    src="./Suganthanmn.jpg"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Suganthan Mohanadasan
                    </p>
                    <p class="font-medium text-sm text-gray-400">
                      @Suganthanmn
                    </p>
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  I’ve used @mycontentpal for a recent project, and I was super
                  impressed with the quality of work and overall process.
                  <br />
                  <br />
                  If you’re looking to create content at scale, reach out to
                  them. Thanks, @craigd0412 for building this phenomenal
                  service.
                </blockquote>
                <div className="flex justify-end">
                  <img src="twitter-6.svg" class="rounded-full mr-3 w-6 h-6" />
                </div>
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
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2 },
                }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img src="Stephen.png" class="rounded-full mr-3 w-12 h-12" />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Stephen McFadden
                    </p>
                    <p class="font-medium text-sm text-gray-400">
                      <img src="stars-5-1.svg" class=" mr-3 w-24 h-6" />
                    </p>
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  My Content Pal really do care about the results you get. They
                  don't cut corners and go above and beyond to ensure the
                  content they provide is of a high quality. <br />
                  Highly recommended!
                </blockquote>
                <div className="flex justify-end">
                  <img
                    src="trustpilot-1 (1).svg"
                    class="rounded-full mr-3 w-24 h-6"
                  />
                </div>
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
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.4 },
                }}
                viewport={{ once: true }}
              >
                <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                  <img
                    src="./ArtprintVicky.png"
                    class="rounded-full mr-3 w-12 h-12"
                  />
                  <div class="relative">
                    <p class="font-semibold text-gray-600 leading-none my-1">
                      Vicky "ArtPrintsVicky"
                    </p>
                    <img src="stars-5-1.svg" class=" mr-3 w-24 h-6" />
                  </div>
                </div>
                <blockquote class="text-gray-400 z-10 leading-7 relative pb-3">
                  Their title it's accurate. There are always be friendly and
                  professional and they provide top writing content for my blog.
                  Much appreciate it your collaboration.
                </blockquote>
                <div className="flex justify-end">
                  <img
                    src="trustpilot-1 (1).svg"
                    class="rounded-full mr-3 w-24 h-6"
                  />
                </div>
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
