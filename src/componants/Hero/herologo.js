import Herovideo from "./Herovideo";
import LogoMarquee from "../Caraousel/Logomarquee";
export default function herologo() {
  return (
    <>
      <section class="box-border  py-12 text-white  bg-[#121180] xl:my-0">
        <Herovideo />

        <LogoMarquee />
      </section>
    </>
  );
}
