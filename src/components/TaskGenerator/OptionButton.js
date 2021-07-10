import classes from './TaskGenerator.module.css';

const OptionButton = (props) => {
  return (
    <li className={`${classes.option} ${props.chosen && classes.chosen}`}>
      <button
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
