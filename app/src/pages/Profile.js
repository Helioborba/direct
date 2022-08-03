import { useState, useRef } from "react";
import {Box, Grid, Typography, Button, Avatar} from "@mui/material";
import ProfileForm from "../components/profile/ProfileForm.js";
import Nav from "../components/nav/nav.js";
import ProfileAvatar from "../components/profile/ProfileAvatar.js";
const Profile = (props) => {

    // Used for checking if the person want's to change his profile pic
    const [hoverDiv, setHoverDiv] = useState(false);
    const fileInput = useRef(null);

    function hoverDivHandler() {
        setHoverDiv(!hoverDiv);
    }

    
    const handleClick = () => {
        fileInput.current.click();
    }

    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            {/* <ModalAvatar open={open} openHandler={openHandler}></ModalAvatar> */}
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', alignItems:'center'}}>
                <Grid container direction="column" sx={{backgroundColor:"#222",  minHeight:"88vh", pt:2, pb:10, mr:2, borderRadius:{xs:0, lg:3}}}>
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
                            <Avatar onMouseOver={hoverDivHandler} onMouseOut={hoverDivHandler} onClick={handleClick} sx={{fontSize:"5em", width:200, height:200, filter: hoverDiv && 'blur(2px)'}}>S</Avatar>
                            {hoverDiv && (
                                <ProfileAvatar fileInput={fileInput} handleClick={handleClick}></ProfileAvatar>
                            )}
                        </Grid>
                        <Grid container item xs={6} sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>

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
                </Grid>
            </Box>
        </Box>
    )
}

export default Profile;


