import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import About from "../components/about-us.js";
import Mission from "../components/mission.js";
import Version from "../components/versions.js";
import Setup from "../components/setup.js";



class App extends React.Component {
  render() {
    const description =
      "Deliver the fastest possible assistance to people in need.";
    let steps = {
      step_1: "Set device passcode",
      step_2: "Set voice recognizer",
      step_3: "Set fingerprint",
    };
    return (
      <div>
        <Grid
          container
          direction="row"
          jutstify="space-evenly"
          alignItems="baseline"
          spacing={2}
        >
          <Grid item align="center" xs={12} sm={12}>
            <Typography variant="h2">Inteliband</Typography> <br />
            <Typography>"where our first priority is you"</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <About />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Mission description={description} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Version />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Setup steps={steps} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                alert("IOS 6+ and higher, Android 8.0 and higher");
              }}
            >
              Compatible Devices
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Typography>
                <h1>North America Corporate Contacts</h1>
                <h3>United States</h3>
                <li>Inteliband Media Helpline (408) 974-2042</li>
                <li>Inteliband Software Upgrade Center (800) 840-8436</li>
                <li>
                  Reseller Referral (Reseller, Trainers, Consultants) (800)
                  564-9412
                </li>
                <h3>Canada</h3>
                <li>
                  Inteliband Store (Consumer and Education Individuals) (800)
                  857-3438
                </li>
                <h3>Mexico</h3>
                <li>
                  Inteliband Store (Consumer and Education Individuals)
                  (001-800-857-3438)
                </li>
                <li>Inteliband Store (Small Business) 001-800-857-3438</li>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Typography>
                <h1>Frequently Requested Info</h1>
                <h3>Inteliband Login Support</h3>
                <p>Learn more about logins and its benefits.</p>
                <a href="http://localhost:3000/">Learn more </a>
                <h3>Inteliband Products</h3>
                <p>
                  Find out how to get additional technical support and hardware
                  service options for your Inteliband products.
                </p>
                <a href="http://localhost:3000/">Learn more </a>
                <h3>Repair and Services</h3>
                <p>
                  See all your repair and services options based on your product
                  and location.
                </p>
                <a href="http://localhost:3000/">Learn more </a>
                <h3>Repair Status</h3>
                <p>
                  Quickly and easily get the status of one or all of your
                  repairs.
                </p>
                <a href="http://localhost:3000/">Learn more </a>
                <h3>Job Opportunities</h3>
                <p>
                  Find current openings, college jobs, internships, and more.
                </p>
                <a href="http://localhost:3000/">Learn more </a>
                <h3>Media and Analyst Info</h3>
                <p>Get press releases, media contacts, and more.</p>
                <a href="http://localhost:3000/">Learn more </a>
                <h3>Email Subscriptions</h3>
                <p>
                  Update your email address or change your subscription status.
                </p>
                <a href="http://localhost:3000/">Learn more </a>
                <h3>User Groups</h3>
                <p>Mix and mingle with other Inteliband Users in your area.</p>
                <a href="http://localhost:3000/">Learn more </a>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Typography>
                <h1>Feedback</h1>
                <p>
                  Tell us how we’re doing. Select the appropriate feedback
                  option (we read everything, but can’t always respond):
                </p>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App;
