import React from 'react'


function index({title,image,body,link}) {
    return (
        <div className="card-container">
            <div class="card"><img src={image}/>
                <div class="info">
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <button><a href={link}>Read More</a></button>
                </div>
            </div>
        </div>
    )
}
export default index