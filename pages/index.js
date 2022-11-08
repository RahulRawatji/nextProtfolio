import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineReload } from 'react-icons/ai';
import Link from 'next/link';
import { FcHome } from "react-icons/fc";

import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import devAvatar from '../public/devAvatar.png';
import TechnologyUsed from '../components/TechnologyUsed';
import Avatar from '../public/avatar.jpg';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [quoteData, setQuoteData] = useState({});
  const linkedinUrl = "https://www.linkedin.com/in/rahul-rawat21";
  const githubUrl = "https://github.com/RahulRawatji";
  const [activeLinkedin, setActiveLinkedin] = useState("");
  const [activeGithub, setActiveGithub] = useState("");
  const [activeMail, setActiveMail] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, [])

  const fetchRandomQuote = async () => {

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
        <link rel="icon" href="/favicon-n.ico" type="image/x-icon" />
      </Head>
      <motion.main className='bg-white px-10  dark:bg-gray-800' initial={{ x: -300, opacity: 0 }} transition={{ ease: "easeOut", duration: 0.7 }} animate={{ x: 0, opacity: 1 }}>
        <section className='min-h-screen'>
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
                <a className='bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ' href='https://drive.google.com/file/d/1qplLNSouc4TmfZeDsRnk-UJWeSMPtMPl/view?usp=sharing' rel="noreferrer noopener" target="_blank">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center'>
            <h2 className='text-5xl py-2 mb-2 text-teal-500 font-medium'>Hi, I'm Rahul👋</h2>
            <h2 className='text-2xl font-burtons dark:text-white'>Software Engineer </h2>
            <p className='text-xl py-3 font-burtons leading-8 text-gray-800 sm:text-md dark:text-white'>
              Delivering complex products in less time with high quality
            </p>
          </div>
          <div className='relative w-80 h-80 mx-auto'>
            <Image className="rounded-full" src={devAvatar} layout='fill' alt="DevAvatar" />
          </div>
          <div className='text-5xl flex justify-center py-10 gap-16 text-gray-600'>
            <AiFillLinkedin title="LinkedIn Profile" className="cursor-pointer dark:text-white" onMouseOver={() => setActiveLinkedin('blue')} onMouseLeave={() => setActiveLinkedin("")} color={activeLinkedin ? activeLinkedin : ""} onClick={() => window.open(linkedinUrl)} />
            <AiFillGithub title="Github Profile" className="cursor-pointer dark:text-white" onMouseOver={() => setActiveGithub('black')} onMouseLeave={() => setActiveGithub("")} color={activeGithub ? activeGithub : ""} onClick={() => window.open(githubUrl)} />
            <AiFillMail title="Mail" className="cursor-pointer dark:text-white" onMouseOver={() => setActiveMail('teal')} onMouseLeave={() => setActiveMail("")} color={activeMail ? activeMail : ""} />
          </div>
        </section>

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

        <div className='md:m-10 p-20 flex-col border-spacing-4 shadow-lg dark:bg-slate-200'>
          <div className='grid justify-items-end p-2'>
            <AiOutlineReload onClick={() => fetchRandomQuote()} />
          </div>
          <h2 className='md:text-5xl sm:text-4xl  font-burtons text-yellow-600 text-center md:px-10'>
            "{quoteData.text} "
          </h2>
          <p className='md:text-xl text-center px-20 m-2'>
            {quoteData.author}
          </p>
        </div>

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
