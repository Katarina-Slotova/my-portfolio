import React from 'react'
import {
  container,
  formContainer,
  textContainer,
  wrapper,
  submitButton,
  textSubsection,
  textParagraph,
  connectImg,
  connectBtn,
} from './contact.module.css'
import { motion } from 'framer-motion'
import GithubImg from '../../images/github.png'
import LinkedInImg from '../../images/linkedin.png'

function Contact() {
  return (
    <div className={container}>
      <div className={textContainer}>
        <div style={{ display: 'block' }}>
          <div className={textSubsection}>
            <div>
              <p className={textParagraph}>👋</p>
            </div>
            <div>
              <p className={textParagraph}>
                Whether it's discussing potential opportunities, sharing
                experiences or simply geeking out over the latest tech trends,
                I'm all ears!
              </p>
            </div>
          </div>
          <div className={textSubsection}>
            <div>
              <p className={textParagraph}>📫</p>
            </div>
            <div>
              <p className={textParagraph}>
                Feel free to reach out on LinkedIn or via the contact form — I'd
                love to connect and see how we can support each other's journey.
              </p>
            </div>
          </div>
          <div className={textSubsection}>
            <div className={connectImg}>
              <a
                className={connectBtn}
                href='https://www.linkedin.com/in/katarina-slotova-804466131/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={LinkedInImg} width={50} height={50} alt='Linkedin logo.' />
              </a>
            </div>
            <div className={connectImg}>
              <a
                className={connectBtn}
                href='https://github.com/Katarina-Slotova'
                target='_blank'
                rel='noreferrer'
              >
                <img src={GithubImg} width={50} height={50} alt='Github logo.' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={formContainer}>
        <form
          className={wrapper}
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
      </div>
    </div>
  )
}

export default Contact
