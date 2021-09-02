import Card from '../UI/Card';
import classes from './Lists.module.css';
import { useMemo, useContext, useEffect, useRef, useState } from 'react';
import TasksContext from '../../store/tasks-context';
import Filter from './Filter';
import ListTasks from './ListTasks';
const List = () => {
  const { filter, chosenList, switchList, tasks } = useContext(TasksContext);
  const listsRef = useRef();
  const isActive = chosenList === 'active' ? true : false;
  const switchText = isActive ? 'change to completed' : 'change to active';
  const [t, setT] = useState(tasks);
  useEffect(() => {
    const listRe = listsRef;
    return () => {
      listRe.current.scrollIntoView();
    };
  }, [tasks.length]);
  useEffect(() => {
    setT(tasks);
  }, [tasks]);

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
        <Filter isVisible={tasks.length > 0} />
        <ListTasks tasks={useMemo(() => t, [t])} />
      </Card>
    </>
  );
};

export default List;
