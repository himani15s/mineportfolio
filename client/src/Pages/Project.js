import React from 'react'
import './Project.css'
import { Projectlist } from './Projectlist.js'
import Food_img from '../Components/Image/onlinefoodapp.png'

 const Project = () => {
    return (
        <div className='project-container' id='project'>
        <h1>My Projects</h1>
        <hr />
        <p>Experienced MERN stack developer👩‍💻 proficient in building dynamic web applications. <br /> Expertise in utilizing HTML and CSS for creating seamless user interfaces. <br /> Explore my portfolio for a showcase of MERN projects and responsive design implementations.</p>
        <div className='project-card-container'>
        <div className='project-card' >   
            <img src= {Food_img} alt="App"  className='project-img'/>   
            <h5>Online food Hub</h5>
            <div className='technology'><span>HTML</span><span>CSS</span><span>JAVASCRIPT</span></div>
         

            <a href="#">View</a>
            </div>
        
        {
           Projectlist.map((project)=>(
            <div className='project-card' key={project._id}>   
            <img src={project.img} alt="App"  className='project-img'/>   
            <h5>{project.name}</h5>
            <div  className='technology'><span>{project.mongo}</span><span>{project.react}</span><span>{project.express}</span><span>{project.node}</span></div>
            <a href="#">View</a>
            </div>
    
    
           ))
    
        }
    
            
        </div>
        </div>
      )
}

export default Project;