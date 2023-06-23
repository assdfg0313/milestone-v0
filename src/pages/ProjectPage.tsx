import React, { useEffect, useState } from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import FooterCompound from "../compounds/FooterCompound";
import ProjectThumbCompount from "../compounds/ProjectThumbCompound";
import { useParams } from "react-router-dom";
import ProjectCreateButton from "../components/Project/main/ProjectCreateButton";
import OneProjectPart, {
  ProjectData,
} from "../components/Project/main/OneProjectPart";
import projectMockData from "../mock-data/v0/projects.json";

function ProjectPage() {
  const { id } = useParams();
  const [oneProjectData, setOneProjectData] = useState<ProjectData | null>(
    null
  );
  useEffect(() => {
    if (id) {
      console.log("id exist!!");
      for (let index = 0; index < projectMockData.length; index++) {
        if (projectMockData[index].id == Number(id)) {
          setOneProjectData(projectMockData[index]);
          break;
        }
      }
    }
  });

  return (
    <div className="bg-white">
      <HeaderCompound />
      {id != null ? (
        oneProjectData != null ? (
          <OneProjectPart projectData={oneProjectData} />
        ) : (
          <OneProjectPart projectData={null} />
        )
      ) : (
        <>
          <ProjectCreateButton />
          <ProjectThumbCompount />
        </>
      )}
      <FooterCompound />
    </div>
  );
}

export default ProjectPage;
