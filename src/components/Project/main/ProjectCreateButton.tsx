import React, { ReactNode } from "react";
import "./ProjectStyles.css";
import { useNavigate } from "react-router-dom";

function ProjectCreateButton({ ...restProps }) {
  const navigate = useNavigate();
  return (
    <div
      className="project-create-button"
      onClick={() => {
        navigate("/project-create");
      }}
      {...restProps}
    >
      Project 생성
    </div>
  );
}

export default ProjectCreateButton;
