import React from 'react'
import './About.css'
import About_pic from '../Components/Image/about-pic.jpg'
 const About = ({toggle}) => {
  return (
    <>
            <div className={toggle?"about-toggle":"about"} id='about' >
          
            <div className="about-image">
                <img src={About_pic} alt="" />
            </div>
            <div className="about-content"> 
            <h3>About Me</h3>
            <p>Greetings,
            <br />

I am Himani Sharma, currently pursuing a BTech in Information Technology at Arya Institute of Engineering and Technology. Proficient in C++ and the MERN stack, I specialize in web development.

<br /><br />
My portfolio includes a captivating landing page and practical projects such as a to-do list and a chat application.  <br /> Beyond coding, I find joy in creative pursuits like dance and content creation.

Driven, punctual, and dedicated, I aim to contribute effectively to a dynamic team. <br /> <br /> Coming from a family of five, my short-term goal is to secure a position in a reputed company, with a long-term vision of building a respected career.

I am eager to bring my skills to your organization, contributing to a culture of excellence and innovation.
<br /><br />
Best Regards,
<br />
Himani Sharma


</p>
           </div>
</div>
    </>

  )
}

export default About;