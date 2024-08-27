import React from 'react'
import ProjectCard from '../sub/ProjectCard'



const Projects = () => {
  return (
    <section
    id='projects'>
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/sembada.png"
          title="Integrated Sleman Database System"
          description="Skills : Project Management, Python, Flask, MySQL, MQTT, HTTP, Websocket, Javascript, HTML, CSS."
        />
        <ProjectCard
          src="/supermarket.png"
          title="Automatic Supermarket Livestock"
          description="Skills : Project Management, Instrumentation, Sensor, Actuator, I2C, Modbus, UART."
        />
        <ProjectCard
          src="/dental.png"
          title="Dental Chair Design"
          description="Skills : Electrical Drawing, Instrumentation, Actuator."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 mt-10 px-10">
        <ProjectCard
          src="/parkinson.png"
          title="Parkinson Disease Detection from Soundawave with Artificial Intelligence"
          description="Skills : Project Management, Artifical Intelligence, Python."
        />
        <ProjectCard
          src="/wip.png"
          title="Automation System Design of Water Injection Pump"
          description="Skills : Instrumentation, Piping & Instrumentation Diagram (P&ID), Instrumentation Loop Diagram (ILD)."
        />
        <ProjectCard
          src="/amine.png"
          title="Safety Design System of Amine Scrubbing Process"
          description="Skills : Instrumentation, Piping & Instrumentation Diagram (P&ID), Instrumentation Loop Diagram (ILD)."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 mt-10 px-10">
        <ProjectCard
          src="/responsi.png"
          title="Integrated Fuel Filling System"
          description="Skills : Project Management, Python, MQTT, HTTP."
        />
        <ProjectCard
          src="/plc.png"
          title="Automatic Car Taillight system"
          description="Skills : Programmable Logic Control (PLC), Codesys."
        />
        <ProjectCard
          src="/insin.png"
          title="Automatic Fluid System Design"
          description="Skill : Programmable Logic Control (PLC), Codesys."
        />
      </div>

    </div>
    </section>
  )
}

export default Projects