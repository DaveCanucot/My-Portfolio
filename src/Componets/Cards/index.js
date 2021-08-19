import React, { useState} from 'react'
import { useHistory } from 'react-router-dom';
import Modal from '../Modal';
import ModalContent from '../ModalContent';

function Index(props) {

    console.log(props);
    const [openModal, setOpenModal] = useState(false);


    const toggleModal = () =>{
        setOpenModal(!openModal);
    }
    return (
        <>
        <ModalContent handler={toggleModal} open={openModal} selectedItem={props}/>
        <div className="card-container" key={props.id}>
            <figure className="image-block">
                <img src={props.thumb} alt="" />
                <figcaption>
                    <h3>
                        {props.name}
                    </h3>
                    <p>{props.discription}</p>
                    <Modal toggle={()=>toggleModal(props)}/>
                </figcaption>
            </figure>
    </div>
        </>

    )
}
export default Index