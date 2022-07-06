import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  [key: string]: any;
}

interface ModelViewerElement extends Element {
  model: {
    materials: Array<{
      name: string;
      pbrMetallicRoughness: {
        setBaseColorFactor: (x: [number, number, number, number]) => void;
        setMetallicFactor: (x: number) => void;
        setRoughnessFactor: (x: number) => void;

        baseColorTexture: null | {
          texture: {
            source: {
              setURI: (x: string) => void;
            };
          };
        };
        metallicRoughnessTexture: null | {
          texture: {
            source: {
              setURI: (x: string) => void;
            };
          };
        };
        // ... others
      };
    }>;
  };
}

const Model = () => (
  <div id="card" className="flex mx-auto h-screen">
    <model-viewer
      src="/knight_gltf/scene.gltf"
      ios-src=""
      poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
      style={{
        width: "100%",
        height: "100%",
      }}
    ></model-viewer>
  </div>
);

export default Model;
