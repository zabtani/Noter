import { useContext, useReducer } from 'react';
import TaskForm from './TaskForm';
import LabelForm from './LabelForm';
import Card from '../UI/Card';
import TasksContext from '../../store/tasks-context';
import { randId } from '../../store/tasks-helper';
import classes from './TaskGenerator.module.css';
import Modal from '../UI/Modal';

const defaultGenState = {
  labels: [{ id: 'def', name: 'General', color: '#0000003b' }],
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
    case 'NEW_LABEL':
      const newLabel = action.value;
      const updatedLabels = [...state.labels, newLabel];
      return {
        ...state,
        lastCreatedLabel: newLabel,
        labels: updatedLabels,
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
  const [genState, dispatchGenAction] = useReducer(genReducer, defaultGenState);
  const tasksCtx = useContext(TasksContext);
  const onAddNewTaskHandler = (task) => {
    tasksCtx.add({ ...task, id: randId() });
  };
  const onAddNewLabelHandler = (newLabel) => {
    const updatedNewLabel = { ...newLabel, id: randId() };
    dispatchGenAction({ type: 'NEW_LABEL', value: updatedNewLabel });
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
          labels={genState.labels}
        />
      )}
      {!genState.mainFormView && (
        <LabelForm
          onError={onErroHandler}
          labelColors={props.labelColors}
          onAddNewLabel={onAddNewLabelHandler}
          toggleView={switchToTaskFormHandler}
        />
      )}
    </Card>
  );
};

export default TaskGenerator;
