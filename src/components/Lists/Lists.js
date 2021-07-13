import List from './List';
import TasksContext from '../../store/tasks-context';
import { useContext, useEffect, useRef, useState } from 'react';
const Lists = () => {
  const { tasks } = useContext(TasksContext);
  const { labels } = useContext(TasksContext);
  const [viewState, setViewState] = useState({
    active: true,
    completed: false,
  });
  useEffect(() => {
    setViewState({ active: true, completed: false });
  }, [tasks]);

  const activeTasks = tasks.filter((task) => task.active === true);
  const completedTasks = tasks.filter((task) => task.active !== true);

  const toggleViewHandler = () => {
    setViewState((state) => {
      return {
        active: !state.active,
        completed: !state.completed,
      };
    });
  };

  return (
    <>
      {viewState.active && (
        <List
          main={true}
          labels={labels}
          toggleIconOn={true}
          onShow={toggleViewHandler}
          tasks={activeTasks}
          title="Active"
        />
      )}
      {viewState.completed && (
        <List
          main={false}
          toggleIconOn={false}
          onShow={toggleViewHandler}
          tasks={completedTasks}
          title="Completed"
        />
      )}
    </>
  );
};

export default Lists;
