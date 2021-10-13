import React, { useState } from 'react'
import "./Contact.scss"
import emailjs from 'emailjs-com';
import validation from './validation';


export default function Contact() {
    const state = { 
    email: '',
    name: '',
    subject: '',
    message: '',
}



    const [values, setValues] = useState({state});
 
    const handelchange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,            
        });
     };

    const [errors, setErrors] = useState({});
      
 
    const handleSubmit = (e ) =>{
        e.preventDefault();
         emailjs.sendForm('service_vsxji59', 'NCcontact', e.target, 'user_tmGqoNrJy7HoDu1DKYWau')
            .then((result) => {
          console.log(result.text);
      }, (error) => {
         console.log(error.text);
      });

      setErrors(validation(values));
      setValues("")
     }
    
      

    
    return (
     <div className="Contact" id="Contact">
             <h1>Contact</h1>
            <div className="left">
                
                <form onSubmit={handleSubmit} >
                    <input type="email" placeholder="E-mail" name="email" value={values.email} onChange={handelchange}/>
                    {errors.email && <p className="error"> {errors.email} </p>}
                     <input type="text" placeholder="Name" name="name" value={values.name} onChange={handelchange}/>
                     {errors.name && <p className="error"> {errors.name} </p>}
                     <input type="text" placeholder="Subject" name="subject"
                      value={values.subject}onChange={handelchange} />
                     <textarea type="text"  placeholder="Write your message"
                     cols="30" rows="7" name="message" value={values.message} onChange={handelchange}></textarea>
                     {errors.message && <p className="error"> {errors.message} </p>}
                    <button  type="submit"  >Send</button>
                    
                </form>
            </div>
            <div className="right">
            <h3>Let's talk about everything!</h3>
            <p>If you have any question please contact me by E-mail
                 or You can write your message left side I will reply as soon as possible.</p>
                    <div className="imagecontainer">
                     <img src="image/contact.svg" alt="" />
                 </div>
                
            </div>
            
        </div>
    )
}
