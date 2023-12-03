import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdOutlineDeveloperMode} from 'react-icons/md'
import {SiReact} from 'react-icons/si'

import './Experience.css'

const Experience = () => {
  return (
    <div className='experience-container' id='experience'>
    <h1> Work Experience</h1>
   <hr />
   <VerticalTimeline>

   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(250, 240, 250)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  grey' }}
    date="April 2023-May 2023."
    iconStyle={{ background: 'rgb(33, 10, 123)', color: '#fff' }}
    icon={<MdOutlineDeveloperMode/>}
  >
    <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
    <h5 className="vertical-timeline-element-subtitle">Acmegrade</h5>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgb(250, 240, 250)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  grey' }}
    date=" July 2023-Sepetember 2023"
    iconStyle={{ background: 'rgb(33, 10, 123)', color: '#fff' }}
    icon={<SiReact/>}
  >
    <h3 className="vertical-timeline-element-title">Mern Stack Developer</h3>
    <h5 className="vertical-timeline-element-subtitle">Zeetone's Private Limited </h5>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
   
  </VerticalTimelineElement>
 
   </VerticalTimeline>


    
    </div>
  )
}

export default Experience;