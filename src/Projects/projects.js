import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import projectsData from '../projectData';

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="thumbnails recentworks row">
        {projectsData.map((project) => (
          <div key={project.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <a className="thumbnail" href={project.link}>
              <span className="img">
                <img src={project.imgSrc} alt="" />
                <span className="cover"><span className="more">See details &rarr;</span></span>
              </span>
              <span className="title">{project.title}</span>
            </a>
            <span className="details">
              <a href={project.link}>{project.description}</a> | <a href={project.prototypeLink}>View Prototype</a>
            </span>
            <h4></h4>
            <p></p>
          </div>
        ))}
      </div>
    </main>
  );
}