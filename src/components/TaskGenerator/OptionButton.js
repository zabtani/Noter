import classes from './TaskGenerator.module.css';
import LabelDeleteIcon from './LabelDeleteIcon';
const OptionButton = (props) => {
  return (
    <li
      className={`${classes.option} ${props.chosen && classes.chosen} ${
        !props.deleteOption && classes.default
      }`}
    >
      {props.deleteOption && props.chosen && (
        <button
          type="button"
          onClick={props.deleteOption}
          className={classes.delButton}
        >
          <LabelDeleteIcon
            className={classes.icon}
            fillColor={props.color}
            width={24}
            height={24}
          />
        </button>
      )}
      <button
        className={classes.labelButton}
        type="button"
        style={{ backgroundColor: props.color }}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </li>
  );
};

export default OptionButton;
