import { useContext, useState } from 'react';
import Modal from '../../UI/Modal';
import classes from './Task.module.css';
import TasksContext from '../../../store/tasks-context';

const TaskEditor = (props) => {
  const [changesState, setChangesState] = useState({ ...props.data });
  const [titleOnEdit, setTitleOnEdit] = useState(false);
  const [descriptionOnEdit, setDescriptionOnEdit] = useState(false);
  const { labels } = useContext(TasksContext);
  const inputChangeHandler = (e, prop) => {
    setChangesState((prevState) => {
      return {
        ...prevState,
        [prop]:
          e.target.value.trim() === '' && e.type === 'blur'
            ? props.data[prop]
            : e.target.value,
      };
    });
  };
  const labelChangeHandler = () => {
    let chosen;
    const idx = labels.indexOf(changesState.label) + 1;
    if (idx === labels.length) {
      chosen = labels[0];
    } else {
      chosen = labels[idx];
    }
    setChangesState((prevState) => {
      return { ...prevState, label: chosen };
    });
  };
  const changeTitleHandler = () => {
    setTitleOnEdit(true);
  };
  const changeDescriptionHandler = () => {
    setDescriptionOnEdit(true);
  };
  return (
    <Modal
      color="default"
      buttonText="Dont save"
      onClose={() => {
        props.onClose();
      }}
      onAction={() => {
        props.onAction(changesState);
        props.onClose();
      }}
    >
      <b>Click on anything to edit... </b>
      <ul>
        <li
          className={
            props.data.active
              ? classes.task
              : `${classes.task} ${classes.completed}`
          }
          style={{
            background: `linear-gradient(${changesState.label.color},rgb(253, 253, 253)`,
          }}
        >
          {titleOnEdit ? (
            <input
              onChange={(e) => {
                inputChangeHandler(e, 'name');
              }}
              onBlur={(e) => {
                inputChangeHandler(e, 'name');
              }}
              value={changesState.name}
              autoFocus
              type="text"
              className={classes.title}
            />
          ) : (
            <h2 onClick={changeTitleHandler} className={classes.title}>
              {props.data.name}
            </h2>
          )}
          {props.data.description && descriptionOnEdit ? (
            <input
              onChange={(e) => {
                inputChangeHandler(e, 'description');
              }}
              onBlur={(e) => {
                inputChangeHandler(e, 'description');
              }}
              value={changesState.description}
              autoFocus
              type="text"
              className={classes.description}
            />
          ) : (
            <p onClick={changeDescriptionHandler}>{props.data.description}</p>
          )}
          <div
            onClick={labelChangeHandler}
            className={classes.label}
            style={{ backgroundColor: changesState.label.color }}
          >
            #{changesState.label.name}
          </div>
        </li>
      </ul>
    </Modal>
  );
};

export default TaskEditor;
