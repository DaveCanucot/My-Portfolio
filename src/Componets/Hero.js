import React from 'react'
import Avatar from '../Images/Avatar.jpg';
import github from '../Images/github-brands.svg'
import facebook from '../Images/facebook-brands.svg'
import linkedin from '../Images/linkedin-brands.svg'
import {Link} from 'react-scroll'
import Typical from 'react-typical'
import ParticlesBackground from './ParticlesBackground'

function Hero() {
    return (

        <section className="Hero">
        <ParticlesBackground></ParticlesBackground>
        <div className="avatar">
            <img className="avatar-img" src={Avatar} alt=""/>
            <h1>Dave Canucot</h1>
            <span className="typescript">I'm a &nbsp;
            <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
                'Front-end Developer 💻' ,
                2000,
                'Web Application Developer 😎' ,
                2000,
                'Android Developer 🔥',
                2000
        ]}
        />
            </span>
            <div className="social">
                <a className="social-links" href="https://www.linkedin.com/in/dave-canucot-79117a1b4/" target="_blank">
                <img className="social-icons" src={linkedin} alt="linkedin-icon"/>
                </a>
                <a className="social-links" href="https://github.com/DaveCanucot" target="_blank">
                <img className="social-icons" src={github} alt="github-icon"/>
                </a>
                <a className="social-links" href="">
                <img className="social-icons" src={facebook} alt="facebook-icon"/>
                </a>
            </div>
            <div className="btn-contact">
                <p className="text">Hire Me</p>
            </div>
            <div className="scroll-down">
               <Link className="mouse-wrapper" to="About"
                                smooth={true}
                                duration={500}
                                 spy={true}
                                 exact='true'
                                 offset={-80}>
                    <span>Scroll Down</span>
                    <span className="mouse">
                        <span className="wheel"></span>
                    </span>
                </Link>
            </div>
        </div>
        </section>
    )
}

export default Hero
