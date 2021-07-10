import Card from '../UI/Card';
import Task from './Task/Task';
import classes from './Lists.module.css';
const List = (props) => {
  const tasks = props.tasks.map((task) => <Task key={task.id} data={task} />);
  return (
    <Card
      onExpand={props.onExpand}
      className={props.expanded && classes.expanded}
      expanded={props.expanded}
      title={props.title}
    >
      <div className={classes.tasksList}>
        {tasks.length > 0 ? tasks : 'List is empty.'}
      </div>
    </Card>
  );
};

export default List;
