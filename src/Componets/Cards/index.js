import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { mainData } from '../../data';
import Modal from '../Modal';
import ModalContent from '../ModalContent';

function Index() {

    
    const [openModal, setOpenModal] = useState(false);

    const [data, setData] = useState(null);

    const toggleModal = (item) =>{
        setOpenModal(!openModal);
        setData(item)
    }
    const listItem = mainData.map((item) => 
        <div className="card-container" key={item.id}>
            <figure className="image-block">
                <img src={item.thumb} alt="" />
                <figcaption>
                    <h3>
                        {item.name}
                    </h3>
                    <p>{item.discription}</p>
                    <Modal toggle={()=>toggleModal(item)}/>
                </figcaption>
            </figure>
    </div>
    )
    return (
        <>
        {listItem}
        <ModalContent handler={toggleModal} open={openModal} selectedItem={data}/>
        </>

    )
}
export default Index