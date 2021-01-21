import React from "react";
import { useState } from "react";
import BarChart from "../components/BarChart";
import "./Skills.css";

function Skills() {
  const [state, setstate] = useState(" ");
  return (
    <div className="skills-page">
      <BarChart />
    </div>
  );
}

export default Skills;
