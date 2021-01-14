import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';

class SignUp extends React.Component{

    render(){
        return(
            <div>
                <form>
                    <Paper elevation={2}>
                    <Grid container>
                        <Grid item xs={6}>
                        <TextField label="First Name" placeholder="john" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField label="Last Name" placeholder="john" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField label="Email" placeholder="john" variant="outlined" />
                        </Grid>
                    </Grid>
                    </Paper>
                </form>
            </div>
        );
    }
}
export default SignUp;