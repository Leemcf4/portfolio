import React from "react";
import "./Barchart.css";

const skills = [
  {
    name: "ReactJs",
    level: "50%",
  },
  {
    name: "HTML",
    level: "100%",
  },
  {
    name: "CSS",
    level: "90%",
  },
  {
    name: "JavaScript",
    level: "60%",
  },
  {
    name: "Graphic Design & Video Editing",
    level: "95%",
  },
];

function BarChart() {
  return (
    <div className="barchart">
      <div className="bars">
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill.name}>
              <span
                style={{ width: skill.level }}
                className={`bar-expand ${skill.name.toLowerCase()}`}
              ></span>
              <p className="bar-label">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BarChart;
