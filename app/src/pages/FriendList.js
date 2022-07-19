import { useContext, useEffect, useState, useRef } from "react";
import {Box, Typography, Grid} from "@mui/material";
import banner from "../others/images/banner.jpg";
import Nav from "../components/nav/nav.js";
import Message from '../context/message.js';
import {Avatar} from "@mui/material";
import Button from "../components/UI/buttons/button";
import ChatInput from "../components/form/chatInput.js";

// Caixas do chat
import ChatUserBox from "../components/chatBoxes/user";
import ChatOthersBox from "../components/chatBoxes/others";

const FriendList = (props) => {

    // scrollbar customizada; deve virar um component em si depois.
    // const scrollBar = {
    //     /* width */
    //     '::-webkit-scrollbar': {
    //         width: '10px',
    //     },
  
    //     /* Track */
    //     '::-webkit-scrollbar-track': {
    //         boxShadow: 'inset 0 0 5px grey',
    //         borderTopLeftRadius:{xs:0, lg:15},
    //         borderBottomRightRadius:{xs:0, lg:15}
    //     },
           
    //     /* Handle */
    //     '::-webkit-scrollbar-thumb': {
    //         background: '#666',
    //         borderTopLeftRadius:{xs:0, lg:15},
    //         borderBottomRightRadius:{xs:0, lg:15}
    //     },
          
    //     /* Handle on hover */
    //     '::-webkit-scrollbar-thumb:hover': {
    //         background: '#333'
    //     }
    // }
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#333"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="row"  sx={{backgroundColor:"#222",  height:"88vh", borderRadius:{xs:0, lg:3} }}>
                    
                
                </Grid>
            </Box>
        </Box>
    )
}

export default FriendList;
