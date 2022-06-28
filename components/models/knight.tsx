import { useHelper } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { BoxHelper } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Knight = () => {
  const mesh = useRef(null);
  useHelper(mesh, BoxHelper, "cyan");
  const gltf = useLoader(GLTFLoader, "/knight_gltf/scene.gltf");
  return <primitive ref={mesh} object={gltf.scene} position={[0, 0, 0]} />;
};

export default Knight;
