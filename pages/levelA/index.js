
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';
import { FcHome } from "react-icons/fc";

const LandingPage = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [showComponent, setShowComponent] = useState("");

  const renderProject = (projectName) => {
    let portfolioImage = "";
    let portfolioUrl = "";
    let portfolioGithubUrl = "";
    let description = "";

    switch (projectName) {
      case "blogApp":
        portfolioImage = "https://user-images.githubusercontent.com/93177337/197684158-385b98f0-12b5-4e17-8973-ea38708df472.png";
        portfolioUrl = "https://micro-blogging-app.vercel.app/";
        portfolioGithubUrl = "https://github.com/RahulRawatji/micro-blogging-app";
        description = `A Full Stack Micro Blogging Application made using NextJs and Firebase. With Features Like Authenticating a user, Making a Post, Editing and Deleting the Post, Other users can make Comments on a Post`;
        break;
      case "movieApp":
        portfolioImage = "https://user-images.githubusercontent.com/93177337/139305542-64c80736-7068-4993-b00c-f19fee6a3a4e.jpg";
        portfolioUrl = "https://micro-blogging-app.vercel.app/";
        portfolioGithubUrl = "https://github.com/RahulRawatji/movies-app";
        description = `A Simple Movie Made using ReactJs and NodeJs`;
        break;
      case "portfolio":
        portfolioImage = "https://user-images.githubusercontent.com/93177337/197675807-1207493d-0ed1-4ddb-90e0-b73cc4b23b7c.png";
        portfolioUrl = "https://next-protfolio-rahulrawatji.vercel.app/";
        portfolioGithubUrl = "https://github.com/RahulRawatji/nextProtfolio";
        description = `A Portfolio Website to showcase about the project and technology I used and worked on.
        This Application is made using NextJs`;
        break;
      
      default:
        break;
    }
    return (<div className='flex-col m-5 justify-center items-center'>
      <div className='flex gap-4 justify-around'>
        <div className=' basis-1/2'>
          <img src={portfolioImage} className="object-cover" />
        </div>
        <div className=' basis-1/2 items-center'>
          <p className='text-center p-2 font-burtons text-xl'>
            {description}
          </p>
        </div>
      </div>
      <div className='flex gap-4 justify-center mt-3'>
        {projectName !== 'movieApp' ? <button onClick={() => window.open(portfolioUrl)} className=' shadow-lg px-4 text-center py-1 text-[1.25rem] font-burtons  bg-cyan-500 dark:text-white rounded-lg'>Preview</button> : ''}
        <button onClick={() => window.open(portfolioGithubUrl)} className='px-4 text-center py-1 text-[1.25rem] drop-shadow-lg font-burtons  bg-cyan-500 rounded-lg dark:text-white'>Code</button>
      </div>
    </div>)
  };

  return (<div className={darkMode ? "dark" : ""}>
    <div className='bg-white px-10 h-screen w-screen dark:bg-gray-800'>

      <section>
        <nav className='py-10 mb-1 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-white'>developedbyRahul</h1>
          <ul className='flex items-center gap-6'>
            <li>
              <Link href="/">
                <FcHome className='cursor-pointer' />
              </Link>
            </li>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer' color={darkMode ? 'white' : ""} />
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ml-8' href='https://drive.google.com/file/d/1qplLNSouc4TmfZeDsRnk-UJWeSMPtMPl/view?usp=sharing' rel="noreferrer noopener" target="_blank">Resume</a>
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className='text-4xl mb-5 font-burtons dark:text-white'>Projects</h2>
        <div className='flex flex-wrap  m-5 gap-10'>
          <div className='shadow-lg rounded-md bg-white drop-shadow-lg p-3 font-bold hover:bg-sky-200' onClick={() => setShowComponent('blogApp')}>A Micro-Blogging App</div>
          <div className='shadow-lg rounded-md bg-white drop-shadow-lg p-3 font-bold hover:bg-sky-200' onClick={() => setShowComponent('movieApp')}>A Movie App</div>
          <div className='shadow-lg rounded-md bg-white drop-shadow-lg p-3 font-bold hover:bg-sky-200' onClick={() => setShowComponent('portfolio')}>Protfolio</div>
        </div>
      </section>

      <section className='flex justify-center md:p-10 h-max'>
        {showComponent && renderProject(showComponent)}
      </section>
    </div>
  </div>)
}

export default LandingPage