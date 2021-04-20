import React, {useState} from 'react'
import NavBar from '../Componets/NavBar'
import Sidebar from '../Componets/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle}/>
        </>
    )
}

export default Home
