import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Knight = () => {
  const gltf = useLoader(GLTFLoader, "/knight_gltf/scene.gltf");
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
};

export default Knight;
