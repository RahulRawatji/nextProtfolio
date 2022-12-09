import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { AiOutlineReload } from 'react-icons/ai';
import { useInView ,motion } from 'framer-motion';

const RandomQuote = () => {
  const [quoteData, set] = useState({});
 
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
    <motion.div initial={{opacity:0}} transition={{ delay: .5 }} whileInView={{ opacity:1, scale:.8}} viewport={{ once: true }}>
    <h3 className='quote'>
      {quoteData.text}
    </h3>
    <p className=''>
      {quoteData.author}
    </p>
  </motion.div>
  )
}

export default RandomQuote