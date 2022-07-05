export default function Sectionone() {
  return (
    <>
      <div class="p-8 lg:p-16 flex text-center flex-wrap overflow-hidden">
        <div class="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 ">
          <img className="relative" src={"./desktop-dashboard-full.png"} />
        </div>
        <div class="w-full r overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 ">
          <h3 className="font-inter text-5xl">
            High quality content research and prep.
          </h3>
          <br />
          <p className="font-interr leading-7">
            Share your brief, upload your keywords, and let us take care of the
            rest.
            <br /> Our skilled writers will research and craft the content while
            ensuring it’s highly optimized and readable.
          </p>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
