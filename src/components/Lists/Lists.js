import List from './List';
import TasksContext from '../../store/tasks-context';
import { useContext, useState } from 'react';
const Lists = () => {
  const { tasks } = useContext(TasksContext);
  const [listViewState, setListViewState] = useState({
    isActiveExpanded: true,
    isCompletedExpanded: false,
  });
  const activeTasks = tasks.filter((task) => task.active === true);
  const completedTasks = tasks.filter((task) => task.active !== true);
  const expandHandler = () => {
    setListViewState((state) => {
      return {
        isActiveExpanded: !state.isActiveExpanded,
        isCompletedExpanded: !state.isCompletedExpanded,
      };
    });
  };

  return (
    <>
      <List
        onExpand={expandHandler}
        expanded={listViewState.isActiveExpanded}
        tasks={activeTasks}
        title="Active"
      />
      <List
        onExpand={expandHandler}
        expanded={listViewState.isCompletedExpanded}
        tasks={completedTasks}
        title="Completed"
      />
    </>
  );
};

export default Lists;
