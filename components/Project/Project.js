import React from "react"
import Card from "../Common/Card"
import { projectData } from "./constant"

const Project = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="flex justify-evenly gap-4 mt-10">
        {projectData.map((projectData, idx) => {
          return <Card data={projectData} key={idx} />
        })}
      </div>
    </div>
  )
}

export default Project
