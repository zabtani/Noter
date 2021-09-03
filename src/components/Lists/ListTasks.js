import React from 'react';
import Task from './Task/Task';
import classes from './Lists.module.css';

const ListTasks = (props) => {
  const { tasks } = props;
  const listItemsTasks = tasks.map((task) => (
    <Task key={task.id} data={task} />
  ));
  return (
    <ul className={classes.tasksList}>
      {listItemsTasks.length > 0 ? listItemsTasks : 'Nothing here yet...'}
    </ul>
  );
};
export default ListTasks;
