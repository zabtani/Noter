import Input from '../UI/Input';
import classes from './TaskGenerator.module.css';
import FormButton from './FormButton';
import { useRef, useState } from 'react';
import OptionButton from './OptionButton';

const TaskForm = (props) => {
  const [chosenColor, setChosenColor] = useState(props.labelColors[0]);
  const labelNameInput = useRef();
  const addNewLabelHandler = (event) => {
    event.preventDefault();
    const labelName = labelNameInput.current.value;
    if (labelName.length < 3) {
      props.onError('label is too short!');
      return;
    }
    props.onAddNewLabel({
      name: labelName,
      color: chosenColor,
    });
    props.toggleView();
  };
  const chooseColorHandler = (color) => {
    setChosenColor(color);
  };
  const colorOptions = props.labelColors.map((color) => {
    const isChosen = chosenColor === color;
    return (
      <OptionButton
        chosen={isChosen}
        key={color.replace('#', '')}
        color={color}
        title={color}
        type="button"
        value={color}
        label="Description"
        onClick={chooseColorHandler.bind(null, color)}
      />
    );
  });
  return (
    <>
      <form autoComplete="off" onSubmit={addNewLabelHandler}>
        <Input label="Label name" ref={labelNameInput} />
        <ul className={classes.labelsList}>{colorOptions}</ul>
        <FormButton color="primary" type="submit" text="Add Label" />
        <FormButton type="button" text="Go back" onClick={props.toggleView} />
      </form>
    </>
  );
};

export default TaskForm;
