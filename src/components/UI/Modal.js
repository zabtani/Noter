import classes from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  console.log(props);
  return (
    <div className={classes.modal}>
      <p className={classes.content}>{props.children}</p>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={props.onClick}
      >
        {props.buttonText}
      </Button>
    </div>
  );
};
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay buttonText={props.buttonText} onClick={props.onClose}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
