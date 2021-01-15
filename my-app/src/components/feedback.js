import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import validateFeedback from '../validation/feedback';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback:"",
      error:""
    };
  }
  updateField(event) {
      this.setState({
          feedback: event.target.value
      })
  }
  submitForm(event){
      event.preventDefault();
    let state_values=this.state;
    state_values.error=validateFeedback(this.state.feedback);
    this.setState(state_values);
    if(state_values.error!==''){
        alert(state_values.error)
        return;
    }
    alert("Thank you for your feedback!")
  }
  render() {
    return (
      <Paper elevation={2}>
        <Typography>
          <h1>Feedback</h1>
          <p>Tell us how we’re doing. Select the appropriate feedback option (we read everything, but can’t always respond)</p>
            <form onSubmit={(event) => {this.submitForm(event);}}>
                
          <TextField
            id="outlined-multiline-flexible"
            label="Feedback"
            multiline
            rowsMax={4}
            value={this.state.feedback}
            onChange={(event) => {
                this.updateField(event);
              }
            }
            variant="outlined"
          />
          <Grid item align="center" xs={12}>
            <Button variant="outlined" color="secondary" type="submit" startIcon={<CloudUploadIcon />}>
                Submit
            </Button>
          </Grid>
          </form>
        </Typography>
      </Paper>
    );
  }
  
}
export default Feedback;
