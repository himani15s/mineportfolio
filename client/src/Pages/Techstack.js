import React from 'react'
import './Techstack.css'
import { Techlist } from './Techstacklist'
 const Techstack = () => {
  return (
    <div className='tech-container' id='tech-stack'>
    <h1>Technologies Stack</h1>
    <hr />
    <p>👉 Including Programming Languages, Frameworks, Databases, Front-end and Back-end Tools, API's</p>
    <div className='card-container'>
  
    
    {
       Techlist.map((tech)=>(
        <div className='card' key={tech._id}>   
        <tech.icon className='tech-icon'/>     
        <h7>{tech.name}</h7>
        
        
        
        </div>


       ))

    }

        
    </div>
    </div>
  )
}
export default Techstack;