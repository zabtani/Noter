import Card from '../UI/Card';
import classes from './Lists.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import TasksContext from '../../store/tasks-context';
import Filter from './Filter';
import ListTasks from './ListTasks';
const initialFilterState = {
  filterMenuIsOpen: false,
  filterIsOn: false,
};
const List = () => {
  const { chosenList, switchList, tasks } = useContext(TasksContext);
  const [currentTasks, setCurrentTasks] = useState(tasks);
  const [filterState, setFilterState] = useState(initialFilterState);
  const listsRef = useRef();
  const isActive = chosenList === 'active' ? true : false;
  const switchText = isActive ? 'change to completed' : 'change to active';
  const listTitle = `${
    chosenList[0].toUpperCase() + chosenList.slice(1, chosenList.length)
  } Notes (${tasks.length})`;
  const listLabels = tasks
    .map((task) => task.label)
    .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
  const filterControlsShown = listLabels.length > 1;
  useEffect(() => {
    setFilterState(initialFilterState);
    setCurrentTasks(tasks);
    const ref = listsRef;
    return () => {
      ref.current.scrollIntoView();
    };
  }, [tasks]);
  const filterHandler = (option) => {
    toggleFilterMenuHandler();
    const filteredTasks = tasks.filter((task) => task.label.id === option);
    setCurrentTasks(filteredTasks);
    changeFilterStatus(true);
  };
  const onSwitchHandler = () => {
    if (filterState.filterIsOn) changeFilterStatus(false);
    if (filterState.filterMenuIsOpen) toggleFilterMenuHandler();
    switchList();
  };
  const cancelFilterHandler = () => {
    changeFilterStatus(false);
    setCurrentTasks(tasks);
  };
  const changeFilterStatus = (status) => {
    setFilterState((prevState) => {
      return {
        ...prevState,
        filterIsOn: status,
      };
    });
  };
  const toggleFilterMenuHandler = () => {
    setFilterState((prevState) => {
      return {
        ...prevState,
        filterMenuIsOpen: !prevState.filterMenuIsOpen,
      };
    });
  };
  return (
    <>
      <div ref={listsRef}></div>
      <Card
        switchText={switchText}
        onSwitch={onSwitchHandler}
        toggleIconOn={isActive}
        title={listTitle}
        className={classes.listCard}
      >
        {filterControlsShown && (
          <Filter
            isOn={filterState.filterIsOn}
            onToggleMenu={toggleFilterMenuHandler}
            onFilter={filterHandler}
            onCancel={cancelFilterHandler}
            menuIsOpen={filterState.filterMenuIsOpen}
            options={listLabels}
          />
        )}
        {!filterState.filterMenuIsOpen && <ListTasks tasks={currentTasks} />}
      </Card>
    </>
  );
};

export default List;
