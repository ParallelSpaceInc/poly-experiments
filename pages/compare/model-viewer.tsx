import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Google_Demo: NextPage = () => {
  const GoogleKnight = dynamic(() => import("@components/models/knight"), {
    ssr: false,
  });
  return (
    <div className="h-screen w-screen flex justify-center">
      <GoogleKnight />
    </div>
  );
};
export default Google_Demo;
