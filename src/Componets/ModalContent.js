import React from 'react'
import { DivModa, ModalCont, Close } from './Sidebar/SidebarElements';

const ModalContent = ({ handler, open, selectedItem }) => {
    console.log(selectedItem?.platform);
    return (
        <DivModa isOpen={open}>
            <ModalCont>
                <Close onClick={handler}>&times;</Close>
                <img className="workthumbnail" src={selectedItem ? selectedItem.thumb : "https://via.placeholder.com/150.png"} alt="" />
                <p className="workname">{selectedItem ? selectedItem.name : "Title"}</p>
                {/* <p class="workplatform">{selectedItem ? selectedItem.platform.name : "Language uses"}</p> */}
                <p class="workDescription">{selectedItem ? selectedItem.discription : "Description"}</p>
                <a className="worklinkto" href={selectedItem ? selectedItem.link : "#"} target={selectedItem ? "_blank" : "#"}>Visit Site</a>
            </ModalCont>
        </DivModa>
    )
}

export default ModalContent
