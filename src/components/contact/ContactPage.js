import React from "react";
import ContactForm from "./ContactForm";
const ContactPage = ({ history }) => (
  <div className='mw6 center bg-white br3 pa3 pa5-ns mv5 ba b--black-7'>
    <ContactForm history={history} />
  </div>
);

export default ContactPage;
