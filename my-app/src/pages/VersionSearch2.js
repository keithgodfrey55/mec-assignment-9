import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

export function useStyles(theme){
    return {
        root: {
          display: 'flex',
        },
        formControl: {
          margin: theme.spacing(3),
        },
      }
}
export function CheckboxesGroup() {
    const classes = makeStyles(useStyles);
    const [state, setState] = React.useState({
      gold: true,
      silver: false,
      bronze: false,
    });

function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

const { gold, silver, bronze } = state;
const error = [gold, silver, bronze].filter((v) => v).length !== 1
return (
    <Paper elevation={2}>
    <Grid container>
        <Grid item xs={12} align="center">
        <Typography variant="h2" fullWidth>Search Intelliband by its color</Typography>
        <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick one</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gold} onChange={handleChange} name="gold" />}
            label="Gold"
          />
          <FormControlLabel
            control={<Checkbox checked={silver} onChange={handleChange} name="silver" />}
            label="Silver"
          />
          <FormControlLabel
            control={<Checkbox checked={bronze} onChange={handleChange} name="bronze" />}
            label="Bronze"
          />
        </FormGroup>
        <FormHelperText>You checked too many</FormHelperText>
        </FormControl>       
        </Grid>
    </Grid>
    </Paper>
);
}