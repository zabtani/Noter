import classes from './Button.module.css';
import MaterialButton from '@material-ui/core/Button';

const Button = (props) => {
  return (
    <MaterialButton
      variant="contained"
      color={props.color}
      type={props.type ? props.type : 'button'}
      className={`${classes.formButton} ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </MaterialButton>
  );
};

export default Button;
