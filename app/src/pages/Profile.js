// import { useContext } from "react";
import {Box, Grid, Typography, FormControl, InputLabel, Input, FormHelperText} from "@mui/material";
import ProfileForm from "../components/form/profileForm.js";
import Nav from "../components/nav/nav.js";
const Profile = (props) => {
   
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box  sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', alignItems:'center'}}>
                <Grid container direction="column" sx={{backgroundColor:"#222",  minHeight:"88vh", pt:2, pb:10, mr:2, borderRadius:{xs:0, lg:3}}}>
                    <Grid container item xs={2} sx={{ position:'relative', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                        <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <Grid container direction="row"  sx={{backgroundColor:"#222", borderRadius:{xs:0, lg:3} }}>
                                <Typography>Manage your profile</Typography>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container item xs={10}>
                        <Grid container item xs={6}>
                            <Grid item xs={12} sx={{ display:'flex', alignItems:'center', pl:4}}>
                                <Typography>User ID:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                                <Grid item xs={2}>
                                    <Typography>Name: </Typography> 
                                </Grid>
                                <Grid item xs={10}>
                                    <ProfileForm></ProfileForm> 
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                                <Grid item xs={2}>
                                    <Typography>Status: </Typography> 
                                </Grid>
                                <Grid item xs={10}>
                                    <ProfileForm></ProfileForm> 
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                                <Grid item xs={2}>
                                    <Typography>Name: </Typography> 
                                </Grid>
                                <Grid item xs={10}>
                                    <ProfileForm></ProfileForm> 
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                                <Typography>Email:</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                           
                            <Typography>Manage your profile</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Profile;


