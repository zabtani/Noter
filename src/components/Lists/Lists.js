import List from './List';
import TasksContext from '../../store/tasks-context';
import { useContext, useState } from 'react';
const Lists = () => {
  const { tasks } = useContext(TasksContext);
  const { labels } = useContext(TasksContext);
  const [listViewState, setListViewState] = useState({
    isActiveShown: true,
    isCompletedShown: false,
  });
  const activeTasks = tasks.filter((task) => task.active === true);
  const completedTasks = tasks.filter((task) => task.active !== true);

  const showHandler = () => {
    setListViewState((state) => {
      return {
        isActiveShown: !state.isActiveShown,
        isCompletedShown: !state.isCompletedShown,
      };
    });
  };

  return (
    <>
      {listViewState.isActiveShown && (
        <List
          labels={labels}
          toggleIconOn={true}
          onShow={showHandler}
          tasks={activeTasks}
          title="Active"
        />
      )}
      {listViewState.isCompletedShown && (
        <List
          toggleIconOn={false}
          onShow={showHandler}
          tasks={completedTasks}
          title="Completed"
        />
      )}
    </>
  );
};

export default Lists;
