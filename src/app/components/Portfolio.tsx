import React from "react";
import lines from "@/../public/lines-1.png";
import ArrowAnimation from "./arrowAnimation";

const background = {
  backgroundSize: "cover",
  backgroundColor: "black",
  backgroundImage: `url(${lines.src})` // Ensure to use .src to get the path of the image
};

const portfolio = () => {
  return (
    <div className="overflow-hidden" style={background}>
      <div className="max-w-[1200px] p-10 m-auto">
        <div className="flex flex-wrap gap-2 flex-row">
        <h1 className="text-6xl font-bold font-Primary text-white text-center">Portfolio</h1><ArrowAnimation />
        </div>
      </div>
    </div>
  );
};

export default portfolio;
