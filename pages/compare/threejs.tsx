import ThreeKnight from "@components/models/knight";
import { OrbitControls } from "@react-three/drei";
import { ARCanvas } from "@react-three/xr";
import type { NextPage } from "next";

const Threejs_Demo: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <ARCanvas camera={{ position: [0, 0, 2] }}>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <ThreeKnight />
        <OrbitControls />
        <axesHelper args={[5]} />
      </ARCanvas>
    </div>
  );
};

export default Threejs_Demo;
