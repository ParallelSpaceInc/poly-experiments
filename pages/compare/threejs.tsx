import { ARCanvas } from "@react-three/xr";
import type { NextPage } from "next";
import { lazy, Suspense } from "react";

const Threejs_Demo: NextPage = () => {
  const ModelComponent = lazy(() => import("@components/models/knight"));
  return (
    <div className="h-screen w-screen">
      <Suspense fallback={"loading..."}>
        <ARCanvas >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ModelComponent />
        </ARCanvas>
      </Suspense>
    </div>
  );
};

export default Threejs_Demo;
