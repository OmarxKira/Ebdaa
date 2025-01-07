import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Details from '../components/Details'
import Ourworks from '../components/Ourworks'



const home = () => {
  return (
    <div>
        <HeroSection/>
        <Details/>
        <Services/>
        <Ourworks/>
    </div>
  )
}

export default home