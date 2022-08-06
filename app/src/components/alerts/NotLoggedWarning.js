import React from "react";
import {Typography, Grid} from "@mui/material";

import Button from "../UI/buttons/button";

const NotLoggedWarning = (props) => {
    return(
        <React.Fragment>
            <Grid container item direction="column" sx={{display:'flex', p:5}}>
                <Grid item> 
                    <Typography variant={"h2"}>You are not logged into Direct</Typography>
                    <Typography>To access {props.children} please log in first:</Typography>
                </Grid>
                <Grid item pt={2}> 
                    <Button>Log in</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )        
}

export default NotLoggedWarning;
