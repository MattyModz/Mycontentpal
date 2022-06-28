import Marquee from "react-fast-marquee";

const data = [
  { img: "./logo.svg" },
  { img: "./logo.svg" },
  { img: "./logo.svg" },
  { img: "./logo.svg" },
  { img: "./logo.svg" },
];

export default function LogoMarquee() {
  return (
    <>
      <span className="flex justify-center text-center text-3xl p-8 font-inter py-8">
        Trusted by leading brands and agencies
      </span>
      <Marquee gradient={false}>
        <div className="flex mt-4">
          {data.map(function (d, idx) {
            return (
              <span key={idx}>
                <img className="mr-16" src={d.img} />
              </span>
            );
          })}
        </div>
      </Marquee>
    </>
  );
}
