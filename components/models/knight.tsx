import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeKnight = () => {
  const mesh = useRef(null);
  const gltf = useLoader(GLTFLoader, "/knight_gltf/scene.gltf");
  return <primitive ref={mesh} object={gltf.scene} position={[0, 0, 0]} />;
};

export default ThreeKnight;
