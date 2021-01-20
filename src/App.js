import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <div className="sections">
        <Section
          backgroundImg={"/3417081.jpg"}
          title={"Lee McFarland"}
          description={"React Developer"}
          showIcon={true}
          linkedinLink={"https://www.linkedin.com/in/lee-mcfarland-b7510913a"}
          githubLink={"https://github.com/Leemcf4"}
          showAboutMe={true}
          aboutMe={
            "I am a front end developer with full stack experience focusing on React. I am ready to commit to this journey and keep learning the newest technologies and standards.  "
          }
          showButton={true}
          buttonLink={
            "https://docs.google.com/document/d/1NlbRoxkOqBhjZpx5dtggiiE2cNIkm-KVCYGW70eXlGw/edit?usp=sharing"
          }
          showLower={true}
          lowerText={"Scroll through some of my projects below"}
        />
        <div
          className="project-section-container"
          style={{ backgroundImage: `url(/projectbg.jpg)` }}
        >
          <ProjectSection />
        </div>
        <Section backgroundImg={"/3417082.jpg"} showForm={true} />
      </div>
    </div>
  );
}

export default App;
