import React from 'react'
import {
  container,
  formContainer,
  textContainer,
  textWrapper,
  textSubsection,
  textParagraph,
  connectImg,
  connectBtn,
  emailLink,
  emailBtn,
  connectSubsection,
} from './contact.module.css'
import GithubImg from '../../images/github.png'
import LinkedInImg from '../../images/linkedin.png'
import ContactForm from '../ContactForm'

function Contact() {
  return (
    <div className={container}>
      <div className={textContainer}>
        <div className={textWrapper}>
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
                Feel free to reach out on LinkedIn, via email or use the contact
                form — I'd love to connect and see how we can support each
                other's journey.
              </p>
            </div>
          </div>
          <div className={connectSubsection}>
            <div className={connectImg}>
              <a
                className={connectBtn}
                href='https://www.linkedin.com/in/katarina-slotova-804466131/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={LinkedInImg}
                  width={50}
                  height={50}
                  alt='Linkedin logo.'
                />
              </a>
            </div>
            <div className={connectImg}>
              <a
                className={connectBtn}
                href='https://github.com/Katarina-Slotova'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={GithubImg}
                  width={50}
                  height={50}
                  alt='Github logo.'
                />
              </a>
            </div>
            <div className={connectImg}>
              <button className={emailBtn}>
                <a
                  className={emailLink}
                  href='mailto:katarina.slotova.ca@gmail.com'
                >
                  katarina.slotova.ca@gmail.com
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={formContainer}>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
