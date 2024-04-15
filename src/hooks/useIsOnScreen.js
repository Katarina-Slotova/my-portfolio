import React from 'react'

function useIsOnScreen(sectionRef) {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      setIsVisible(entry.isIntersecting)

      // `entry.isIntersecting` will be true if the
      // element is in the viewport, false if not.
    })

    observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [sectionRef])

  return isVisible
}

export default useIsOnScreen
