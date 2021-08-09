import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const kelvinTobar = {
    name: 'Kelvin Tobar',
    role: 'Full Stack Web Developer',
    email: 'tobar411@gmail.com',
    linkedin: 'linkedin.com/in/kelvin-tobar',
    github: 'github.com/ktobar',
    location: 'Toronto, ON',
    skills: {
      languages: ['Javascript','SQL','HTML','CSS','Ruby'],
      libraries: ['NodeJS', 'ReactJS', 'Express', 'Rails', 'Ajax', 'JQuery', 'SASS' ],
      frameworks: ['Bootstrap', 'Font Awesome'],
      databases: ['PostgresSQL']
    },
    projects: [
      {
        name: 'Echo',
        gitRepo: 'https://github.com/ktobar/echo',
        info: 'Video looping application that allows the user to save a list of multiple selected sections of a video, and saves it to user-created categories.',
        stack: ['Axios', 'ReactJS', 'React Router', 'Express', 'Postgress', 'SASS', 'Bootstrap']
      },
      {
        name: 'Scheduler',
        gitRepo: 'https://github.com/ktobar/scheduler',
        info: 'Appointment booking application, that allows users to book, select who they\'re meeting with, and edit/delete a booking.',
        stack: ['React', 'Axios', 'Classnames', 'Normalize', 'Storybook']
      },
      {
        name: 'Tweeter',
        gitRepo: 'https://github.com/ktobar/tweeter',
        info: 'Application similar to Twitter, where users are able to submit a post that gets appended to a list of existing posts.',
        stack: ['Express', 'jQuery',  'Node', 'PostgreSQL']
      },
      {
        name: 'TinyApp',
        gitRepo: 'https://github.com/ktobar/tinyapp',
        info: 'Application that takes in a long URL and produce a short URL similar to bit.ly',
        stack: ['Express', 'Node']
      }
    ]
  };

  return (
    <div>
      <div className='intro'>
        <h1>Kelvin Tobar</h1>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        
        <p>
        LANGUAGES
          Javascript
          HTML
          SQL
          CSS
          Ruby
          Add Skill
        LIBRARIES/FRAMEWORKS
          NodeJS
          ReactJS
          Express
          Rails
          Ajax
          Bootstrap
          JQuery
          SASS
          Add Skill
        DATABASES
          PostgreSQL
        </p>


      </div>
      <div className='projects'>
        <h1>Project</h1>
        <p>
        Echo
        https://github.com/ktobar/echo
         
         
        Video looping application that allows the user to save a list of multiple selected sections of a video, and saves it to user-created categories. 
        
        Stack: Axios, ReactJS, React Router, Express, Postgress, SASS, Bootstrap
        
        Scheduler
        https://github.com/ktobar/scheduler
         
         
        Appointment booking application, that allows users to book, select who they're meeting with, and edit/delete a booking.
        
        Stack: React, Axios, Classnames, Normalize, Storybook
        
        Tweeter
        https://github.com/ktobar/tweeter
         

        Application similar to Twitter, where users are able to submit a post that gets appended to a list of existing posts. 
        
        Stack: Express, jQuery,  Node, PostgreSQL
        
        TinyApp
        https://github.com/ktobar/tinyapp
         
         
        Application that takes in a long URL and produce a short URL similar to bit.ly
        
        Stack: Express, Node
        
        
        </p>
      </div>
    </div>
  )
}
