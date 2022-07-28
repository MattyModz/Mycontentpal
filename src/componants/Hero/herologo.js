import Herovideo from "./Herovideo";
import LogoMarquee from "../Caraousel/Logomarquee";
export default function herologo() {
  return (
    <>
      <section class="box-border  py-12 text-white    xl:my-0 bg-gray-900">
        <Herovideo />

        <LogoMarquee />
      </section>
    </>
  );
}
