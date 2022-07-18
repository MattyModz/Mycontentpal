import Container from "../container";
import ProdHeader from "./header";
import Serviceslider from "./slider";

export default function product() {
  return (
    <>
      <div className="bg-[#111827]  border-blur h-full">
        <Container>
          <ProdHeader />
          <Serviceslider />
        </Container>
      </div>
    </>
  );
}
