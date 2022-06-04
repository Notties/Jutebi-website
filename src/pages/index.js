import React, {useState}from 'react'
import Develop from '../components/Develop'
import Commandsbot from '../components/Commandsbot'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
      setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <Commandsbot />
        <Develop/>
        <Footer/>
    </>
  )
}

export default Home