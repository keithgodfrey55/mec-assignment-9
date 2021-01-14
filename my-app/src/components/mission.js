import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Mission extends React.Component {
  render() {
    return (
      <div>
        <Paper elevation={2}>
          <Typography>
            <div>
              <h1>Mission Statement</h1>
              <p>{this.props.description}</p>
            </div>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Mission;
