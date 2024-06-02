import React from 'react'
import { message, subjectLink, arrow } from './page.module.css'
import { Link } from 'gatsby'
import { FaArrowLeft } from 'react-icons/fa'

function Success() {
  return (
    <div>
      <div className={message}>
        <p>Thank you for reaching out!</p>
        <p>I have received your message and will get back to you shortly 😊</p>
        <div style={{ paddingTop: '50px' }}>
          <Link className={subjectLink} to='/'>
            <FaArrowLeft className={arrow} /> Go back to home page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Success
