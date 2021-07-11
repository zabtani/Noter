import { useEffect } from 'react';
import classes from './App.module.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import TaskGenerator from './components/TaskGenerator/TaskGenerator';
import Lists from './components/Lists/Lists';
import { TasksProvider } from './store/TasksProvider';
const App = () => {
  const labelColors = [
    { hex: '#0000003b', colorName: 'Grey' },
    { hex: '#04f43f3b', colorName: 'Green' },
    { hex: '#f4041e3b', colorName: 'Red' },
    { hex: '#e804f43b', colorName: 'Pink' },
    { hex: '#ffeb003b', colorName: 'Yellow' },
    { hex: '#042df43b', colorName: 'Blue' },
  ];
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
          <TaskGenerator labelColors={labelColors} />
          <Lists />
        </main>
      </TasksProvider>
      <Footer />
    </div>
  );
};

export default App;
