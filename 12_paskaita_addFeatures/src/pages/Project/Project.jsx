import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getProject } from "../../api/projects";
import "../Project/Project.scss";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProject(id)
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <img src={project.imageUrl} alt={project.title} />
      <h2>{project.title}</h2>
      <p>Start Date: {project.startingDate}</p>
      <p>Ending Date: {project.endingDate}</p>
    </div>
  );
};

export default Project;
