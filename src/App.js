import classes from './App.module.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import TaskGenerator from './components/TaskGenerator/TaskGenerator';
import List from './components/Lists/List';
import { TasksProvider } from './store/TasksProvider';
import IntroModal from './components/IntroModal/IntroModal';
const App = () => {
  const labelColors = [
    { hex: '#0000003b', colorName: 'Grey' },
    { hex: '#04f43f3b', colorName: 'Green' },
    { hex: '#f4041e3b', colorName: 'Red' },
    { hex: '#e804f43b', colorName: 'Pink' },
    { hex: '#ffeb003b', colorName: 'Yellow' },
    { hex: '#042df43b', colorName: 'Blue' },
  ];

  return (
    <div className={classes.app}>
      <Header title="Noter" />
      <TasksProvider>
        <IntroModal />
        <main>
          <TaskGenerator labelColors={labelColors} />
          <List />
        </main>
        <Footer />
      </TasksProvider>
    </div>
  );
};

export default App;
