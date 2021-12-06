import React from "react";

const ProjectsScroll = (props) => {
  return (
    <div className="pt-18 flex-1 flex flex-col overflow-y-scroll items-center bg-green-400 snap snap-y snap-mandatory">

      {props.data
        ? props.data.map((proj) => {
            return (
              <section className="pt-24 flex-shrink-0 pl-2 text-8xl h-screen bg-red-500 snap-start" key={proj.projectID}>
                <div className="w-1/2">
                  <img className="object-contain" src={proj.photos[0]} />
                </div>
                <h3 className="text-3xl">{proj.projectName}</h3>
                {/* <p>{proj.showcase}</p> */}
              </section>
            );
          })
        : ""}
    </div>
  );
};

export default ProjectsScroll;
