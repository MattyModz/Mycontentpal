import Heroopen from "./Hero";
import Herologo from "./herologo";
import Herovideo from "./Herovideo";
import DesktopHero from "./DesktopHero";
export default function Hero() {
  return (
    <>
      <div className=" h-full">
        <Heroopen />
        <DesktopHero />
        <Herologo />
      </div>
    </>
  );
}
