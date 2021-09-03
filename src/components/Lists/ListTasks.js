import React from 'react';
import Task from './Task/Task';
import classes from './Lists.module.css';

const ListTasks = (props) => {
  const { tasks } = props;
  const v = tasks.map((task) => <Task key={task.id} data={task} />);
  return (
    <ul className={classes.tasksList}>
      {v.length > 0 ? v : 'Nothing here yet...'}
    </ul>
  );
};
export default ListTasks;
