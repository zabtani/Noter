import classes from '../Layout/Footer.module.css';
import TasksContext from '../../store/tasks-context';
import { useContext } from 'react';
const Footer = () => {
  const { allTasks } = useContext(TasksContext);

  return (
    <>
      <footer className={classes.footer}>
        <p>{`${allTasks.length} NOTES TOTAL`}</p>
      </footer>
    </>
  );
};

export default Footer;
