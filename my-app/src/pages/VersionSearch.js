import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import versionSearch from "../validation/validate";

class VersionSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        value: "",
        error: "",
      },
    };
  }
  submitForm(event) {
    event.preventDefault();
    let state_value = this.state;

    state_value.input.error = versionSearch(
      state_value.input.value
    );

    this.setState(state_value);

    if (state_value.input.error !== "") {
        return state_value.input.error;
    }
    return;
  }

  update_field(which, event) {
    if (event.target.value.length < 15) {
      this.setState({
        [which]: {
          value: event.target.value,
          error: this.state[which].error,
        },
      });
    }
  }
  render() {
    return (
      <form
        onSubmit={(event) => {
          this.submitForm(event);
        }}
      >
        <div>       
            <Paper elevation={2}>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Intelliband version"
                    placeholder="Intelliband Version #"
                    variant="outlined"
                    value={this.state.input.value}
                    error={this.state.input.error !== ""}
                    helperText={this.state.input.error}
                    onChange={(event) => {
                      this.update_field("input", event);
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Button color="primary" variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Paper>
        </div>
      </form>
    );
  }
}

export default VersionSearch;
