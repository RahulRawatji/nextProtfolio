
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Link from 'next/link';
import { FcHome } from "react-icons/fc";

import Image from 'next/image';
import { useState } from 'react';
import { delay, motion, useScroll } from 'framer-motion';

import devAvatar from '../public/devAvatar.png';
import TechnologyUsed from '../components/TechnologyUsed';
import Avatar from '../public/avatar.jpg';
import Header from '../components/Header';
import RandomQuote from '../components/RandomQuote';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const linkedinUrl = "https://www.linkedin.com/in/rahul-rawat21";
  const githubUrl = "https://github.com/RahulRawatji";
  const [activeLinkedin, setActiveLinkedin] = useState("");
  const [activeGithub, setActiveGithub] = useState("");
  const [activeMail, setActiveMail] = useState("");
  const { scrollYProgress } = useScroll();


  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <motion.main className='bg-white dark:bg-gray-800' initial={{ x: -300, opacity: 0 }} transition={{ ease: "easeOut", duration: 0.7 }} animate={{ x: 0, opacity: 1 }}>
        <motion.div style={{ scaleX: scrollYProgress, position: "fixed", background: "#C70039", top: 0, left: 0, right: 0, height: 10, transformOrigin: 0 }} />

          <div className='intro'>
            <motion.div className='intro-col-two' initial={{ x: 800  }} transition={{ ease: 'linear',duration: 3 }} animate={{ x: 50 ,opacity: 1 }}>
              <Image src={require('../public/naruto.gif')} height={200} />
              {/* <div className=''>
                  <p className='intro-text'>I AM A SOFTWARE ENGINEER BASED IN UK.
                  CURRENTLY WORKING AS A FREELANCER.
              </p>
              </div> */}
            </motion.div>
            <motion.div className='intro-col-one' initial={{ x: 400, opacity: 0 }} transition={{ ease: 'linear', duration: 2.5, delay:0.5 }} animate={{ x: 0, opacity: 1 }}>
              <h3 className='intro-headding'>HELLO, MY NAME IS</h3>
              <motion.h1 className='intro-name' transition={{scale:2}}>RAHUL RAWAT</motion.h1>
              
              <div className='text-5xl flex justify-center gap-16 text-gray-600'>
                <AiFillLinkedin title="LinkedIn Profile" className="cursor-pointer dark:text-white" onMouseOver={() => setActiveLinkedin('blue')} onMouseLeave={() => setActiveLinkedin("")} color={activeLinkedin ? activeLinkedin : ""} onClick={() => window.open(linkedinUrl)} />
                <AiFillGithub title="Github Profile" className="cursor-pointer dark:text-white" onMouseOver={() => setActiveGithub('black')} onMouseLeave={() => setActiveGithub("")} color={activeGithub ? activeGithub : ""} onClick={() => window.open(githubUrl)} />
                <AiFillMail title="Mail" className="cursor-pointer dark:text-white" onMouseOver={() => setActiveMail('teal')} onMouseLeave={() => setActiveMail("")} color={activeMail ? activeMail : ""} />
              </div>
            </motion.div>
          </div>

    <nav className='py-10 flex justify-between'>
            <span className='font-burtons mx-5 text-xl'>developedBy<span className='headChar text-3xl'>R</span></span>
            <ul className='flex items-center gap-6 px-10'>
              <li>
                <Link href="/">
                  <FcHome className='cursor-pointer' />
                </Link>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer' color={darkMode ? 'white' : ""} />
              </li>
              {/* <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ' href='https://drive.google.com/file/d/1qplLNSouc4TmfZeDsRnk-UJWeSMPtMPl/view?usp=sharing' rel="noreferrer noopener" target="_blank">Resume</a>
              </li> */}
            </ul>
          </nav>


        <TechnologyUsed />

        <section>
          <div>
            <h3 className='text-3xl py-1 font-burtons dark:text-gray-200'>What I Provide</h3>
            <div className='text-xl py-2 leading-8 text-gray-800 dark:text-gray-200'>
              <h3>- Design, Development, and Maintenance of Web and Mobile Applications.</h3>
              <h3>- Highly interactive Front end / User Interfaces.</h3>
              <h3>- Building AWS Lambda Functions.</h3>
              <h3>- DataFix Support.</h3>
            </div>
          </div>
        </section>

        <RandomQuote />

        <section className=' mt-4'>
          <h3 className='text-3xl py-1 font-burtons dark:text-gray-200'>Projects</h3>
          <div className='lg:flex gap-10'>

            <div className='basis-1/2 text-center shadow-lg p-10 rounded-xl my-5 bg-slate-100 '>
              <h3 className='text-xl font-bold px-2'>Basic Projects</h3>
              <p className='py-1 flex-wrap'>
                Calculator, Find An Activity, A Protfolio
              </p>
              <Link href="/levelB">
                <div className='p-2 shadow-md mt-3 hover:bg-teal-300 font-burtons cursor-pointer'>
                  View Projects
                </div>
              </Link>
            </div>

            <div className=' basis-1/2 text-center shadow-lg p-10 rounded-xl my-5 bg-slate-100 '>
              <h3 className='text-xl font-bold px-2'>Web Applications Projects</h3>
              <p className='py-1 flex-wrap'>
                Micro Blogging App, Movies App, A Portfolio
              </p>
              <Link href="/levelA">
                <div className='p-2 shadow-md hover:bg-teal-300 mt-3 font-burtons cursor-pointer'>
                  View Projects
                </div>
              </Link>
            </div>

          </div>
        </section>

        <section className='border-spacing-4 shadow-lg font-burtons p-10 m-5 rounded-xl dark:bg-slate-200'>
          <h3 className='text-3xl py-1 mb-3 '>About me!</h3>
          <div className='flex flex-wrap gap-4 justify-around md:p-5  rounded-lg shadow-lg '>
            <p className='md:text-xl md:p-5 text-center w-80 text-gray-700'>
              `I am a dedicated and diligent individual toward the world of computers.
              having a self driven attitude to embrace new tools and skills.
              i have niche towards web-development. Living life, having fun, enjoying the sunsets.
              tea, music, dance and nature.`
            </p>
            <Image className="rounded-full border-4" alt="DevAvatar" width={350} height={10} objectFit='cover' src={Avatar} />
          </div>
        </section>

        <div className='border-spacing-4 shadow-lg p-10 m-5 rounded-xl font-burtons dark:bg-slate-200'>
          <h3 className='text-3xl py-1 mb-3 '>Reach Out to me!</h3>
          <div className='font-burtons p-5 md:text-10md flex-col '>
            <div className='flex items-center flex-wrap gap-5'>
              <h3 className='m-4' >Associate Software Engineer @BYJU's 💭</h3>
              <h3 className='m-4'>Open for opportunities: <span className='text-red-500 text-4xl'>Yes</span></h3>
              <h3 className='m-4'>Mail: <span className='text-red-500 md:text-2xl'><a>rahulrawatwork@gmail.com</a></span></h3>
            </div>
          </div>
        </div>

      </motion.main>
    </div>

  )
}
