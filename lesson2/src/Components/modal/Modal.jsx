import React from 'react';
import classes from "./Modal.module.css";

const Modal = ({children, handleShow}) => {

    return (
        <div>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <button onClick={handleShow}>x</button>

                {children}
            </div>
        </div>
    );
};

export default Modal;