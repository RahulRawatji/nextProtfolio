import React from 'react';
import { DiReact, DiNodejsSmall, DiBootstrap, DiJsBadge, DiCss3, DiAtom, DiHtml5, DiGithubBadge } from "react-icons/di";
import { SiExpress, SiTypescript, SiServerless, SiTailwindcss, SiMaterialui, SiJest, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from 'framer-motion';

const TechnologyUsed = () => {
  const technologyData = [{}];

  return (
    <section className='h-screen'>
      <div className='flex gap-5 p-5 m-5 justify-center content-center items-center'>
      <div className='mb-2 w-2/4'>
        <h3 className='text-center px-6 text-5xl font-bold font-burtons'>Technology I Use</h3>
      </div>
      <div className='flex flex-wrap gap-3 justify-center w-2/4'>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1 '>ReactJs</h3>
          <DiReact size="50" color='#61DBFB' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>NodeJs</h3>
          <DiNodejsSmall size="50" color='#3C873A' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>Bootstrap</h3>
          <DiBootstrap size="50" color='purple' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>JavaScript</h3>
          <DiJsBadge size="50" color='#f0db4f' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>HTML</h3>
          <DiHtml5 size="50" />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>CSS</h3>
          <DiCss3 size="50" color='orange' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>React Native</h3>
          <DiAtom size="50" color='#61DBFB' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>ExpressJs</h3>
          <SiExpress size="50" />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>Github</h3>
          <DiGithubBadge size="50" />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>Typescript</h3>
          <SiTypescript size="50" color='#007acc' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>NextJs</h3>
          <TbBrandNextjs size="50" />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>Serverless</h3>
          <SiServerless size="50" color='#c2232a' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>TailwindCSS</h3>
          <SiTailwindcss size="50" color='#007acc' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>Material UI</h3>
          <SiMaterialui size="50" color='#009fc0' />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>Jest</h3>
          <SiJest size="50" />
        </motion.div>
        <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)" }} className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
          <h3 className='text-sm font-medium mb-1'>PostgreSQL</h3>
          <SiPostgresql size="50" color='#009fc0' />
        </motion.div>
      </div>
      </div>
      <div class="custom-shape-divider-bottom-1670218390">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </div>
    </section>

  )
}

export default TechnologyUsed