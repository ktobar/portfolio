import { GoDatabase } from "react-icons/go";
import {
  FaBootstrap,
  FaFontAwesome,
  FaLinkedin,
  FaProjectDiagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiReactrouter, SiStorybook, SiGithub } from "react-icons/si";

export default function Icon({ name, title}) {
  const iconList = {
    Bootstrap: <FaBootstrap />,
    CSS: "devicon-css3-plain",
    Email: <HiOutlineMail />,
    Express: "devicon-express-original",
    FontAwesome: <FaFontAwesome />,
    Github: <SiGithub/>,
    HTML: "devicon-html5-plain",
    Javascript: "devicon-javascript-plain",
    jQuery: "devicon-jquery-plain",
    Linkedin: <FaLinkedin />,
    NodeJS: "devicon-nodejs-plain",
    PostgresSQL: "devicon-postgresql-plain",
    Rails: "devicon-rails-plain",
    ReactJS: "devicon-react-original",
    ReactRouter: <SiReactrouter />,
    Ruby: "devicon-ruby-plain",
    SASS: "devicon-sass-original",
    SQL: <GoDatabase />,
    Storybook: <SiStorybook />,
  };

  if (!iconList[name]) {
    return <span><FaProjectDiagram /> {(title) ? title : name} </span>;
  }

  const icon = (data) => {
    const icon = iconList[data];

    const isString = (icon) => {
      return Object.prototype.toString.call(icon) === "[object String]";
    };
    
    return isString(icon) ? <span><i className={icon} /> {(title) ? title : data}</span> : <span>{icon} {(title) ? title : data}</span>;

  };

  return icon(name);
}
