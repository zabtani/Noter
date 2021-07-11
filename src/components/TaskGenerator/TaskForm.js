import classes from './TaskGenerator.module.css';
import Input from '../UI/Input';
import TasksContext from '../../store/tasks-context';
import { useRef, useState, useContext } from 'react';
import OptionButton from './OptionButton';
import FormButton from './FormButton';

const TaskForm = (props) => {
  const [chosenLabel, setChosenLabel] = useState(props.chosenLabel);
  const nameInput = useRef();
  const descriptionInput = useRef();
  const tasksCtx = useContext(TasksContext);

  const addNewTaskHandler = (event) => {
    event.preventDefault();
    const name = nameInput.current.value;
    const description = descriptionInput.current.value;
    if (name.trim('').length < 3) {
      props.onError('note name is too short');
      return;
    }

    props.onAddNewTask({
      name: name,
      description: description,
      label: chosenLabel,
    });
    nameInput.current.value = '';
    descriptionInput.current.value = '';
  };
  const chooseLabelHandler = (label) => {
    setChosenLabel(label);
  };
  const toggleView = () => {
    props.toggleView({
      name: nameInput.current.value,
      description: descriptionInput.current.value,
    });
  };

  const deleteLabelHandler = (labelId) => {
    setChosenLabel(props.chosenLabel);
    tasksCtx.deleteLabel(labelId);
  };

  const labels = props.labels.map((label) => {
    const isChosen = label.id === chosenLabel.id ? true : false;
    return (
      <OptionButton
        deleteOption={
          label.id === 'def' ? false : deleteLabelHandler.bind(null, label.id)
        }
        chosen={isChosen}
        key={label.id}
        title={label.name}
        color={label.color}
        onClick={chooseLabelHandler.bind(null, label)}
      />
    );
  });
  return (
    <>
      <form autoComplete="off" onSubmit={addNewTaskHandler}>
        <p>
          Add name and description to the note,
          <br />
          then choose a label or create one.
        </p>

        <Input
          label="Note name"
          id="name"
          ref={nameInput}
          defaultValue={props.lastInputsData.name}
        />
        <Input
          defaultValue={props.lastInputsData.description}
          id="description"
          label="Description"
          multiline={true}
          row={4}
          ref={descriptionInput}
        />
        <FormButton color="primary" type="submit" text="Add Note" />
        <FormButton type="button" onClick={toggleView} text="Add new label" />
        <ul className={classes.labelsList}>{labels}</ul>
      </form>
    </>
  );
};

export default TaskForm;
