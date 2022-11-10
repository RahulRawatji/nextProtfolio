import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { AiOutlineReload } from 'react-icons/ai';
import { useInView ,motion } from 'framer-motion';

const RandomQuote = () => {
  const [quoteData, set] = useState({});
  // const ref = useRef(null);
  // const isInView = useInView(ref,{
  //   margin: "0% 0% -40% 0%",
  //   once: true
  // });

  useEffect(() => {
    fetchRandomQuote();
  }, []);


  const fetchRandomQuote = async () => {

    const response = await axios("https://type.fit/api/quotes");
    const data = response.data;
    const randomNumber = Math.floor(Math.random() * 1643);
    set(data[randomNumber]);
  };

  return (
    <motion.div className='md:m-10 p-20 flex-col border-spacing-4 shadow-lg dark:bg-slate-200'>
    <div className='grid justify-items-end p-2'>
      <AiOutlineReload onClick={() => fetchRandomQuote()} />
    </div>
    <h2 className='md:text-5xl sm:text-4xl  font-burtons text-yellow-600 text-center md:px-10'>
      "{quoteData.text} "
    </h2>
    <p className='md:text-xl text-center px-20 m-2'>
      {quoteData.author}
    </p>
  </motion.div>
  )
}

export default RandomQuote