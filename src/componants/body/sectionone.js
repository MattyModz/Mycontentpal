import { motion } from "framer-motion";
export default function Sectionone() {
  return (
    <>
      <section class="py-20 bg-white font-inter">
        <div class="flex flex-col px-8 container">
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8  sm:order-last">
              <motion.img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
                className=" object-fill w-full "
                src="Terminal.png"
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p class="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
                Prep.
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Understand your content creation aim.
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Our prepping team will follow your brief meticulously. They’ll
                follow our Prepping Guide to outline your article, so it looks
                attractive and simple for your readers. They also use tools such
                as Text Razor and create the content structure on Surfer SEO,
                which brings the best keywords for your headline compared to
                competitor examples.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 ">
              <motion.img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
                className=" object-fill w-full  "
                src="Terminal.png"
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0  sm:pl-16">
              <p class="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
                Research.
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                A great grasp of your niche
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Don’t worry if you have a tedious subject. Our writers won’t
                begin writing until they’ve researched your niche and become an
                expert themselves. This includes reading articles, watching
                YouTube videos, reading statements on social media and scanning
                through questions and answers on sites such as Quora.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                class="rounded-lg shadow-xl"
                src="https://cdn.devdojo.com/images/december2020/dashboard-03.png"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p class="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
                Create.
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Pen put to paper
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Then our super squad of writers put their powers to work. You
                will always have an introduction, conclusion and FAQs unless
                specifically asked not to have them. Our writers are
                professionals at writing in any tone of voice, whether to make
                people laugh or inform them of the importance of Sourdough
                Bread.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8  sm:order-last">
              <motion.img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
                className=" object-fill w-full "
                src="test1.png"
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16 sm:order-last">
              <p class="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
                Edit.
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Ensuring our writings hit the mark.
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                The writers will then edit their work, double-checking that the
                spelling is in the correct country, the Surfer score is
                sky-scraping, the relevant keywords are used, and the general
                spelling and grammar are high quality.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 ">
              <motion.img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
                className=" object-fill w-full  "
                src="screen2.png"
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0  sm:pl-16 ">
              <p class="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
                Edit AGAIN.
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                A second set of eyes.
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                We don’t believe in the writers editing once, especially by the
                person who wrote the content. It’s then passed on to our
                proofers, the Scooby gang of My Content Pal. Nothing gets past
                them. They inspect your article with a magnifying lens, zeroing
                in on hidden mistakes and forgotten requirements.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                class="rounded-lg shadow-xl"
                src="https://cdn.devdojo.com/images/december2020/dashboard-03.png"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p class="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
                It’s Yours.
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Check the dashboard.
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                And the next time you check your Dashboard, it’ll be there
                waiting to be unwrapped and used to reap the rewards. If there
                are any changes you’d like, no matter how small, your Content
                Manager can get them sent back and fixed immediately. We’re not
                telling you we’re perfect, but we’re perfectly good at amending
                aberrations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
