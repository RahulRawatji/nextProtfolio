import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { ImProfile } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
        <h4>Copyright 2022 @developedByRahul</h4>
        <ul>
          <li><a href="https://drive.google.com/file/d/1JlG1H9NbpTnslBjUPBww4guZOPOzv_ZM/view?usp=sharing" target="_blank"><ImProfile size={25} title="Resume"/></a></li>
          <li><a href="https://github.com/RahulRawatji"><SlSocialGithub size={25}/></a></li>
          <li><a href="https://www.linkedin.com/in/rahul-rawat21/"><SlSocialLinkedin size={25}/></a></li>
        </ul>
    </footer>
  )
}

export default Footer