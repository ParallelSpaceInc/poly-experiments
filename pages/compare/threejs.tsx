import ModelComponent from "@components/models/knight";
import { OrbitControls } from "@react-three/drei";
import { ARCanvas } from "@react-three/xr";
import type { NextPage } from "next";

const Threejs_Demo: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <ARCanvas camera={{ position: [0, 3, 0] }}>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <ModelComponent />
        <OrbitControls />
      </ARCanvas>
    </div>
  );
};
export default Threejs_Demo;
