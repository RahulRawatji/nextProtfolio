import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiReact, DiNodejsSmall, DiBootstrap, DiJsBadge, DiCss3, DiAtom, DiHtml5, DiGithubBadge } from "react-icons/di";
import { SiExpress, SiTypescript, SiServerless, SiTailwindcss, SiMaterialui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';

import devAvatar from '../public/devAvatar.png';
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [quoteData, setQuoteData] = useState({});
  const linkedinUrl = "https://www.linkedin.com/in/rahul-rawat21";
  const githubUrl = "https://github.com/RahulRawatji";
  const [activeLinkedin, setActiveLinkedin] = useState("");
  const [activeGithub, setActiveGithub] = useState("");
  const [activeMail, setActiveMail] = useState("");
  useEffect(() => {
    randomQuoteFetcher();
  }, [])

  const randomQuoteFetcher = async () => {

    const response = await axios("https://type.fit/api/quotes");
    const data = response.data;
    const randomNumber = Math.floor(Math.random() * 1643);

    setQuoteData(data[randomNumber]);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rahul Rawat Protfolio</title>
        <meta name="description" content="Protfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-1 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbyRahul</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ml-8' href='https://drive.google.com/file/d/1qplLNSouc4TmfZeDsRnk-UJWeSMPtMPl/view?usp=sharing' rel="noreferrer noopener" target="_blank">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center'>
            <h2 className='text-5xl py-2 text-teal-500 font-medium'>Hi, I'm Rahul👋</h2>
            <h2 className='text-2xl py-5  font-burtons'>Software Engineer </h2>
            {/* <p className='text-xl py-5 px-20 leading-8 text-gray-800 sm:text-md'>
           A Software Engineer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
            </p> */}
          </div>
          <div className='relative w-80 h-80 mx-auto'>
            <Image className="rounded-full" src={devAvatar} layout='fill' />
          </div>
          <div className='text-5xl flex justify-center py-3 gap-16 text-gray-600'>
            <AiFillLinkedin onMouseOver={() => setActiveLinkedin('blue')} onMouseLeave={() => setActiveLinkedin("")} color={activeLinkedin ? activeLinkedin : ""} onClick={() => window.open(linkedinUrl)} />
            <AiFillGithub onMouseOver={() => setActiveGithub('black')} onMouseLeave={() => setActiveGithub("")} color={activeGithub ? activeGithub : ""} onClick={() => window.open(githubUrl)} />
            <AiFillMail onMouseOver={() => setActiveMail('teal')} onMouseLeave={() => setActiveMail("")} color={activeMail ? activeMail : ""} />
          </div>
        </section>

        <section className='mb-10'>
          <div className='mb-2'>
            <h3 className='text-3xl py-1 font-burtons'>Technology I Use</h3>
          </div>
          <div className='flex flex-wrap gap-8 justify-center'>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center'>
              <h3 className='text-lg font-medium mb-1'>ReactJs</h3>
              <DiReact size="80" color='#61DBFB' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center'>
              <h3 className='text-lg font-medium mb-1'>NodeJs</h3>
              <DiNodejsSmall size="80" color='#3C873A' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center'>
              <h3 className='text-lg font-medium mb-1'>Bootstrap</h3>
              <DiBootstrap size="80" color='purple' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center'>
              <h3 className='text-lg font-medium mb-1'>JavaScript</h3>
              <DiJsBadge size="80" color='#f0db4f' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center'>
              <h3 className='text-lg font-medium mb-1'>HTML</h3>
              <DiHtml5 size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center'>
              <h3 className='text-lg font-medium mb-1'>CSS</h3>
              <DiCss3 size="80" color='orange' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center'>
              <h3 className='text-lg font-medium mb-1'>React Native</h3>
              <DiAtom size="80" color='#61DBFB'/>
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center '>
              <h3 className='text-lg font-medium mb-1'>ExpressJs</h3>
              <SiExpress size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center '>
              <h3 className='text-lg font-medium mb-1'>Github</h3>
              <DiGithubBadge size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center '>
              <h3 className='text-lg font-medium mb-1'>Typescript</h3>
              <SiTypescript size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center '>
              <h3 className='text-lg font-medium mb-1'>NextJs</h3>
              <TbBrandNextjs size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center '>
              <h3 className='text-lg font-medium mb-1'>Serverless</h3>
              <SiServerless size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center '>
              <h3 className='text-lg font-medium mb-1'>Tailwind CSS</h3>
              <SiTailwindcss size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center '>
              <h3 className='text-lg font-medium mb-1'>Material UI</h3>
              <SiMaterialui size="80" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since the beginning of my journey
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className=' basis-1/2 text-center shadow-lg p-10 rounded-xl my-5'>
              <Image src={devAvatar} width={150} height={150} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Web Development</h3>
              <p className='py-2 flex-wrap'>
                Building Web Application
              </p>
              {/* <h4 className='py-4 text-teal-600'>Technology Used</h4>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>NodeJs</p>
              <p className='text-gray-800 py-1'>ExpressJs</p>
              <p className='text-gray-800 py-1'>PostgreSQL</p>
              <p className='text-gray-800 py-1'>Bootstrap</p> */}
            </div>

            <div className=' basis-1/2 text-center shadow-lg p-10 rounded-xl my-5'>
              <Image src={devAvatar} width={150} height={150} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Android Development</h3>
              <p className='py-2'>
                Building Mobile Application
              </p>
              {/* <h4 className='py-4 text-teal-600'>Technology Used</h4>
              <p className='text-gray-800 py-1'>React Native</p>
              <p className='text-gray-800 py-1'>NodeJs</p>
              <p className='text-gray-800 py-1'>Serverless</p>
              <p className='text-gray-800 py-1'>Bootstrap</p> */}
            </div>
          </div>
        </section>
        <div className='m-10 p-20 flex-col border-spacing-4 shadow-lg '>
          <h2 className='text-5xl font-burtons text-yellow-600 text-center px-10 '>" {quoteData.text} "</h2>
          <p className='text-xl text-center px-20 m-2'>{quoteData.author}</p>
        </div>
        <div className='border-spacing-4 shadow-lg p-10 m-5'>
          <h3 className='text-3xl py-1 mb-3'>Reach Out to me!</h3>
          <div className='font-burtons p-5 text-10md flex-col'>
            <h3  className='m-4' >Associate Software Engineer @BYJU's | Still Finding 💭</h3>
            <h3 className='m-4'>Open for opportunities: <span className='text-red-500 text-5xl'>Yes</span></h3>
          </div>
        </div>
      </main>
    </div>

  )
}
