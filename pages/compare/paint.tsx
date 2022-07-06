import { MutableRefObject, useEffect, useRef } from "react";
import * as THREE from "three";
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  XRTargetRaySpace,
} from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton";

function Page() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const controller = renderer.xr.getController(0);
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      20
    );
    init(ref, camera, renderer, controller, scene);
    animate(camera, renderer, scene);
  }, [ref]);
  return <div ref={ref}></div>;
}

export default Page;

function init(
  ref: MutableRefObject<HTMLDivElement | null>,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  controller: XRTargetRaySpace,
  scene: Scene
) {
  if (ref.current == null) return;
  if (window == null) return;

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  light.position.set(0.5, 1, 0.25);
  scene.add(light);

  //

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;
  ref.current.appendChild(renderer.domElement);

  //

  ref.current.appendChild(ARButton.createButton(renderer));

  //

  const geometry = new THREE.CylinderGeometry(0, 0.05, 0.2, 32).rotateX(
    Math.PI / 2
  );

  function onSelect() {
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff * Math.random(),
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -0.3).applyMatrix4(controller.matrixWorld);
    mesh.quaternion.setFromRotationMatrix(controller.matrixWorld);
    scene.add(mesh);
  }

  controller.addEventListener("select", onSelect);
  scene.add(controller);

  //

  window.addEventListener("resize", () => onWindowResize(camera, renderer));
}

function onWindowResize(camera: PerspectiveCamera, renderer: WebGLRenderer) {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

//

function animate(
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  scene: Scene
) {
  renderer.setAnimationLoop(render(camera, renderer, scene));
}

function render(
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  scene: Scene
) {
  return () => {
    renderer.render(scene, camera);
  };
}
