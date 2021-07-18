import React, {useState} from 'react'
import NavBar from '../Componets/NavBar'
import Sidebar from '../Componets/Sidebar'
import Hero from '../Componets/Hero'
import About from '../Componets/About';
import Services from '../Componets/Services'
import Experience from '../Componets/Experience'
import Works from '../Componets/Works'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle}/>
            <Hero/>
            <About/>
            <Services/>
            <Experience />
            <Works/>
        </>
    )
}

export default Home
