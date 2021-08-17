import { GoDatabase } from "react-icons/go";
import { FaFontAwesome, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiReactrouter, SiStorybook } from "react-icons/si";

export default function Icon({ name }) {
  const iconList = {
    Javascript: "devicon-javascript-plain",
    HTML: "devicon-html5-plain",
    CSS: "devicon-css3-plain",
    SQL: <GoDatabase />,
    Ruby: "devicon-ruby-plain",
    ReactJS: "devicon-react-original",
    NodeJS: "devicon-nodejs-plain",
    Express: "devicon-express-original",
    Rails: "devicon-rails-plain",
    JQuery: "devicon-jquery-plain",
    SASS: "devicon-sass-original",
    Bootstrap: "devicon-bootstrap-plain",
    FontAwesome: <FaFontAwesome />,
    PostgresSQL: "devicon-postgresql-plain",
    Email: <HiOutlineMail />,
    Linkedin: <FaLinkedin />,
    jQuery: "devicon-jquery-plain",
    ReactRouter: <SiReactrouter />,
    Storybook: <SiStorybook />,

  };

  const icon = (data) => {
    const icon = iconList[data];

    const isString = (icon) => {
      return Object.prototype.toString.call(icon) === "[object String]";
    };

    return isString(icon) ? <i class={icon} /> : icon;
  };

  if (!iconList[name]) {
    return null;
  }

  return icon(name);
}
