import React from 'react';
import * as emailjs from 'emailjs-com';
import "./Contact.scss";
import Recaptcha from 'react-google-recaptcha';

 
class Contact  extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: '/*YOUR NAME OR COMPANY*/',
      subject,
      message_html: message,
    };
    emailjs.send(
      'service_5wn3adq',
      'NCcontact',
       templateParams,
      'user_jnVZadsFDWG7X2HkZ4BHV'
    )
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message, sentMessage } = this.state;

    return (
        <div className="Contact" id="Contact">
            
            <div className="left">
                  <form onSubmit={this.handleSubmit}>
       
           
            <input type="text" placeholder="Name" name="name"value={name} onChange={this.handleChange}/>
            <input type="email" placeholder="E-mail" name="email" value={email}
              onChange={this.handleChange}/>
            <input type="text" placeholder="Name" name="name" value={subject}
              onChange={this.handleChange}/>
            <textarea type="text"  placeholder="Write your message"
             cols="30" rows="7" name="message" value={message}
             onChange={this.handleChange}></textarea>
             <Recaptcha
                 sitekey="6LcPAXAcAAAAAPDcIBT8o_bFZw2Q4veJ3dYum-8k"
                    render="explicit"
                    onloadCallback={this.recaptchaLoaded}
                    verifyCallback={this.verifiedRecaptcha}
/>
             <button  type="submit">Send</button>

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
    );
  }
}

export default Contact ;