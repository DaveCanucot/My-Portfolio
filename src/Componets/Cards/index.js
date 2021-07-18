import React, { useState } from 'react'
import { mainData } from '../../data';

function Index() {

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState(null);

    const toggleModal = () =>{
        setOpenModal(!openModal);
    }

    const Modal = (modalHandler) => {
        return(
            <div id="ex1" className="dave">
                <button onClick={modalHandler}> closeme </button>
            </div> 
        )
    }

    const listItem = mainData.map((item) => 
        <div className="card-container" key={item.id}>
            <figure className="image-block">
                <img src={item.thumb} alt="" />
                <figcaption>
                    <h3>
                        {item.name}
                    </h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <button onClick={toggleModal }>
                    More Info
                    </button>
                </figcaption>
            </figure>
    </div>
    )
    return (
        <>
        {listItem}
        </>

    )
}
export default Index