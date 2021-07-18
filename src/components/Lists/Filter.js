import classes from './Lists.module.css';
import Button from '../UI/Button';
import { useContext } from 'react';
import TasksContext from '../../store/tasks-context';

const Filter = (props) => {
  const { filter } = useContext(TasksContext);
  const optionFilterHandler = (optionId) => {
    filter.byLabel(optionId);
    filter.toggleMenu();
  };
  const sortButtons = props.isVisible && (
    <>
      <Button
        className={classes.actionButton}
        color="primary"
        onClick={filter.toggleMenu}
        text={
          filter.menuIsOpen
            ? 'back to all'
            : filter.isOn
            ? 'choose another label'
            : 'filter by colored label'
        }
      />
      {!filter.menuIsOpen && filter.isOn && (
        <Button
          className={classes.actionButton}
          color="secondary"
          onClick={filter.byLabel.bind(false)}
          text="cancel filter"
        />
      )}
    </>
  );

  const listfilterOptions = filter.menuIsOpen && (
    <ul className={classes.filterOptionsList}>
      <p>Please choose filter... </p>
      {filter.options.map((option) => (
        <button
          type="button"
          title={option.name}
          className={classes.filterOption}
          color={option.color}
          key={option.id}
          style={{
            backgroundImage: `linear-gradient(180deg, ${option.color} , transparent)`,
          }}
          onClick={optionFilterHandler.bind(null, option.id)}
        >
          {option.name}
        </button>
      ))}
    </ul>
  );

  return (
    <>
      {sortButtons}
      {listfilterOptions}
    </>
  );
};

export default Filter;
