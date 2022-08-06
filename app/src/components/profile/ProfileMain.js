import React, { useState, useRef, useContext } from "react";
import {Box, Grid, Typography, Button, Avatar} from "@mui/material";
import ProfileForm from "./ProfileForm.js";
import Nav from "../nav/nav.js";
import ProfileAvatar from "./ProfileAvatar.js";
import Message from "../../context/message.js";
import ProfileBanner from "./ProfileBanner.js";

const ProfileMain = (props) => {

    // Used for checking if the person want's to change his profile pic
    const [hoverDiv, setHoverDiv] = useState(false);
    const fileInput = useRef(null);
    const MessageCtx = useContext(Message);

    function hoverDivHandler() {
        setHoverDiv(!hoverDiv);
        //console.log(MessageCtx.userProvider.profilePicture)
    }

    const handleClick = () => {
        fileInput.current.click();
    }
    
    // Apparently, you can use the blob for the image source 
    // Need to check if user is logged later
    return(
        <React.Fragment>
            <Grid container item sx={{ position:'relative', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Grid container direction="row"  sx={{backgroundColor:"#222", borderRadius:{xs:0, lg:3} }}>
                        <Typography>Manage your profile</Typography>
                    </Grid>
                </Box>
            </Grid>
            <Grid container item xs={12} sx={{my:2}}>
                <Grid container item xs={6} sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                    Avatar
                </Grid>
                <Grid container item xs={6} sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                    Banner
                </Grid>
            </Grid>
            <Grid container item xs={12} sx={{mt:4}}>
                <Grid container item xs={6} sx={{ position:'relative', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Avatar src={MessageCtx.userProvider?.profilePicture} onMouseOver={hoverDivHandler} onMouseOut={hoverDivHandler} onClick={handleClick} sx={{fontSize:"5em", width:200, height:200, filter: hoverDiv && 'blur(2px)'}}>S</Avatar>
                    {hoverDiv && (
                        // This will cause the component render cycle to be messy, need to find a better way to work it out after updating the avatar
                        <ProfileAvatar hoverDivHandler={hoverDivHandler} fileInput={fileInput} handleClick={handleClick}></ProfileAvatar>
                    )}
                </Grid>
                <Grid container item xs={6} sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <ProfileBanner></ProfileBanner>
                </Grid>
            </Grid>
            
            <Grid container item>
                <ProfileForm></ProfileForm>
                <Grid container item xs={12} sx={{mt:7, display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <Typography>Account settings</Typography>
                </Grid>

                <Grid container item xs={12} sx={{mt:4}}>
                    <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                        <Grid item xs={2}>
                            <Typography>Email: </Typography> 
                        </Grid>
                        <Grid item xs={10}>
                            <Button>Change Email</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                        <Grid item xs={2}>
                            <Typography>Password: </Typography> 
                        </Grid>
                        <Grid item xs={10}>
                            <Button>Change Password</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ProfileMain;


