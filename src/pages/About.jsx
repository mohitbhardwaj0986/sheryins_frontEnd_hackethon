import React, { useEffect } from 'react'
import AboutSectionone from '../components/AboutSectionone'
import AboutSectionTwo from '../components/AboutSectionTwo'
import AboutSectionTree from '../components/AboutSectionTree'

function About() {
   useEffect(() => {
   document.title = "Our Story | Chamberlain Coffee";
  }, []);
  return (
    <>
     <AboutSectionone/>
     <AboutSectionTree/>   
     <AboutSectionTwo/>
    </>
  )
}

export default About