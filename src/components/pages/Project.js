import React from "react";
import github from "../../github-mark.svg";

export default function Project({ project }) {
  return (
    <div className="grid grid-cols-2 mt-20 gap-8 mx-40">
      {project.map((project) => (
        <div className=" h-30 flex-col-2 flex flex-nowrap items-center" key={project.id}>
          <img src={project.pic} alt="pic1" className=" h-40 w-60"></img>
          <p className="pl-5 text-slate-100 font-bold ">
            {project.project}
            <a href={project.link} rel="noreferrer" target="_blank" className="inline-block">
              <img src={github} alt="git" className=" h-6 pt-1"></img>
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
