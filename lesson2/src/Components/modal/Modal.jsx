import React from 'react';
import classes from "./Modal.module.css";
import Button from "../button/Button";

const Modal = ({handleShow}) => {

    return (
        <div>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button onClick={handleShow} label={'x'}/>
                {/*{children}*/}
            </div>
        </div>
    );
};

export default Modal;