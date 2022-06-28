import ModelComponent from "@components/models/knight";
import { ARCanvas } from "@react-three/xr";
import type { NextPage } from "next";

const Threejs_Demo: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <ARCanvas>
        <ambientLight />
        <pointLight position={[5,5,5]} />
        <ModelComponent />
      </ARCanvas>
    </div>
  );
};
export default Threejs_Demo;
