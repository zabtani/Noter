import { useContext, useReducer } from 'react';
import TaskForm from './TaskForm';
import LabelForm from './LabelForm';
import Card from '../UI/Card';
import TasksContext from '../../store/tasks-context';
import { randId } from '../../store/tasks-helper';
import classes from './TaskGenerator.module.css';
import Modal from '../UI/Modal';

const defaultGenState = {
  mainFormView: true,
  currentInputsData: { name: '', description: '' },
  lastCreatedLabel: { id: 'def', name: 'General', color: '#0000003b' },
  formError: false,
};
const genReducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_TO_TASK_FORM':
      return {
        ...state,
        mainFormView: true,
      };

    case 'SWITCH_TO_LABEL_FORM':
      return {
        ...state,
        mainFormView: false,
        currentInputsData: action.value,
      };

    case 'FORM_ERROR':
      const error = action.value;
      return {
        ...state,
        formError: error,
      };

    default:
      return defaultGenState;
  }
};
const TaskGenerator = (props) => {
  const labelColors = [
    { hex: '#0000003b', colorName: 'Grey' },
    { hex: '#04f43f3b', colorName: 'Green' },
    { hex: '#f4041e3b', colorName: 'Red' },
    { hex: '#e804f43b', colorName: 'Pink' },
    { hex: '#ffeb003b', colorName: 'Yellow' },
    { hex: '#042df43b', colorName: 'Blue' },
  ];
  const [genState, dispatchGenAction] = useReducer(genReducer, defaultGenState);
  const tasksCtx = useContext(TasksContext);
  console.log(tasksCtx);
  const onAddNewTaskHandler = (task) => {
    tasksCtx.add({ ...task, id: randId() });
  };
  const onAddNewLabelHandler = (newLabel) => {
    const updatedNewLabel = { ...newLabel, id: randId() };
    tasksCtx.addLabel(updatedNewLabel);
  };
  const switchToTaskFormHandler = () => {
    dispatchGenAction({ type: 'SWITCH_TO_TASK_FORM' });
  };
  const switchToLabelFormHandler = (inputsData) => {
    dispatchGenAction({ type: 'SWITCH_TO_LABEL_FORM', value: inputsData });
  };
  const onErroHandler = (error) => {
    dispatchGenAction({ type: 'FORM_ERROR', value: error });
  };
  const closeErrorModalHandler = () => {
    dispatchGenAction({ type: 'FORM_ERROR', value: false });
  };
  return (
    <Card className={classes.gen} title="New Note">
      {genState.formError && (
        <Modal buttonText="Back To App" onClose={closeErrorModalHandler}>
          {genState.formError}
        </Modal>
      )}

      {genState.mainFormView && (
        <TaskForm
          onError={onErroHandler}
          lastInputsData={
            genState.currentInputsData && genState.currentInputsData
          }
          chosenLabel={genState.lastCreatedLabel}
          onAddNewTask={onAddNewTaskHandler}
          toggleView={switchToLabelFormHandler}
          labels={tasksCtx.labels}
        />
      )}
      {!genState.mainFormView && (
        <LabelForm
          onError={onErroHandler}
          labelColors={labelColors}
          onAddNewLabel={onAddNewLabelHandler}
          toggleView={switchToTaskFormHandler}
        />
      )}
    </Card>
  );
};

export default TaskGenerator;
