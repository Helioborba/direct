import React, {useContext} from "react";
import {Box, Grid} from "@mui/material";
import Nav from "../components/nav/nav.js";
import Message from "../context/message.js";
import { useParams } from "react-router-dom";
import UserMain from "../components/user/userMain.js";

const User = (props) => {
    const {name} = useParams();
    const ctxLogin = useContext(Message);

    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', alignItems:'center'}}>
                <Grid container direction="column" sx={{backgroundColor:"#222",  minHeight:"88vh", pt:2, pb:10, mr:2, borderRadius:{xs:0, lg:3}}}>
                    <UserMain username={name}/>

                    {/* Need to check for login later */}
                </Grid>
            </Box>
        </Box>
    )
}

export default User;


