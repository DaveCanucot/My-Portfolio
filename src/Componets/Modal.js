import React, { useState } from 'react'

const Modal = ({ toggle }) => {
    return (
        <>
            <button onClick={toggle}>
                Read More
            </button>
        </>
    )
}

export default Modal
