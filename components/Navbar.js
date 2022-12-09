import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { ImProfile } from "react-icons/im";

export default function Navbar () {
    return <nav>
        <h1><a href="#">rahulrawat</a></h1>
        <ul>
            <li><a href="https://drive.google.com/file/d/1JlG1H9NbpTnslBjUPBww4guZOPOzv_ZM/view?usp=sharing" target="_blank"><ImProfile size={25} title="Resume"/></a></li>
            <li><a href="https://github.com/RahulRawatji" target="_blank"><SlSocialGithub size={25} title="Github"/></a></li>
            <li><a href="https://www.linkedin.com/in/rahul-rawat21/" target="_blank"><SlSocialLinkedin size={25} title="LinkedIn"/></a></li>
        </ul>
    </nav>
}