import React from 'react'
import {skills,experiences} from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../Components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text '>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Tushar Sourav</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Software Engineer based in India, specializing in technical education through hands-on learning and building applications</p>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill)=>(
              <div className='block-container  w-20 h-20'>
                <div className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='py-16'>
          <h3 className='subhead-text'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>3rd year CSE Student , tech enthusiast</p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience)=>(
              <VerticalTimelineElement
              icon={
                <div>
                  <img 
                  src={experience.icon}
                  alt="experience"
                  className='w-[60%] h-[60%] object-contain' 
                  />
                </div>
              }
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        </div>
        <hr className='border-slate-200' />
        <CTA />
    </section>
  )
}

export default About
