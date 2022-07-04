import Link from "next/link";
import { useState } from "react";

function Home() {
  const [clicked, click] = useState(false);
  return (
    <div>
      <div className="m-10 space-y-10 flex flex-col">
        <Link href={"/compare/threejs"}>
          <a>
            <p className="text-slate-800 text-3xl">Threejs</p>
          </a>
        </Link>
        <Link href={"/compare/view3D"}>
          <a>
            <p className="text-slate-800 text-3xl">View3D (naver)</p>
          </a>
        </Link>
        <Link href={"/compare/model-viewer"}>
          <a>
            <p className="text-slate-800 text-3xl">Model-viewer (google)</p>
          </a>
        </Link>
      </div>
      <div className="m-10">
        <p className="text-4xl">
          The{" "}
          <a
            className="text-blue-400"
            href="https://sketchfab.com/3d-models/grey-knight-0885c00ffa75478e9c6abe6b0370d285"
          >
            Grey Knight
          </a>{" "}
          is created by{" "}
          <a href="https://sketchfab.com/lamedefeu" className="text-blue-400">
            LamedeFeu
          </a>
          .
        </p>
        <p className="text-4xl">License (CC BY 4.0)</p>
      </div>
    </div>
  );
}

export default Home;
