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

  return (
    <div className={classes.app}>
      <Header title="Noter" />
      <TasksProvider>
        <main>
          <TaskGenerator />
          <Lists />
        </main>
      </TasksProvider>
      <Footer />
    </div>
  );
};

export default App;
