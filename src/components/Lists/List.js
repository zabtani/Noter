import Card from '../UI/Card';
import Task from './Task/Task';
import classes from './Lists.module.css';
const List = (props) => {
  const tasks = props.tasks.map((task) => <Task key={task.id} data={task} />);
  return (
    <Card
      switchText={
        props.toggleIconOn ? 'change to completed' : 'change to active'
      }
      onShow={props.onShow}
      toggleIconOn={props.toggleIconOn}
      className={classes.listCard}
      active={props.active}
      title={props.title}
    >
      <div className={classes.tasksList}>
        {tasks.length > 0 ? tasks : 'Nothing here yet...'}
      </div>
    </Card>
  );
};

export default List;
