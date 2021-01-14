import React from "react";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

class Version extends React.Component{
    constructor(props) {
        super(props);
        this.state = {item1: "Intelliband 0.5 15 GB", item2: "Intelliband 1.5 32 GB", item3: "Intelliband 2.0 64 GB"};      
    }
    render() {
        return(
            <Paper elevation={2}>
              <Accordion>
                <AccordionSummary>
                  <Typography>
                    <h1> Versions </h1> <p>*click here*</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul>
                      <li> {this.state.item1} </li>
                      <li> {this.state.item2} </li>
                      <li> {this.state.item3} </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
        );
    }

}

export default Version;