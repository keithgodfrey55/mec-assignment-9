import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

class Work extends React.Component{
  render() {
    return (
      <div>
        <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Accordion>
              <AccordionSummary>
                <Typography>
                  <h1>How Inteliband works</h1> <p>*click here*</p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>
                    The Inteliband works by placing a heart rate sensor on the
                    undersode of the watch and monitors for irregular vital
                    patterns and alerts the paramedics/authorities once
                    detected.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
        </Grid>
      </div>
    );
  }
}
export default Work;