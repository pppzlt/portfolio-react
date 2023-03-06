import React from "react";
import linkedin from "../linkedin.svg";
import githubwhite from "../github-mark-white.svg";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-center mt-10  h-10 ">
        {/* <img src={github} alt="github logo" /> */}
        <a href="https://github.com/pppzlt" className="inline-block h-10">
          <img src={githubwhite} alt="github logo" className="mr-5 h-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/lantao-zhang"
          className="inline-block h-10"
        >
          <img src={linkedin} alt="linkedin logo" className="h-10" />
        </a>
      </div>
    </div>
  );
}
