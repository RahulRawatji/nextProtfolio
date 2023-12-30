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
      <a href={data?.link}>
        <div className="">
          <Image src={data?.imgLink} className="project-img" />
        </div>
      </a>
      <div className=" ">
        <h3>{data?.title}</h3>
        <ul className="project-list">
          {data?.technologyUsed?.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
        <p>{data?.info}</p>
      </div>
    </motion.div>
  )
}

export default Card
