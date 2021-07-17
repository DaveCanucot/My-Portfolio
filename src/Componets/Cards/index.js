import React from 'react'
import { mainData } from '../../data';

function index() {
    console.log(mainData);
    const listItem = mainData.map((item) => 
        <div className="card-container" key={item.id}>
        <div class="card"><img src={item.thumb}/>
            <div class="info">
                <h2>{item.name}</h2>
                <p>{item.discription}</p>
                <button><a href={item.link} target="_blank">Read More</a></button>
            </div>
        </div>
    </div>
    )
    return (
        <>
        {listItem}
        </>
    )
}
export default index