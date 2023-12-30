import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const Card = ({ data }) => {
  return (
    <motion.div
      className="w-2/6 shadow-md p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeIn", duration: 0.5, delay: 0.1 }}
    >
      <div
        className="w-full h-[150px] bg-contain aspect-square bg-no-repeat"
        style={{ backgroundImage: `url(${data.imgLink})` }}
      ></div>

      <div className="mt-4">
        <h3 className="text-2xl font-semibold">{data?.title}</h3>
        <p className="mt-4">{data?.info}</p>
        <ul className="mt-2 flex gap-1 font-extralight flex-wrap">
          {data?.technologyUsed?.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>
      <a href={data?.link} className="mt-2 font-bold">
        Visit
      </a>
    </motion.div>
  )
}

export default Card
