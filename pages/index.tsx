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
    </div>
  );
}

export default Home;
