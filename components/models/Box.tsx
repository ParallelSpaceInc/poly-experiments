import { useFrame } from "@react-three/fiber";
import { Dispatch, SetStateAction, useRef, useState } from "react";

interface Box {
  clicked: boolean;
  click: Dispatch<SetStateAction<boolean>>;
  [key: string]: any;
}

export function Box({ clicked, click, ...props }: Box) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
