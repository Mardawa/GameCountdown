import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    marginBottom: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    margin: theme.spacing.unit
  }
});

function AddCountdown(props) {
  const {
    classes,
    value,
    onDateChange,
    onNameChange,
    onUrlChange,
    onDateSubmit,
    nameValue,
    urlValue
  } = props;

  return (
    <Grid container direction="row" justify="center">
      <form noValidate>
        <Grid item xs>
          <Input
            required
            placeholder="Enter a new game"
            className={classes.input}
            onChange={onNameChange}
            value={nameValue}
            inputProps={{
              "aria-label": "Description"
            }}
          />
        </Grid>
        <Grid item xs>
          <Input
            required
            placeholder="Enter the img url"
            className={classes.input}
            onChange={onUrlChange}
            value={urlValue}
            inputProps={{
              "aria-label": "Description"
            }}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="date"
            label="Pick a date"
            type="date"
            value={value}
            className={classes.textField}
            onChange={onDateChange}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <IconButton
          color="secondary"
          className={classes.button}
          aria-label="Add an alarm"
          onClick={onDateSubmit}
          type="submit"
        >
          <AddIcon />
        </IconButton>
      </form>
    </Grid>
  );
}

export default withStyles(styles)(AddCountdown);
