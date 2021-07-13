import Card from '../UI/Card';
import Task from './Task/Task';
import classes from './Lists.module.css';
import Button from '@material-ui/core/Button';
import { useContext, useEffect, useState } from 'react';
import TasksContext from '../../store/tasks-context';
const List = (props) => {
  const [filterOptions, setfilterOptions] = useState(false);
  const tasksCtx = useContext(TasksContext);
  const tasks = props.tasks.map((task) => <Task key={task.id} data={task} />);
  const listLabels = props.tasks
    .map((task) => task.label)
    .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
  useEffect(() => {
    setfilterOptions(false);
  }, [tasksCtx.tasks]);
  const showFilterLabelsOptions = () => {
    setfilterOptions(listLabels);
  };
  const closeFilterLabelsOptions = () => {
    setfilterOptions(false);
  };
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
      {tasks.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={
            !filterOptions ? showFilterLabelsOptions : closeFilterLabelsOptions
          }
        >
          {filterOptions ? 'back to all' : 'Sort by colored label'}
        </Button>
      )}
      {filterOptions && (
        <ul className={classes.filterOptionsList}>
          {filterOptions.map((option) => (
            <button
              type="button"
              title={option.name}
              className={classes.filterOption}
              color={option.color}
              key={option.id}
              style={{
                backgroundImage: `linear-gradient(180deg, ${option.color} , transparent)`,
              }}
            >
              {option.name}
            </button>
          ))}
        </ul>
      )}

      {!filterOptions && (
        <div className={classes.tasksList}>
          {tasks.length > 0 ? tasks : 'Nothing here yet...'}
        </div>
      )}
    </Card>
  );
};

export default List;
