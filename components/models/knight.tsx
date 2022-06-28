import "@google/model-viewer";
import { useHelper } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { BoxHelper } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const ThreeKnight = () => {
  const mesh = useRef(null);
  useHelper(mesh, BoxHelper, "cyan");
  const gltf = useLoader(GLTFLoader, "/knight_gltf/scene.gltf");
  return <primitive ref={mesh} object={gltf.scene} position={[0, 0, 0]} />;
};

export const GoogleKnight = () => {
  return (
    <model-viewer
      style={{ height: "1000px", width: "1200px" }}
      src="/knight_gltf/scene.gltf"
      ios-src=""
      poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
      alt="A 3D model of an astronaut"
      camera-controls
      auto-rotate
      ar
    ></model-viewer>
  );
};
