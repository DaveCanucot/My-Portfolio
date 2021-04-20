import React from 'react'
import avatar from '../Images/Avatar.jpg'
import fire from '../Images/fire.svg'
import user from '../Images/user-friends.svg'
import award from '../Images/award.svg'
import coffee from '../Images/coffee.svg'

function About() {
    return (
        <section id="About" className="About-me" >
            <div className="Container">
                <h1>About Me</h1>
                <div className="spacer"></div>
                <div className="Container-fluid">
                    <div className="left">
                        <img className="hero" src={avatar} alt="Avatar" />
                    </div>
                    <div className="right">
                        <div className="right-container">
                            <div className="description">
                                <p>I am Dave Canucot, web developer
                                    from Cebu, Philippines.
                                    I have rich experience in web
                                    developing and customization, 
                                    I am also good at WordPress and Android.</p>
                                    <div className="dl-button">
                                        <a href="https://drive.google.com/file/d/1lreEBjh8NHxzLUB-ZyCFB-ogy8i_WsrF/view?usp=sharing" target="_blank">Download CV</a>
                                    </div>
                            </div>
                            <div className="middle"></div>
                            <div className="progress-skill">
                                <p>Front-End Development <span>95%</span></p>
                                <div class="progress">
                                    <span class="bar"></span>
                                </div>
                                <p>Web Application Development <span>80%</span></p>
                                <div class="progress">
                                    <span class="bar"></span>
                                </div>
                                <p>Android Development <span>50%</span></p>
                                <div class="progress">
                                    <span class="bar"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="achievements">
                    <div className="fire">
                        <img className="icon" src={fire} alt="fire"/>
                        <p className="number">20+
                        <span>Projects Completed</span></p>
                    </div>
                    <div className="fire">
                        <img className="icon" src={coffee} alt="fire"/>
                        <p className="number">100+
                        <span>Cup of Coffee</span></p>
                    </div>
                    <div className="fire">
                        <img className="icon" src={user} alt="fire"/>
                        <p className="number">6+
                        <span>Satisfied Customer</span></p>
                    </div>
                    <div className="fire">
                        <img className="icon" src={award} alt="fire"/>
                        <p className="number">1+
                        <span>Award Recieved</span></p>
                    </div>
                </div>
                <div className="spacer"></div>
            </div>
        </section>
    )
}

export default About
