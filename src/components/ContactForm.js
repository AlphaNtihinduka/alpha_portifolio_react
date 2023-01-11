import './contact.scss';
import Loader from 'react-loaders';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Globe from './globe/Globe';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ru98t66',
        'template_qowlwuo',
        form.current,
        'Qc0hByTDYQcS_pea1nieU',
      )
      .then(
        () => {
          alert('Message sent, I will get back to you soon!');
          window.location.reload(false);
        },
        () => {
          alert('An error occured, please try again');
        },
      );
  };

  return (
    <>
      <div>
        <div className='form_globe w-50'>
        <div className="text-zone">
          <h1 className="title">
          </h1>
          <p>
            I am interested in remote or relocation jobs.
            Contact me if you have any requests or questions using
            <a className="font-color" href="https://www.linkedin.com/in/ntihinduka-alpha/">
              {' '}
              Linkedin 
            </a>
            <span className='ps-1'>or the form below.</span>
            
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul class = "list-unstyled">
                <li className='mb-2'>
                  <input className='w-100 ps-1 border border-success' type="text" name="user_name" placeholder="Name" required />
                </li>
                <li className='mb-2'>
                  <input className='w-100 ps-1 border border-success' type="email" name="email" placeholder="Email" required />
                </li>
                <li className='mb-2'>
                  <input className='w-100 ps-1 border border-success' placeholder="Subject" type="text" name="subject" required />
                </li>
                <li className='mb-2'>
                  <textarea className='w-100 ps-1 border border-success' placeholder="Message" name="message" required />
                </li>
                <li class="rounded">
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

          </div>
        </div>
         <><Globe /></>
        </div> 
        
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default ContactForm;