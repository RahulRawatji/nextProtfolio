import React from 'react';
import { DiReact, DiNodejsSmall, DiBootstrap, DiJsBadge, DiCss3, DiAtom, DiHtml5, DiGithubBadge } from "react-icons/di";
import { SiExpress, SiTypescript, SiServerless, SiTailwindcss, SiMaterialui, SiJest, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const TechnologyUsed = () => {
  return (
    <section className='mb-10'>
          <div className='mb-2'>
            <h3 className='text-3xl py-1 font-burtons dark:text-white'>Technology I Use</h3>
          </div>
          <div className='flex flex-wrap gap-8 justify-center'>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>ReactJs</h3>
              <DiReact size="80" color='#61DBFB' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>NodeJs</h3>
              <DiNodejsSmall size="80" color='#3C873A' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Bootstrap</h3>
              <DiBootstrap size="80" color='purple' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>JavaScript</h3>
              <DiJsBadge size="80" color='#f0db4f' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>HTML</h3>
              <DiHtml5 size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>CSS</h3>
              <DiCss3 size="80" color='orange' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>React Native</h3>
              <DiAtom size="80" color='#61DBFB' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>ExpressJs</h3>
              <SiExpress size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Github</h3>
              <DiGithubBadge size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Typescript</h3>
              <SiTypescript size="80" color='#007acc' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>NextJs</h3>
              <TbBrandNextjs size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Serverless</h3>
              <SiServerless size="80" color='#c2232a' />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>TailwindCSS</h3>
              <SiTailwindcss size="80" color='#007acc'/>
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Material UI</h3>
              <SiMaterialui size="80" color='#009fc0'/>
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Jest</h3>
              <SiJest size="80" />
            </div>
            <div className='text-center shadow-lg rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>PostgreSQL</h3>
              <SiPostgresql size="80" />
            </div>

          </div>
        </section>
  )
}

export default TechnologyUsed