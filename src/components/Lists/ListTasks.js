import React from 'react';
import Task from './Task/Task';
import classes from './Lists.module.css';
function areEqual(prevProps, nextProps) {
  return prevProps.tasks.length === nextProps.tasks.length;
}
const ListTasks = (props) => {
  const { tasks } = props;
  const v = tasks.map((task) => <Task key={task.id} data={task} />);
  console.log('tasks ul yo');
  return (
    <ul className={classes.tasksList}>
      {v.length > 0 ? v : 'Nothing here yet...'}
    </ul>
  );
};
//in case of action that dosent change the tasks.length, memoize this component. (check diffs in areEqual func)
export default React.memo(ListTasks, areEqual);
