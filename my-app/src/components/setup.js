import React from "react";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

class Setup extends React.Component{
    
    render() {
        console.log(this.props)
        return(
            <Paper elevation={2}>
                <Accordion>
                    <AccordionSummary>
                    <Typography>
                      <h1> Device Setup </h1> <p>*click here*</p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ol>
                        <li> {this.props.steps.step_1} </li>
                        <li> {this.props.steps.step_2} </li>
                        <li> {this.props.steps.step_3} </li>
                      </ol>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </Paper> 
        );
    }
}

export default Setup;