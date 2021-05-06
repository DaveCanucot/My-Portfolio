import React from 'react'
import Cards from './Cards'
import card1 from '../Images/1.png'
import card2 from '../Images/2.png'
import card3 from '../Images/3.png'
import card4 from '../Images/4.png'
import card5 from '../Images/5.png'
import card6 from '../Images/6.png'

function Works() {
    return (
        <section id="works" className="works">
            <h1>Works</h1>
            <div className="wrapper">
            <Cards title='Mizu Clinic' image={card1} body='lorem'/>
            <Cards title='57 Tireworks' image={card2} body='lorem'/>
            <Cards title='Hachiro Method' image={card3} body='lorem'/>
            <Cards title='Terrace Sauna' image={card4} body='lorem'/>
            <Cards title='Osean Black' image={card5} body='lorem' link="osean.hipetest.com"/>
            <Cards title='Cows Crown' image={card6} body='lorem'/>
            </div>
        </section>
    )
}

export default Works
