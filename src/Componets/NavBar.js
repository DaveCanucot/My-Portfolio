import React from 'react'
import {FaBars} from 'react-icons/fa'
import {NavLink} from 'react-router-dom';
import {MobileIcon} from './NavBarElements'
import {animateScroll as scroll, Link} from 'react-scroll'



function NavBar({toggle}) {

    const toggleHome =() => {
        scroll.scrollToTop();
    }
    return (
        <div className="Navbar">
            <nav>
                <div className="Logo" onClick={toggleHome}>
                    DAVE.
                </div>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <div className="nav-items">
                 <li className="items">
                    <Link to="About" 
                     smooth={true}
                     duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      activeClassName="active">About</Link>
                 </li>
                 <li className="items">
                 <Link to="Services" 
                     smooth={true}
                     duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      activeClassName="active">Services</Link>
                 </li>
                 <li className="items">
                 <Link to="Experience" 
                     smooth={true}
                     duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      activeClassName="active">Experience</Link>
                 </li>
                 <li className="items">
                 <Link to="works" 
                     smooth={true}
                     duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      activeClassName="active">Works</Link>
                 </li>
                 <li className="items">
                     <NavLink to="/Blog" exact activeClassName="active">Blog</NavLink>
                 </li>
                 <li className="items">
                     <NavLink to="Contact" exact activeClassName="active">Contact</NavLink>
                 </li>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
