import { Box } from "@components/models/Box";
import { ARCanvas } from "@react-three/xr";
import Link from "next/link";
import { useState } from "react";

function Home() {
  const [clicked, click] = useState(false);
  return (
    <div>
      <Link href={"/compare/threejs"}>
        <a>
          <p>Threejs</p>
        </a>
      </Link>
      <Link href={"/compare/view3d"}>
        <a>
          <p>View3D (naver)</p>
        </a>
      </Link>
      <Link href={"/compare/model-viewer"}>
        <a>
          <p>Model-viewer (google)</p>
        </a>
      </Link>
      {/* <ARCanvas style={{ width: "auto", height: "90vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box click={click} clicked={clicked} position={[-1.2, 0, 0]} />
        <Box click={click} clicked={clicked} position={[1.2, 0, 0]} />
      </ARCanvas>
      <button
        style={{ width: 100, height: 100 }}
        onClick={() => {
          click(!clicked);
        }}
      >
        click
      </button> */}
    </div>
  );
}

export default Home;
