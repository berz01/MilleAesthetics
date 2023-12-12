import React from "react";
import Forbes from "./Forbes";
import NbcNews from "./NbcNews";
import Fox from "./Fox";
import Wsj from "./Wsj";
import Yahoo from "./yahoo";
import Times from "./Times";

type Props = {
  // Define your props here (if any)
};

const Logos: React.FC<Props> = (props) => {
  return (
    <div className="my-10">
      <h6 className="text-[#404040] font-bold text-base text-center">
        GLP-1s have been featured in
      </h6>

      <div className="flex lg:flex-row flex-col lg:justify-between justify-center gap-10 mt-5 items-center px-5">
        <Forbes />
        <NbcNews />
        <Fox />
        <Wsj />
        <Yahoo />
        <Times />
      </div>
    </div>
  );
};

export default Logos;
