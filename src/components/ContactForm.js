import React from 'react';
import Globe from './globe/Globe';

const ContactForm = () => (
  <>
    <div>
      <div className="form_globe w-50">
        <div className="text-zone">
          <h1 className="title p-3 text-danger"> Contact </h1>
          <p>
            I am interested in remote or relocation jobs.
            Contact me if you have any requests or questions using
            <a className="font-color" href="https://www.linkedin.com/in/ntihinduka-alpha/">
              {' '}
              Linkedin
            </a>
            <span className="ps-1">or the form below.</span>

          </p>
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xbjellaw"
              method="post"
              id="form"
              data-aos="flip-up"
            >
              <ul className="list-unstyled">
                <li className="mb-2">
                  <input className="w-100 ps-1 border border-success" type="text" name="user_name" placeholder="Name" required />
                </li>
                <li className="mb-2">
                  <input className="w-100 ps-1 border border-success" type="email" name="email" placeholder="Email" required />
                </li>
                <li className="mb-2">
                  <input className="w-100 ps-1 border border-success" placeholder="Subject" type="text" name="subject" required />
                </li>
                <li className="mb-2">
                  <textarea className="w-100 h-25 ps-1 border border-success" placeholder="Message" name="message" required />
                </li>
                <li className="rounded">
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

          </div>
        </div>
        <><Globe /></>
      </div>

    </div>
  </>
);

export default ContactForm;
