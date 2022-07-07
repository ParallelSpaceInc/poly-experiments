import View3D, { ARButton, OrbitControl } from "@egjs/view3d";
import "@egjs/view3d/css/view3d-bundle.min.css";
import { useEffect, useRef } from "react";

const View3DKnihgt = () => {
  const viewRef = useRef<View3D | null>(null);
  useEffect(() => {
    if (viewRef.current == null) {
      viewRef.current = new View3D("#wrapper-el", {
        src: "/knight_gltf/scene.gltf",
        annotationWrapper: ".view3d-annotation-wrapper",
        annotationSelector: ".view3d-annotation",
      });
      viewRef.current.loadPlugins(new ARButton());
      console.log(viewRef);
      new OrbitControl(viewRef.current);
    }
  }, []);
  return (
    <div id="wrapper-el" className="view3d-wrapper">
      <canvas className="view3d-knight"></canvas>
      <div className="view3d-annotation-wrapper">
        <div className="view3d-annotation" data-position="0.5 0.5 0.5"></div>
      </div>
    </div>
  );
};

export default View3DKnihgt;
