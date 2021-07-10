import { useEffect } from 'react';
import classes from './App.module.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import TaskGenerator from './components/TaskGenerator/TaskGenerator';
import Lists from './components/Lists/Lists';
import { TasksProvider } from './store/TasksProvider';
const App = () => {
  useEffect(() => {
    const saveToLocalStorage = () => {
      localStorage.setItem('dodo', 'drerei');
    };
    window.addEventListener('beforeunload', saveToLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', saveToLocalStorage);
    };
  }, []);
  const labelColors = [
    '#0000003b',
    '#04f43f3b',
    '#f4041e3b',
    '#e804f43b',
    '#ffeb003b',
    '#042df43b',
  ];
  return (
    <div className={classes.app}>
      <Header title="Noter" />
      <TasksProvider>
        <main>
          <TaskGenerator labelColors={labelColors} />
          <Lists />
        </main>
      </TasksProvider>
      <Footer />
    </div>
  );
};

export default App;
