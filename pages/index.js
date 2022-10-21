import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Image from 'next/image';
import devAvatar from '../public/devAvatar.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900" : ""}>
      <Head>
        <title>Rahul Rawat Protfolio</title>
        <meta name="description" content="Protfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 dark:bg-gray-900'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbyRahul</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-5'>
            <h2 className='text-5xl py-2 text-teal-500 font-medium'>Hi, I'm Rahul 👋</h2>
            <h2 className='text-2xl py-2'>Software Engineer </h2>
            {/* <p className='text-xl py-5 px-10 leading-8 text-gray-800 sm:text-md'>
           A Software Engineer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
            </p> */}
          </div>
          <div className='text-5xl flex justify-center py-3 gap-16 text-gray-600'>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillMail />
          </div>
          <div className='relative w-80 h-80 mx-auto'>
            <Image className="rounded-full" src={devAvatar} layout='fill' />
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
            <div className='text-center shadow-lg p-10 rounded-xl my-5'>
              <Image src={devAvatar} width={150} height={150} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Web Application</h3>
              <p className='py-2 flex-wrap'>
                Creating web Application
              </p>
              <h4 className='py-4 text-teal-600'>Technology Used</h4>
              <p className='text-gray-800 py-1'>React</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-5'>
              <Image src={devAvatar} width={150} height={150} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Web Application</h3>
              <p className='py-2'>
                Creating web Application Creating
              </p>
              <h4 className='py-4 text-teal-600'>Technology Used</h4>
              <p className='text-gray-800 py-1'>React</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-5'>
              <Image src={devAvatar} width={150} height={150} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Web Application</h3>
              <p className='py-2'>
                Creating web Application
              </p>
              <h4 className='py-4 text-teal-600'>Technology Used</h4>
              <p className='text-gray-800 py-1'>React</p>
            </div>
          </div>
        </section>
        <div>
          <h3 className='text-3xl py-1'>Portfolio</h3>
          <p>
            Some text
          </p>

        </div>
      </main>

    </div>
  )
}
