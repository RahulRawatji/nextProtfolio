import React from 'react';
import Image from 'next/image';

import portfolio from '../public/portfolio.jpg'

const Portfolio = () => {
  const portfolioUrl = 'https://rahulrawatji.github.io/rahul55';
  const githubUrl = 'https://github.com/RahulRawatji/rahul55';
  return (
    <div className='px-5 w-1/2'>
      <h4 className='text-md p-5 font-burtons text-center dark:text-white'>This is a Protfolio i made for myself using basic HTML & CSS</h4>
      <Image src={portfolio} alt="PortfolioPreview"/>
      <div className='flex p-1 justify-center gap-10'>
        <button className=' bg-slate-50 px-3 hover:bg-teal-300 hover:text-white shadow-lg  rounded-md font-bold' onClick={() => window.open(portfolioUrl)}>Preview</button>
        <button className='bg-slate-50  px-3 hover:bg-teal-300 hover:text-white  shadow-lg rounded-md font-bold' onClick={() => window.open(githubUrl)}>Code</button>
      </div>
    </div>
  )
}

export default Portfolio