import React from 'react'
import front from '../Images/service-1.svg'
import web from '../Images/web.svg'

function Services() {
    return (
        <section id="Services" className="Services">
            <div className="Container">
                <h1>Services</h1>
                <div className="cards">
                    <div className="box">
                        <img src={front} alt=""/>
                        <h3>Front-End Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, 
                        qui nemo.</p>
                    </div>
                    <div className="box2">
                        <img src={web} alt=""/>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, 
                        qui nemo.</p>
                    </div>
                    <div className="box3">
                        <img src={front} alt=""/>
                        <h3>Android Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, 
                        qui nemo.</p>
                    </div>
                </div>
                <h3 className="linkto">Looking for a custom job?<a href="/">Click Here</a> to contact me  👋 </h3>
            </div>
            <div className="spacer" >
            </div>
        </section>
    )
}

export default Services
