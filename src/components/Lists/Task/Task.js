import classes from './Task.module.css';
import CheckIcon from './CheckIcon';
import InfoIcon from './InfoIcon';
import DeleteIcon from './DeleteIcon';
import { useContext, useState } from 'react';
import TasksContext from '../../../store/tasks-context';
import Modal from '../../UI/Modal';
const Task = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const tasksCtx = useContext(TasksContext);
  const toggleDescriptionHandler = () => {
    setShowDescription(!showDescription);
  };
  const showRemoveHandler = (id) => {
    setShowRemoveModal(true);
  };
  const removeHandler = (id) => {
    tasksCtx.remove(id);
  };
  const moveHandler = (id) => {
    tasksCtx.move(id);
  };
  const closeRemoveModalHandler = () => {
    setShowRemoveModal(false);
  };
  return (
    <div
      className={
        props.data.active
          ? classes.task
          : `${classes.task} ${classes.completed}`
      }
      style={{
        background: `linear-gradient(${props.data.label.color},rgb(253, 253, 253)`,
      }}
    >
      {showRemoveModal && (
        <Modal
          buttonText="Dont delete"
          onClose={closeRemoveModalHandler}
          onAction={removeHandler.bind(null, props.data.id)}
        >
          are you sure?
        </Modal>
      )}
      <div className={classes.topContainer}>
        <div className={classes.date}>{props.data.date}</div>
        <button type="button" onClick={showRemoveHandler}>
          <DeleteIcon className={classes.deleteButton} width={19} height={19} />
        </button>
      </div>
      <h2 className={classes.title}>{props.data.name}</h2>
      {props.data.description && showDescription && (
        <p>{props.data.description}</p>
      )}
      <div
        className={classes.label}
        style={{ backgroundColor: props.data.label.color }}
      >
        #{props.data.label.name}
      </div>
      <div className={classes.buttonsContainer}>
        <button type="button" onClick={moveHandler.bind(null, props.data.id)}>
          {props.data.active ? 'Complete' : 'Activate'}
          <div className={classes.icon}>
            <CheckIcon width={25} height={25} />
          </div>
        </button>
        {props.data.description && (
          <button type="button" onClick={toggleDescriptionHandler}>
            {showDescription ? 'Hide paragraph' : 'Info'}
            <div className={classes.icon}>
              <InfoIcon width={25} height={25} />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
export default Task;
