import classes from './Task.module.css';
import CheckIcon from '../../UI/Icons/CheckIcon';
import InfoIcon from '../../UI/Icons/InfoIcon';
import DeleteIcon from '../../UI/Icons/DeleteIcon';
import EditIcon from '../../UI/Icons/EditIcon';
import { useContext, useState } from 'react';
import TasksContext from '../../../store/tasks-context';
import Modal from '../../UI/Modal';
import TaskEditor from './TaskEditor';
const Task = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showTaskEditor, setShowTaskEditor] = useState(false);
  const tasksCtx = useContext(TasksContext);
  const toggleDescriptionHandler = () => {
    setShowDescription(!showDescription);
  };
  const showRemoveHandler = (id) => {
    setShowRemoveModal(true);
  };
  const toggleEditHandler = () => {
    setShowTaskEditor((prevState) => !prevState);
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
  const onEditActionHandler = (editedTask) => {
    tasksCtx.update(editedTask);
  };
  const topConIconsProps = { width: 22, height: 22 };
  return (
    <li
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
          Sure you want to remove
          <br />
          <span className={classes.modalTaskName}>{props.data.name}</span> ?
        </Modal>
      )}
      {showTaskEditor && (
        <TaskEditor
          onAction={onEditActionHandler}
          onClose={toggleEditHandler}
          {...props}
        />
      )}
      <div className={classes.topContainer}>
        <div className={classes.date}>{props.data.date}</div>
        <div className={classes.iconsCon}>
          <button type="button" onClick={toggleEditHandler}>
            <EditIcon className={classes.editButton} {...topConIconsProps} />
          </button>
          <button type="button" onClick={showRemoveHandler}>
            <DeleteIcon className={classes.delButton} {...topConIconsProps} />
          </button>
        </div>
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
            {showDescription ? 'Hide' : 'Info'}
            <div className={classes.icon}>
              <InfoIcon width={25} height={25} />
            </div>
          </button>
        )}
      </div>
    </li>
  );
};
export default Task;
