import dynamic from "next/dynamic";

const Model = dynamic(() => import("@components/models/mv-knight"), {
  ssr: false,
});

export default function Home() {
  return <Model />;
}
