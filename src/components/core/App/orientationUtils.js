import React, { useState, useEffect, useCallback } from 'react'
import config from '../../../config'
import Alert from '../Alert'

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

function useOrientation(){
  const [ orientation, setOrientation ] = useState("portrait")
  const handler = useCallback(
    () => {
      const portraitMobile = ( window.innerWidth <= 820 ) && ( window.innerHeight <= 425)
      const landscapeMobile = ( window.innerWidth <= 425 ) && ( window.innerHeight <= 820)
      const mql = window.matchMedia("(orientation:landscape)")
      if (detectMob() && (portraitMobile || landscapeMobile)) {
        if (mql.matches) {
          setOrientation("landscape")
        } else {
          setOrientation("portrait")
        }
      } else {
        setOrientation("computer")
      }
    },
    [],
  )

  window.addEventListener("orientationchange", handler)
  window.addEventListener("resize", handler)
  useEffect(() => {
    handler()
  }, [handler])
  return orientation
}

function useDefineContent(App){
  const orientation = useOrientation()

  if (orientation === "landscape") {
    if(config.landscapeMobile)
      return <App/>
    else
      return <Alert/>
  }

  if(orientation === "portrait") {
    if(config.landscapeMobile)
      return <Alert/>
    else
      return <App/>
  }

  if(orientation === "computer")
    return <App/>
}

export default useDefineContent