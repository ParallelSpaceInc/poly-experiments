import { Box } from "@components/models/Box";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

function Home() {
  const [clicked, click] = useState(false);
  return (
    <div>
      <Canvas style={{ width: "auto", height: "90vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box click={click} clicked={clicked} position={[-1.2, 0, 0]} />
        <Box click={click} clicked={clicked} position={[1.2, 0, 0]} />
      </Canvas>
      <button
        style={{ width: 100, height: 100 }}
        onClick={() => {
          click(!clicked);
        }}
      >
        click
      </button>
    </div>
  );
}

export default Home;
