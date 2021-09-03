import classes from './Lists.module.css';
import Button from '../UI/Button';

const Filter = (props) => {
  const optionFilterHandler = (optionId) => {
    props.onFilter(optionId);
  };
  const sortButtons = (
    <>
      <Button
        className={classes.actionButton}
        color="primary"
        onClick={() => {
          props.onToggleMenu();
        }}
        text={
          props.menuIsOpen
            ? 'Go back'
            : props.isOn
            ? 'Change Filter'
            : 'Filter Options'
        }
      />
      {props.isOn && !props.menuIsOpen && (
        <Button
          className={classes.actionButton}
          color="secondary"
          onClick={() => {
            props.onCancel();
          }}
          text="Cancel Filter"
        />
      )}
    </>
  );
  const options = (
    <ul className={classes.filterOptionsList}>
      <p>Please choose filter... </p>
      {props.options.map((option) => (
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
      {props.menuIsOpen && options}
    </>
  );
};

export default Filter;
