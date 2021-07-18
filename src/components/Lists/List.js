import Card from '../UI/Card';
import Task from './Task/Task';
import classes from './Lists.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import TasksContext from '../../store/tasks-context';
import Filter from './Filter';
const List = () => {
  const { filter, chosenList, switchList, tasks } = useContext(TasksContext);
  const listsRef = useRef();
  const [isMounted, setIsMounted] = useState(false);
  const isActive = chosenList === 'active' ? true : false;
  const switchText = isActive ? 'change to completed' : 'change to active';
  const listTasks = tasks.map((task) => <Task key={task.id} data={task} />);

  useEffect(() => {
    isMounted ? listsRef.current.scrollIntoView() : setIsMounted(true);
  }, [listTasks.length, isMounted]);

  const onSwitchHandler = () => {
    switchList();
    filter.byLabel(false);
  };
  return (
    <>
      <div ref={listsRef}></div>
      <Card
        switchText={switchText}
        onSwitch={onSwitchHandler}
        toggleIconOn={isActive}
        title={chosenList}
        className={classes.listCard}
      >
        <Filter isVisible={listTasks.length > 0} />
        <div className={classes.tasksList}>
          {listTasks.length > 0 ? listTasks : 'Nothing here yet...'}
        </div>
      </Card>
    </>
  );
};

export default List;
