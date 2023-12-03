import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IoIosSchool} from 'react-icons/io'
import {BiSolidSchool} from 'react-icons/bi'

import './Education.css'

const Education = () => {
  return (
    <div className='edu-container' id='education'>
    <h1>Education</h1>
   <hr />
   <VerticalTimeline>

   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(250, 240, 250)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  grey' }}
    date="2017-18"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BiSolidSchool />}
  >
    <h3 className="vertical-timeline-element-title">Secondary Education</h3>
    <h5 className="vertical-timeline-element-subtitle">State Board RBSE</h5>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgb(250, 240, 250)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  grey' }}
    date="2019-2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BiSolidSchool />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate Education</h3>
    <h5 className="vertical-timeline-element-subtitle">State Board RBSE </h5>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgb(250, 240, 250)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  grey' }}
    date="2020-Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoIosSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech</h3>
    <h5 className="vertical-timeline-element-subtitle">Arya College of Engineering</h5>
   
  </VerticalTimelineElement>
   </VerticalTimeline>


    
    </div>
  )
}

export default Education;