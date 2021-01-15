import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import versionSearch from "../validation/validate.js";
import validPassword from "../validation/password.js";
import validEmail from "../validation/email.js";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: {
        value: "",
        error: "",
      },
      email: {
        value: "",
        error: "",
      },
      first: {
        value: "",
        error: "",
      },
      last: {
        value: "",
        error: "",
      },
    };
  }
  submitForm(event) {
    event.preventDefault();
    let state_value = this.state;
    state_value.email.error = validEmail(this.state.email.value);
    this.setState(state_value.email);
    
    
    state_value.password.error = validPassword(this.state.password.value);
    this.setState(state_value.password);
    
    return;
  }
  updateForm(which, event) {
    this.setState({
      [which]: {
        value: event.target.value,
        error: this.state[which].error,
      },
    });
  }
  render() {
    return (
      <div>
        <Grid item align="center" xs={12} sm={12}>
          <Typography variant="h2">Inteliband</Typography> <br />
          <Typography>"where our first priority is you"</Typography>
        </Grid>
        <div className="form">
          <form
            onSubmit={(event) => {
              this.submitForm(event);
            }}
          >
            <Paper elevation={2}>
              <Grid container spacing={1} justify="center">
                <Grid item align="center" xs={12}>
                  <Typography fullWidth variant="h4">
                    Sign up to recieve updates
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    placeholder="John"
                    variant="outlined"
                    value={this.state.first.value}
                    onChange={(event) => {
                      this.updateForm("first", event);
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    placeholder="Wick"
                    variant="outlined"
                    value={this.state.last.value}
                    onChange={(event) => {
                      this.updateForm("last", event);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    placeholder="johnwick@gmail.com"
                    variant="outlined"
                    value={this.state.email.value}
                    error={this.state.email.error}
                    onChange={(event) => {
                      this.updateForm("email", event);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    helperText={this.state.password.error}
                    variant="outlined"
                    type="password"
                    value={this.state.password.value}
                    error={this.state.password.error}
                    onChange={(event) => {
                      this.updateForm("password", event);
                    }}
                  />
                </Grid>
                <Grid item align="center" xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
