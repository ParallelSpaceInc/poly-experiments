import { GoogleKnight } from "@components/models/knight";
import type { NextPage } from "next";

const Google_Demo: NextPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center">
      {<GoogleKnight /> ?? null}
    </div>
  );
};
export default Google_Demo;
