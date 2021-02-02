import React from "react";
import Section from "../components/Section";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="home">
      <Section
        backgroundImg={"/3417081.jpg"}
        title={"Lee McFarland"}
        description={"Front End Developer"}
        showIcon={true}
        linkedinLink={"https://www.linkedin.com/in/lee-mcfarland-b7510913a"}
        githubLink={"https://github.com/Leemcf4"}
        showAboutMe={true}
        aboutMe={
          "I like to make pretty things.                                                                                 "
        }
        showButton={true}
        buttonLink={
          "https://docs.google.com/document/d/1NlbRoxkOqBhjZpx5dtggiiE2cNIkm-KVCYGW70eXlGw/edit?usp=sharing"
        }
        showLower={false}
        lowerText={"Scroll through some of my projects below"}
      />
    </div>
  );
}

export default HomePage;
