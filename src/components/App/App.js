import React from "react";
import General from "../General";
import EduInfo from "../EduInfo";
import WorkInfo from "../WorkInfo";

function App() {
  return (
    <>
      <h3 id="general-header">General Information</h3>
      <General></General>
      <h3 id="education-header">Education</h3>
      <EduInfo></EduInfo>
      <h3 id="work-header">Work History</h3>
      <WorkInfo></WorkInfo>
    </>
  );
}

export default App;
