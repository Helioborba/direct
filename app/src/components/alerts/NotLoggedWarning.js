import React,{useState} from "react";
import {Typography, Grid} from "@mui/material";
import ModalLogin from '../modals/modalLogin.js';
import Button from "../UI/buttons/button";

const NotLoggedWarning = (props) => {
    const [open, setOpen] = useState(false);
    
    function onClose() {
        setOpen(!open);
    }

    return(
        <React.Fragment>
            <ModalLogin open={open} onClose={onClose}/>
            <Grid container item direction="column" sx={{display:'flex', p:5}}>
                <Grid item> 
                    <Typography variant={"h2"}>You are not logged into Direct</Typography>
                    <Typography>To access {props.children} please log in first</Typography>
                </Grid>
                <Grid item pt={2}> 
                    <Button onClick={onClose} variant={'outlined'} sx={{ '&:hover': {borderColor: '#1976d2'}, ml:3}}>Log in</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )        
}

export default NotLoggedWarning;
