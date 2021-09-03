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
      <div className={classes.content}>{props.children}</div>
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
            color={props.color}
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
          color={props.color ? props.color : 'secondary'}
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
