import Container from "../container";
import ProdHeader from "./header";
import Serviceslider from "./slider";

export default function product() {
  return (
    <>
      <div className="bg-gray-900    bg-no-repeat border-blur h-full">
        <Container>
          <div className=" rounded-xl">
            <ProdHeader />
            <Serviceslider />
          </div>
        </Container>
      </div>
    </>
  );
}
