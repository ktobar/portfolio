import { useState } from "react";
import Head from "next/head";

import Intro from "../components/Intro/Intro";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Project";
import Contact from "../components/Contact/Contact";

export default function Home() {
  const [profile, setProfile] = useState({
    name: "Kelvin Tobar",
    avatar: "https://avatars.githubusercontent.com/u/71950186?v=4",
    summary:
      "Hello, I'm Toronto base Web developer, I’ve always had a passion to build and improve things. From the first time I ran “Hello World” to creating my first full-stack application as a graduation project, I knew programming was for me. I enjoy the engaging challenge to continuously learn and improve skills to build high-quality software.",
    role: "Web Developer",
    email: "hello@kelvintobar.com",
    linkedin: "linkedin.com/in/kelvin-tobar",
    github: "github.com/ktobar",
    location: "Toronto, ON",
    skills: [
      {
        title: "Languages",
        info: ["Javascript", "HTML", "CSS", "SQL", "Ruby"],
      },
      {
        title: "Libraries",
        info: ["ReactJS", "NodeJS", "Express", "Rails", "jQuery", "SASS"],
      },
      {
        title: "Frameworks",
        info: ["Bootstrap", "FontAwesome"],
      },
      {
        title: "Databases",
        info: ["PostgresSQL"],
      },
    ],
    projects: [
      {
        title: "Echo",
        link: "https://github.com/ktobar/echo",
        image: [
          "https://github.com/nataliaCodes/echo/raw/master/screenshots/Echo-home.png",
          "https://github.com/nataliaCodes/echo/raw/master/screenshots/Echo-moments.png",
          "https://github.com/nataliaCodes/echo/raw/master/screenshots/Echo-videos.png",
          "https://github.com/nataliaCodes/echo/raw/master/screenshots/Echo-categories.png",
          "https://github.com/nataliaCodes/echo/raw/master/screenshots/Echo-login.png",
        ],
        info: "Video looping application that allows the user to save a list of multiple selected sections of a video, and saves it to user-created categories.",
        stack: [
          "ReactJS",
          "ReactRouter",
          "Express",
          "PostgresSQL",
          "Axios",
          "SASS",
          "Bootstrap",
        ],
      },
      {
        title: "Scheduler",
        link: "https://github.com/ktobar/scheduler",
        image: [
          "https://github.com/ktobar/scheduler/raw/master/docs/Empty%20slots.png?raw=true",
          "https://github.com/ktobar/scheduler/raw/master/docs/Create%20form.png?raw=true",
          "https://github.com/ktobar/scheduler/raw/master/docs/Show%20with%20edit%20and%20delete%20options.png?raw=true",
        ],
        info: "Appointment booking application, that allows users to book, select who they're meeting with, and edit/delete a booking.",
        stack: ["ReactJS", "Axios", "Classnames", "Normalize", "Storybook"],
      },
      {
        title: "Tweeter",
        link: "https://github.com/ktobar/tweeter",
        image: [
          "https://github.com/ktobar/tweeter/raw/master/doc/tweer-post.png",
          "https://github.com/ktobar/tweeter/raw/master/doc/mobile-view.png",
        ],
        info: "Application similar to Twitter, where users are able to submit a post that gets appended to a list of existing posts.",
        stack: ["Express", "jQuery", "NodeJS", "PostgresSQL"],
      },
      {
        title: "TinyApp",
        link: "https://github.com/ktobar/tinyapp",
        image: [
          "https://github.com/ktobar/tinyapp/raw/master/docs/url_page.png",
          "https://github.com/ktobar/tinyapp/raw/master/docs/url_edit_page.png",
        ],
        info: "Application that takes in a long URL and produce a short URL similar to bit.ly",
        stack: ["Express", "NodeJS"],
      },
    ],
  });

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
        />
      </Head>

      <Intro
        name={profile.name}
        avatar={profile.avatar}
        role={profile.role}
        summary={profile.summary}
      />
      <Skills 
        skills={profile.skills} 
      />
      <Projects 
        projects={profile.projects} 
      />
      <Contact 
        email={profile.email} linkedin={profile.linkedin} 
      />
    </div>
  );
}
