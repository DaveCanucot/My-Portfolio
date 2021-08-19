import React, {useState, style} from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import {mainData} from '../data'

function Works() {

    const [countCard, setCountCard] = useState(2);

    const Btncontainer = styled.div`
    display:${props => props.display};
    `;

    return (
        <section id="works" className="works">
            <h1>Works</h1>
            <div className="wrapper">
                {
                    mainData.map((e, index)=>{
                        return(
                            index <= countCard && <Cards {...e}/>
                        )
                    })
                }
            </div>
            <Btncontainer display={countCard === 2 ? 'none' : 'block'} >
                <button onClick={()=>mainData.length - countCard=== 3 ? setCountCard(countCard - 2): setCountCard(countCard - 3)}>See Less</button>
            </Btncontainer>
            <Btncontainer display={countCard === mainData.length ? 'none' : 'block'} >
                <button onClick={()=>mainData.length - countCard === 1 ? setCountCard(countCard + 2): setCountCard(countCard + 3 )}>Load More</button>
            </Btncontainer>
        </section>
    )
}

export default Works
