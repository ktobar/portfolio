import { useState } from "react";
import Head from 'next/head'

import Intro from "../components/Intro/Intro";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Project";
import Contact from "../components/Contact/Contact";

export default function Home() {

  const [profile, setProfile] = useState({
    name: "Kelvin Tobar",
    avatar: "https://avatars.githubusercontent.com/u/71950186?v=4",
    summary: "Hello, I'm Toronto base Web developer, I’ve always had a passion to build and improve things. From the first time I ran “Hello World” to creating my first full-stack application as a graduation project, I knew programming was for me. I enjoy the engaging challenge to continuously learn and improve skills to build high-quality software.",
    role: "Web Developer",
    email: "hello@kelvintobar.com",
    linkedin: "linkedin.com/in/kelvin-tobar",
    github: "github.com/ktobar",
    location: "Toronto, ON",
    skills: [
      {
        title: 'Languages',
        info: [ {
            name: "Javascript",
            icon: 'devicon-javascript-plain'
          },
          {
            name: "HTML",
            icon: 'devicon-html5-plain'
          },
          {
            name: "CSS", 
            icon: 'devicon-css3-plain'
          },
          {
            name: "SQL",
            icon: 'devicon-mysql-plain'
          },
          {
            name: "Ruby",
            icon: "devicon-ruby-plain"
          }
        ]
      },
      {
        title: 'Libraries',
        info: [{
          name: "ReactJS", 
          icon: 'devicon-react-original'
          },
          {
            name: "NodeJS", 
            icon: 'devicon-nodejs-plain'
          },

          {
            name: "Express", 
            icon: 'devicon-express-original'
          },
          {
            name: "Rails", 
            icon: 'devicon-rails-plain'
          },
          {
            name: "Ajax", 
            icon: ''
          },
          {
            name: "JQuery", 
            icon: 'devicon-jquery-plain'
          },
          {
            name: "SASS", 
            icon: 'devicon-sass-original'
          }
        ]
      },
      {
        title: 'Frameworks',
        info: [{
            name: "Bootstrap", 
            icon: 'devicon-bootstrap-plain'
          },
          {
            name: "Font Awesome", 
            icon: ''
          }
        ]
      },
      {
        title: 'Databases',
        info: [{
            name: "PostgresSQL", 
            icon: 'devicon-postgresql-plain'
          }           
        ]
      }
    ],
    projects: [
      {
        title: "Echo",
        link: "https://github.com/ktobar/echo",
        info: "Video looping application that allows the user to save a list of multiple selected sections of a video, and saves it to user-created categories.",
        stack: [
          "ReactJS",
          "React Router",
          "Express",
          "Postgress",
          "Axios",
          "SASS",
          "Bootstrap",
        ],
      },
      {
        title: "Scheduler",
        link: "https://github.com/ktobar/scheduler",
        info: "Appointment booking application, that allows users to book, select who they're meeting with, and edit/delete a booking.",
        stack: [
          "ReactJS", 
          "Axios", 
          "Classnames", 
          "Normalize", 
          "Storybook"
        ],
      },
      {
        title: "Tweeter",
        link: "https://github.com/ktobar/tweeter",
        info: "Application similar to Twitter, where users are able to submit a post that gets appended to a list of existing posts.",
        stack: [
          "Express", 
          "jQuery", 
          "Node", 
          "PostgreSQL"
        ],
      },
      {
        title: "TinyApp",
        link: "https://github.com/ktobar/tinyapp",
        info: "Application that takes in a long URL and produce a short URL similar to bit.ly",
        stack: [
          "Express",
          "Node"
        ],
      },
    ]
  });

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"/>
      </Head>

      <Intro name={profile.name} avatar={profile.avatar} role={profile.role} summary={profile.summary} />
      <Skills skills={profile.skills}/>
      <Projects projects={profile.projects}/>
      <Contact email={profile.email} linkedin={profile.linkedin}/>
    </div>
  );
}
