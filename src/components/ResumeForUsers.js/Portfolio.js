// import { useEffect, useRef, useState } from "react";
// import React   from 'react';
// import { About } from "./Components/About";
// import { Footer } from "./Components/Footer";
// import Header from "./Components/Header";
// import { Projects } from "./Components/Projects";
// import { Resume } from "./Components/Resume";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getDataActionCreater } from "../../Redux/getDataActionCreater";
import { ResumeAbout } from "./ResumeAbout";
import { ResumeFooter } from "./ResumeFooter";
import ResumeHeader from "./ResumeHeader";
import { ResumeProjects } from "./ResumeProjects";
import { ResumeResume } from "./ResumeResume";

export const Portfolio = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataActionCreater({ uid: params.id }));
  }, []);

  return (
    <div
      className="portfolio"
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(255 255 255)",
      }}
    >
      <ResumeHeader />
      <ResumeAbout />
      <ResumeResume />
      <ResumeProjects />
      {/* <ResumeFooter /> */}
    </div>
  );
};
