import classes from './TaskGenerator.module.css';
import Button from '@material-ui/core/Button';

const FormButton = (props) => {
  return (
    <Button
      variant="contained"
      color={props.color}
      type={props.type}
      className={classes.formButton}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default FormButton;
