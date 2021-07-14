import List from './List';
import TasksContext from '../../store/tasks-context';
import { useContext, useEffect, useRef, useState } from 'react';
const Lists = () => {
  const { tasks } = useContext(TasksContext);
  const { labels } = useContext(TasksContext);
  const listsRef = useRef();
  const [isMount, setIsMount] = useState(true);
  const [viewState, setViewState] = useState({
    active: true,
    completed: false,
  });
  const focusOnLists = () => {
    listsRef.current.scrollIntoView();
  };
  useEffect(() => {
    !isMount && focusOnLists();
    setViewState({ active: true, completed: false });
    return () => {
      isMount && setIsMount(false);
    };
  }, [tasks, isMount]);
  const activeTasks = tasks.filter((task) => task.active === true);
  const completedTasks = tasks.filter((task) => task.active !== true);

  const toggleViewHandler = () => {
    focusOnLists();
    setViewState((state) => {
      return {
        active: !state.active,
        completed: !state.completed,
      };
    });
  };

  return (
    <>
      <div ref={listsRef}></div>
      {viewState.active && (
        <List
          focus={focusOnLists}
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
          toggleIconOn={false}
          focus={focusOnLists}
          onShow={toggleViewHandler}
          tasks={completedTasks}
          title="Completed"
        />
      )}
    </>
  );
};

export default Lists;
