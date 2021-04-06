import React from 'react';
import as from './contact-form.module.scss';

const ContactForm = () => {
  return (
    <div>
      <h2>contact me</h2>
      <form
        action="https://getform.io/f/364a83e1-b8bf-4cc1-b350-c42537c47fa0"
        method="POST"
      >
        <label htmlFor="name">name: </label>
        <input type="text" name="name" placeholder="first name last name" />
        <label htmlFor="email">email: </label>

        <input type="email" name="email" placeholder="email@email.com" />
        <label htmlFor="message">message: </label>
        <textarea type="text" name="message" placeholder="write your message." />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default ContactForm;
