import Link from "next/link";
import { useState } from "react";

function Home() {
  const [clicked, click] = useState(false);
  return (
    <div className="m-10 space-y-10 flex flex-col">
      <Link href={"/compare/threejs"}>
        <a>
          <p className="text-slate-800 text-3xl">Threejs</p>
        </a>
      </Link>
      <Link href={"/compare/view3d"}>
        <a>
          <p className="text-slate-800 text-3xl">View3D (naver)</p>
        </a>
      </Link>
      <Link href={"/compare/model-viewer"}>
        <a>
          <p className="text-slate-800 text-3xl">Model-viewer (google)</p>
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
