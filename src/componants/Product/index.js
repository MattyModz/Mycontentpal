import Container from "../container";
import ProdHeader from "./header";
import Serviceslider from "./slider";
import Content from "./content";
export default function product() {
  return (
    <>
      <div className="bg-body-dark ">
        <Container>
          <ProdHeader />
          <Serviceslider />
        </Container>
      </div>
    </>
  );
}
