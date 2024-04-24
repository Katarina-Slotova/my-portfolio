import React from 'react'
import { formContainer, wrapper } from './contact.module.css'

function Contact() {
  return (
    <div className={wrapper}>
      <form
        className={formContainer}
        method='post'
        netlify-honeypot='bot-field'
        data-netlify='true'
        name='contact'
      >
        <input type='hidden' name='bot-field' />
        <input type='hidden' name='form-name' value='contact' />
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Your name'
          required
        ></input>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Your email'
          required
        ></input>
        <textarea
          type='text'
          name='message'
          id='message'
          rows={10}
          placeholder='Message'
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
