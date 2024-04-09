import React from 'react'
import { MotionConfig } from "framer-motion"

export function App({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  )
}