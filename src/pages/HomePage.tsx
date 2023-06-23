import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import FooterCompound from "../compounds/FooterCompound";
import ProjectThumbCompount from "../compounds/ProjectThumbCompound";

function HomePage() {
  return (
    <>
      <HeaderCompound />
      <ProjectThumbCompount />
      <FooterCompound />
    </>
  );
}

export default HomePage;
