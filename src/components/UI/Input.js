import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './Input.module.css';
const Input = React.forwardRef((props, ref) => {
  return (
    <TextField
      defaultValue={props.defaultValue}
      type="text"
      className={classes.input}
      id={props.id}
      label={props.label}
      variant="outlined"
      onChange={props.onChange}
      inputRef={ref}
      multiline={props.multiline ? true : null}
      rows={props.row ? props.row : null}
    />
  );
});

export default Input;
