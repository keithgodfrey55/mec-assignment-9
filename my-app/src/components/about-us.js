import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      description: "We are a retail tech company focused in the smartwatch field. We created Inteliband to help people get assistance as soon as irregular patterns are detected in a persons vitals."
    };
  }
    render(){
        return(
        <div>
            <Paper elevation={2}>
              <Typography>
                <h1>About us</h1>
                <p>
                  {this.state.description}
                </p>
              </Typography>
            </Paper>
        </div>
        );
    }
}
export default About;