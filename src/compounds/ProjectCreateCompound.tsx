import React from "react";
import ProjectWrapper from "../components/Project/home/ProjectWrapper";
import ProjectSlider from "../components/Project/home/ProjectSlider";
import TitleWithInput from "../components/Project/create/TitleWithInput";
function ProjectCreateCompound() {
  const handleInputChange = (value: string) => {
    console.log("Input value:", value);
  };
  return (
    <div className="bg-white">
      <span className="text-3xl font-bold">프로젝트 생성 화면</span>
      <TitleWithInput
        title="Contract 주소를 넣으세요"
        placeholder="Type here..."
        onInputChange={handleInputChange}
      />
    </div>
  );
}

export default ProjectCreateCompound;
