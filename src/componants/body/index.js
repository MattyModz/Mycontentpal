import Sectionone from "./sectionone";
import Intro from "./intro";
export default function Body() {
  return (
    <>
      <section className=" bg-body-dark">
        <Intro />
        <Sectionone />
      </section>
    </>
  );
}
