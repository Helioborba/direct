import React, { useContext, useEffect, useState, useRef } from "react";
import {Typography, Grid} from "@mui/material";
import banner from "../../others/images/banner.jpg";
import Message from '../../context/message.js';
import {Avatar} from "@mui/material";
import Button from "../UI/buttons/button";
import ChatInput from "../form/chatInput.js";

// Caixas do chat
import ChatUserBox from "../chatBoxes/user";
import ChatOthersBox from "../chatBoxes/others";
import ChatMessagePreview from "./ChatMessagePreview";

const ListMain = (props) => {

    // scrollbar customizada; deve virar um component em si depois.
    const scrollBar = {
        /* width */
        '::-webkit-scrollbar': {
            width: '10px',
        },
  
        /* Track */
        '::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 5px grey',
            borderTopLeftRadius:{xs:0, lg:15},
            borderBottomRightRadius:{xs:0, lg:15}
        },
           
        /* Handle */
        '::-webkit-scrollbar-thumb': {
            background: '#666',
            borderTopLeftRadius:{xs:0, lg:15},
            borderBottomRightRadius:{xs:0, lg:15}
        },
          
        /* Handle on hover */
        '::-webkit-scrollbar-thumb:hover': {
            background: '#333'
        }
    }
    return(
        
        <React.Fragment>
            {/* Avatar and Navigation */}
            <Grid container item direction="column" wrap={'nowrap'} sx={{maxHeight:"100%"}} xs={4}>
                {/* Avatar */}
                <Grid item display='flex' flexDirection='column' sx={{backgroundColor:"#222", borderTopLeftRadius:{xs:0, lg:15}, display:"flex", justifyContent:'center', alignItems:'center'}} xs={1}> 
                    <Grid item>
                        <Typography>Chat</Typography>
                    </Grid>
                </Grid>
                <Grid item display='flex' flexDirection='column' sx={{overflow:'scroll', backgroundColor:"#222", display:"flex", justifyContent:'center', alignItems:'center'}} xs={10}> 
                    <Grid sx={{width: '100%'}}>
                        <ChatMessagePreview/>
                    </Grid>
                </Grid>
                {/* Navi */}
                <Grid item display='flex' flexDirection='column' xs={1} sx={{display:"flex", justifyContent:"flex-end", alignItems:'center', backgroundColor:"#222", borderBottomLeftRadius:{xs:0, lg:15}, p:{xs:0, lg:2}, boxShadow:'12px 0px 10px -5px rgba(10,10,10,0.2)'}}> 
                    <Grid item>
                        <Button>
                            Go back
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            
            {/* Banner and Chat */}
            <Grid container item direction="column" xs={8}>
                {/* Banner */}
                <Grid item display='flex' flexDirection='column' xs={3} sx={{borderRadius:{xs:0, lg:3}, display:"flex", justifyContent:'center', alignItems:'center'}}> 
                    <Typography>antooio</Typography>
                </Grid>
                {/* Chat */} 
                <Grid item container direction='column' wrap='nowrap'  xs={9} sx={{display:'flex', justifyContent:'space-between', maxHeight:'70vh', overflow:"hidden" }}> 
                    <Grid item container sx={{textAlign:"start", paddingY: 6, paddingX: 10, overflowY:'scroll', ...scrollBar}}>
                        {/* HERE IS THE MAIN CHAT BOXES */}
                    </Grid>
                    <Grid item sx={{display:'flex', borderTop:"1px solid #333", justifyContent:'center', alignItems:'center', p:2}}>
                        [<Typography key={'E-10'}>Not Logged</Typography>]
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ListMain;
