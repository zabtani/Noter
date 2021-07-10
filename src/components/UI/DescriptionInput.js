import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './Input.module.css';
const DescriptionInput = React.forwardRef((props, ref) => {
  return (
    <TextField
      type="text"
      className={classes.input}
      id="description"
      label={props.label}
      variant="outlined"
      inputProps={{ ref: ref }}
      multiline
      rows={4}
    />
  );
});

export default DescriptionInput;
