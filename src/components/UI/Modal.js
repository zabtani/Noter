import classes from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <p className={classes.content}>{props.children}</p>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={props.onClose}
        >
          {props.buttonText}
        </Button>

        {props.onAction && (
          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={props.onAction}
          >
            approve
          </Button>
        )}
      </div>
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
        <ModalOverlay
          buttonText={props.buttonText}
          onClose={props.onClose}
          onAction={props.onAction}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
