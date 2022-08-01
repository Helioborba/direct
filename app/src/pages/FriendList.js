import { useContext } from "react";
import {Box, Grid} from "@mui/material";
import Nav from "../components/nav/nav.js";
import Message from '../context/message.js';


// The friend list is actually the chat
import ChatModel from "../components/chat/chatModel";
import ChatWarning from "../components/chat/chatWarning";

const FriendList = (props) => {
    const ctxLogin = useContext(Message);
    
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#333"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="row"  sx={{backgroundColor:"#222",  height:"88vh", borderRadius:{xs:0, lg:3} }}>
                    {ctxLogin.userProvider.logged ? <ChatModel/> : <ChatWarning/>}
                </Grid>
            </Box>
        </Box>
    )
}

export default FriendList;
