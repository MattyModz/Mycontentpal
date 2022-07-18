import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const info = ["James Gregory", "James Brockbank", "Alex Chapman"];
const Role = [
  "   Business growth at Searcharoo",
  "CEO - Digitaloft",
  "Founder & SEO Director",
];
const Tagline = [
  "Level up your content game with content that sells.",
  "One of the best content agencies we've used...",
  "High quality, great value. Craig is at the top of the content Game.",
];
const Image = ["./JamesGregory.png", "JamesBrockbank.png", "AlexChapman.jpg"];
const Body = [
  "'I needed terrific content that aligns with my client's brand narrative and tone wand marketplace positioning. No other content provider understood that. But Craig did.",
  "'The quality of the content is great, it need minimal edits from our in-house team and the account management is strong, always keeping us updated. ",
  "'I’ve been using my content pal for about a year now and for good reason, they deliver. I’ve tried a number of other content companies in the past, but they’ve always fallen short. If you’re after quality content, at a good price, give MCP a go.",
];
const variants = {
  visible: {
    opacity: 1,
    x: 5,
    transition: {
      // duration: 1
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      // duration: 0
    },
  },
};

export class Example extends React.Component {
  state = { isVisible: true, current: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { current } = this.state;
      this.setState({ current: current === info.length - 1 ? 0 : current + 1 });
    }, 6000);
  }
  s;
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { current } = this.state;

    return (
      <div className="font-inter">
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            className="animated-text w-full"
            initial="hidden"
            animate={this.state.isVisible ? "visible" : "hidden"}
            exit="hidden"
            variants={variants}
            key={current}
          >
            <div className="w-full h-full p-5 bg-white rounded-2xl">
              <div className="flex flex-col w-full h-full   space-x-1">
                <div className="flex w-full h-full mt-2 space-x-2">
                  <div className="w-16 h-16 bg-gray-50 rounded-full">
                    <img src={Image[current]} class="rounded-full  w-16 h-16" />
                  </div>
                  <div className=" ">
                    <div className="  rounded-full bg-gray-50  font-bold font-inter">
                      {info[current]}
                    </div>
                    <div className="font-interr xsm:block hidden py-1"> </div>
                    <img src="stars-5-1.svg" class=" mr-3 w-24 h-6 mt-1 " />
                  </div>
                </div>
                <div className="flex flex-grow w-full h-full mt-3 space-x-4 font-inter">
                  <div className="w-full h-full pl-4 bg-gray-50 rounded-xl ">
                    <div className="flex mt-1 sm:block hidden">
                      <img
                        src="trustpilot-1 (1).svg"
                        class="rounded-full mr-3 w-24 h-6 sm:hidden"
                      />
                      <img
                        src="stars-5-1.svg"
                        className="sm:hidden mr-3 w-24 h-6 mt-1 "
                      />
                    </div>
                    <div className="flex justify-end"></div>
                    <div className="mx-auto px-8 py-2">
                      <div className="font-interr italic font-bold mb-1">
                        {" "}
                        {Role[current]}
                      </div>
                      <div className="lg:text-2xl font-inter ">
                        {Tagline[current]} <br />
                        <br />
                      </div>
                      <div className="text-xl sm:block hidden font-inter">
                        {Body[current]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
}
