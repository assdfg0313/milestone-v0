import React from "react";
import { useState } from "react";
import projectMockData from "../../../mock-data/v0/projects.json";
import OneProjectThumb from "./OneProjectThumb";
import styled from "styled-components";

const Slider = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;
function ProjectSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideCount = projectMockData.length;
  const slideWidth = 330;

  const transformValue = `translateX(-${currentSlideIndex * slideWidth}px)`;

  const styles = {
    display: "flex",
    // overflow: "clip",
    transition: "transform 300ms ease-in-out",
    transform: transformValue,
  };

  function moveToNextSlide() {
    if (currentSlideIndex >= slideCount - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  function moveToPrevSlide() {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(slideCount - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }

  return (
    <>
      <Slider>
        <div style={styles}>
          {projectMockData.map((v, index) => {
            return (
              <OneProjectThumb
                key={v.id}
                id={v.id}
                contract={v.contract}
                title={v.title}
                imgUrl={v.imgUrl}
                qeustsNum={v.quests.length}
              />
            );
          })}
        </div>
      </Slider>
      <div className="flex justify-between px-12 py-2 text-black">
        <button onClick={moveToPrevSlide}> 이전 </button>
        <button onClick={moveToNextSlide}> 다음 </button>
      </div>
    </>
    // <div className="projects-thumb-wrapper">
    //   {projectMockData.map((v, i) => {
    //     return (
    //       <OneProjectThumb
    //         key={v.id}
    //         id={v.id}
    //         contract={v.contract}
    //         title={v.title}
    //         imgUrl={v.imgUrl}
    //         qeustsNum={v.qeustsNum}
    //       />
    //     );
    //   })}
    // </div>
  );
}

export default ProjectSlider;
