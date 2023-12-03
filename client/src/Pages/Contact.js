import React,{useState,useRef} from 'react'
import './Contact.css'
import Contact_pic from '../Components/Image/contact.jpeg';    
        
const Contact = ({toggle}) => {
 const refname = useRef(null);
 const refmail = useRef(null);
 const refmessage = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const HandleName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  // Function to handle email input changes
  const HandleMail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  // Function to handle message input changes
  const HandleMessage = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };
  const HandleSubmit = async(e) => {

    // Add logic here to handle form submission

    try{
      const response=await fetch('http://127.00.1:5000/submit',{
        method: 'POST',
        headers:{
          'Content-type': 'application/json',

        },
        body: JSON.stringify(formData),
      });   
      
      console.log('Form submitted:', formData);
    } 
    catch (error) {
      console.error('Error submitting the form:', error);
    }
   
    refname.current.value=" ";
    refmail.current.value=" ";
    refmessage.current.value=" ";

  };
  return (
    <div className={toggle?"contact-toggle":"contact"} id='contact'>
    <h1>Contact Us</h1>
    <hr />
    <div className={toggle?"contact-container-toggle":"contact-container"}>
    
    <div className="img-container">
        <img src={Contact_pic} alt="" />
    </div>

    <form className="input"  action="https://formspree.io/f/meqbbwpw"
  method="POST" > 
    <input type="text" placeholder='Enter  Your Name'  onChange={HandleName} value={formData.name} ref={refname} name='Name'/>
    <input type='email' placeholder='Enter Your Email Address' onChange={HandleMail}  value={formData.email} ref={refmail} name='mail'/>
    {/* <input type="number" / id="" /> */}
    <textarea name="message" id="" cols="30" rows="5"  placeholder='Write Your Message' onChange={HandleMessage} ref={refmessage} value={formData.message}></textarea>
    <div className="submit" onClick={HandleSubmit}><button type='submit'> Send Message</button></div></form>
   

    </div></div>
  )
}

export default Contact;