import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Z_INDEX = {
  zIndex: 1000,
};
const solutions = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
    icon: ChartBarIcon,
  },
  {
    name: "Keyword Research ",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Blog",
    description: "Your customers' data will be safe and secure.",
    href: "blog",
    icon: BookmarkAltIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "About",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Contact",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-body-dark font-inter py-4" style={Z_INDEX}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-center   py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img src="./logo.svg" height={100} width={100} />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-white ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="#"
              className=" text-white hover:bg-clip-text hover:text-transparent font-interr hover:bg-gradient-to-br from-[#FB8753] to-[#FB7877]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-clip-text hover:text-transparent font-interr hover:bg-gradient-to-br from-[#FB8753] to-[#FB7877] "
            >
              Keyword Research
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open
                        ? "text-white hover:text-orange-500"
                        : "text-white hover:text-orange-500",
                      "group  rounded-md inline-flex items-center  "
                    )}
                  >
                    <span className="hover:bg-clip-text hover:text-transparent font-interr hover:bg-gradient-to-br from-[#FB8753] to-[#FB7877]">
                      More
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-white" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute text-interr z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg    overflow-hidden">
                        <div className="relative grid gap-6 bg-body-dark px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700"
                            >
                              <div className="ml-4">
                                <p className="text-base font-interr text-white">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-700 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-interr text-white uppercase">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate"
                                >
                                  <a
                                    href={post.href}
                                    className="font-interr text-white hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="/blog"
                              className="font-interr text-orange-500 hover:text-orange-500"
                            >
                              {" "}
                              View all posts{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-interr text-white hover:text-white"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-inter text-white btnPrimary"
            >
              Get started
            </a>
          </div>
        </div>
      </motion.div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg  bg-body-dark  ">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img src="./logo.svg" height={100} width={100} />
                </div>
                <div className="-mr-2">
                  <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-white ">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700"
                    >
                      <span className="ml-3 text-base font-interr text-white">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="bg-gray-700 bg-opacity-10 rounded-xl py-6 px-5 space-y-6">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-inter text-white bg-gradient-to-br from-[#FB8753] to-[#FB7877]"
                >
                  Get started
                </a>
                <p className="mt-6 text-center text-base font-inter text-white">
                  Existing customer?{" "}
                  <a
                    href="#"
                    className="bg-clip-text text-transparent bg-gradient-to-br from-[#FB8753] to-[#FB7877] "
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
