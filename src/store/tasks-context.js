import React from 'react';

export const TasksContext = React.createContext({
  tasks: [],
  add: () => {},
  move: (id) => {},
  remove: () => {},
});

export default TasksContext;
