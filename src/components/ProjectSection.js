import React from "react"
import Project from "./Project"
import "./ProjectSection.css"

function ProjectSection() {
  return (
    <div className="project-section">
      <Project
        projectLink={"https://www.cfcinteriors.com/"}
        projectImg={"/cfclogo.png"}
        title={"CFC Interiors"}
        description={
          "A team effort, later headed by me to get it over the line. A headache but done!"
        }
        skillsUsed={[
          "Laravel/PHP Custom Theme",
          "Sass",
          "Wordpress",
          "Woocommerce",
        ]}
      />
      <Project
        projectLink={"http://209.97.188.179/"}
        projectImg={"/reddit-logo.png"}
        title={"Seddit"}
        description={
          "A nearly fully functional reddit clone and a nightmare to deploy. Go make an account and post!"
        }
        skillsUsed={[
          "TypeScript, Next.js, TailwindCSS",
          "TypeORM, Postgres, Node, Express",
          "JSON web tokens, auth routes, user routes",
          "SWR for caching and revalidating and infinte scroll",
        ]}
      />
      <Project
        projectLink={"https://taste-goodness.netlify.app/"}
        projectImg={"/tog_logo_full.png"}
        title={"taste of goodness"}
        description={"(Still in development) An exercise in CSS and animations"}
        skillsUsed={[
          "React",
          "Redux & Redux Toolkit",
          "React Router",
          "Material UI, Framer Motion",
        ]}
      />
      <Project
        projectLink={"https://lees-shop.herokuapp.com/"}
        projectImg={"/ama2.png"}
        title={"Lee's Shop"}
        description={
          "Not pretty but a monumental MERN build, fully written APIs, authenticated routes, admin routes, fully working checkout etc "
        }
        skillsUsed={[
          "Admin Email: lee@lee.com Password: 1234",
          "Redux, React Router",
          "MongoDB, Node, Express",
          "JSON web tokens, Stripe",
        ]}
      />
      <Project
        projectLink={"https://leemail-c2f40.web.app/"}
        projectImg={"/leemaillogohead.png"}
        title={"LeeMail"}
        description={
          "Just a little project to sharpen skills and to learn Firebase. Write me a message!"
        }
        skillsUsed={[
          "React, Firebase",
          "Redux & Redux Toolkit",
          "React Router",
          "Material UI",
        ]}
      />
    </div>
  )
}

export default ProjectSection
