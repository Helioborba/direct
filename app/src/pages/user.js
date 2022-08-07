import React, {useContext} from "react";
import {Box, Typography} from "@mui/material";
import Nav from "../components/nav/nav.js";
import Message from "../context/message.js";

const User = (props) => {

    const ctxLogin = useContext(Message);
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', alignItems:'center'}}>
                <Typography>there's nothing here.. yet </Typography>
            </Box>
        </Box>
    )
}

export default User;

