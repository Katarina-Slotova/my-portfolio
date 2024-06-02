import React from 'react'
import { motion } from 'framer-motion'
import { wrapper, submitButton } from './contactForm.module.css'

function ContactForm() {
  return (
    <form
      className={wrapper}
      method='POST'
      data-netlify-honeypot='bot-field'
      data-netlify='true'
      name='contact'
      onSubmit='submit'
      action='/success/'
      netlify
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
        rows={7}
        placeholder='Message'
        required
      ></textarea>
      <motion.button
        className={submitButton}
        type='submit'
        whileHover={{
          scale: 1.02,
        }}
        transition={{ type: 'spring', stiffness: 900, damping: 90 }}
      >
        Submit
      </motion.button>
    </form>
  )
}

export default ContactForm
