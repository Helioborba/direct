import React, { useContext, useEffect, useState, useRef } from "react";
import {Typography, Grid} from "@mui/material";
import banner from "../../others/images/banner.jpg";
import {Avatar} from "@mui/material";
import Button from "../UI/buttons/button";
import BannerBackground from "../search/searchAvatar/bannerBackground.js";
import {Link, Box} from "@mui/material";
import { NavLink } from "react-router-dom";
// Caixas do chat
import ChatMessagePreview from "./ChatMessagePreview";
import UserListGrid from "./subComponents/UserListGrid";

const ListMain = (props) => {

    // scrollbar customizada; deve virar um component em si depois.
    const scrollBar = {
        /* width */
        '::-webkit-scrollbar': {
            width: '10px',
        },
  
        /* Track */
        '::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 5px grey'
         
        },
           
        /* Handle */
        '::-webkit-scrollbar-thumb': {
            background: '#666',
          
        },
          
        /* Handle on hover */
        '::-webkit-scrollbar-thumb:hover': {
            background: '#333'
        }
    }
    return(
        
        <React.Fragment>
            {/* Avatar and Navigation */}
            <Grid container item direction="column" wrap={'nowrap'} sx={{maxHeight: "100%"}} xs={4}>
                {/* Avatar */}
                <Grid item display='flex' flexDirection='column' sx={{backgroundColor:"#222", borderTopLeftRadius:{xs:0, lg:15}, display:"flex", justifyContent:'center', alignItems:'center', boxShadow:'12px 0px 10px -5px rgba(10,10,10,0.5)'}} xs={1}> 
                    <Grid item>
                        <Typography>Chat</Typography>
                    </Grid>
                </Grid>
                <Grid item display='flex' flexDirection='column' sx={{overflowY:'scroll',...scrollBar, backgroundColor:"#222", display:"flex", justifyContent:'center', alignItems:'center', boxShadow:'10px 0px 10px -5px rgba(10,10,10,0.5)'}} xs={10}> 
                    <Grid sx={{width: '100%', height:"100%"}}>
                        <ChatMessagePreview/>
                    </Grid>
                </Grid>
                {/* Navi */}
                <Grid item display='flex' flexDirection='column' xs={1} sx={{display:"flex", justifyContent:"flex-end", alignItems:'center', backgroundColor:"#222", borderBottomLeftRadius:{xs:0, lg:15}, p:{xs:0, lg:2}, boxShadow:'10px 0px 10px -5px rgba(10,10,10,0.5)'}}> 
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
                <Grid container item display='flex'  xs={11} sx={{ borderRadius:{xs:0, lg:3}, display:"flex", justifyContent:'center', alignItems:'center'}}> 
                    <Grid container item display='flex' flexDirection='row' xs={12} sx={{display:"flex", justifyContent:'center', alignItems:'stretch', borderRadius:{xs:0, lg:3}}}> 
                        <Grid container item xs={4} sx={{display:"flex", justifyContent:'center', alignItems:'stretch'}}>
                            <UserListGrid banner={banner}>Santos</UserListGrid>
                        </Grid>
                        <Grid container item xs={4}>
                            <UserListGrid banner={banner}>Santos</UserListGrid>
                        </Grid>
                        <Grid container item xs={4}>
                            <UserListGrid banner={banner}>Santos</UserListGrid>
                        </Grid>
                    </Grid>
                    <Grid container item display='flex' flexDirection='row' xs={12} sx={{borderRadius:{xs:0, lg:3}}}> 
                        <Grid container item xs={4}>
                            <UserListGrid banner={banner}>Santos</UserListGrid>
                        </Grid>
                        <Grid container item xs={4}>
                            <UserListGrid banner={banner}>Santos</UserListGrid>
                        </Grid>
                        <Grid container item xs={4}>
                            <UserListGrid banner={banner}>Santos</UserListGrid>
                        </Grid>
                    </Grid>
                    <Grid container item display='flex' flexDirection='row' xs={12} sx={{borderRadius:{xs:0, lg:3}}}> 
                        <Grid container item xs={4}>
                            <UserListGrid banner={banner}>Santos</UserListGrid>
                        </Grid>
                        <Grid container item xs={4}>
                            <UserListGrid banner={banner}>Santos</UserListGrid>
                        </Grid>
                        <Grid container item xs={4}>
                            <UserListGrid banner={banner}>Santos</UserListGrid>
                        </Grid>
                    </Grid>
                </Grid>
                {/*  */}
                <Grid item xs={1} sx={{display:'flex', borderTop:"1px solid #333", justifyContent:'center', alignItems:'center'}}>
                    [<Typography key={'E-10'} >Not Logged</Typography>]
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ListMain;
