import React, { useEffect, useReducer } from 'react';
import TasksContext from './tasks-context';
import { creationDate } from './tasks-helper';
const savedTasks = localStorage.getItem('tasks');
const savedLabels = localStorage.getItem('labels');
const defaultTasksState = {
  tasks: savedTasks ? JSON.parse(savedTasks) : [],
  labels: savedLabels
    ? JSON.parse(savedLabels)
    : [{ id: 'def', name: 'General', color: '#0000003b' }],
};
function tasksReducer(state, action) {
  let updatedTasks = [...state.tasks];
  switch (action.type) {
    case 'ADDLABEL':
      const label = action.value;
      return {
        ...state,
        labels: [...state.labels, label],
      };
    case 'DELETELABEL':
      const deletedLabelId = action.value;
      const updatedLabels = state.labels.filter(
        (label) => label.id !== deletedLabelId
      );
      return {
        ...state,
        labels: [...updatedLabels],
      };
    case 'ADD':
      const task = action.value;

      return {
        ...state,
        tasks: [
          { ...task, active: true, date: creationDate() },
          ...updatedTasks,
        ],
      };
    case 'MOVE':
      const movedTaskId = action.value;
      const movedTaskIdx = state.tasks.findIndex(
        (task) => task.id === movedTaskId
      );
      const movedTask = updatedTasks[movedTaskIdx];
      const updatedTask = { ...movedTask, active: !movedTask.active };
      return {
        ...state,
        tasks: [
          updatedTask,
          ...updatedTasks.filter((task) => task.id !== movedTaskId),
        ],
      };

    case 'REMOVE':
      const deletedTaskId = action.value;
      updatedTasks = updatedTasks.filter((task) => task.id !== deletedTaskId);
      return {
        ...state,
        tasks: [...updatedTasks],
      };
    default:
      return defaultTasksState;
  }
}
export const TasksProvider = (props) => {
  const [tasksState, dispatchTasksAction] = useReducer(
    tasksReducer,
    defaultTasksState
  );
  const { tasks } = tasksState;
  const { labels } = tasksState;

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('labels', JSON.stringify(labels));
  }, [tasks, labels]);
  const addLabelHandler = (label) => {
    dispatchTasksAction({ type: 'ADDLABEL', value: label });
  };
  const addHandler = (task) => {
    dispatchTasksAction({ type: 'ADD', value: task });
  };
  const moveHandler = (id) => {
    dispatchTasksAction({ type: 'MOVE', value: id });
  };
  const removeHandler = (id) => {
    dispatchTasksAction({ type: 'REMOVE', value: id });
  };
  const deleteLabelHandler = (id) => {
    dispatchTasksAction({ type: 'DELETELABEL', value: id });
  };

  const tasksContext = {
    labels: labels,
    tasks: tasks,
    addLabel: addLabelHandler,
    deleteLabel: deleteLabelHandler,
    add: addHandler,
    move: moveHandler,
    remove: removeHandler,
  };

  return (
    <TasksContext.Provider value={tasksContext}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
