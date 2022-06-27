import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ARbutton from "three/examples/jsm/webxr/ARButton"

function Morph() {
  const glb = useLoader(GLTFLoader, "/MorphStressTest.glb");
  const mixer = new THREE.AnimationMixer(glb.scene);
  const mesh = new THREE.Mesh();
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const mat = new THREE.MeshBasicMaterial();
  mesh.material = mat;
  mesh.geometry = geo;

  // mixer.clipAction(glb.animations[0]).play();
  // mixer.clipAction(glb.animations[1]).play();
  mixer.clipAction(glb.animations[2]).play();
  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
  });
  return <primitive object={glb.scene} position={[0, 1, 0]} />;
}

export default Morph;
