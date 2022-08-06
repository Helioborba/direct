import {useContext } from "react";
import {Box, Grid} from "@mui/material";
import Nav from "../components/nav/nav.js";
import Message from "../context/message.js";
import ProfileMain from "../components/profile/ProfileMain.js";
import NotLoggedWarning from "../components/alerts/NotLoggedWarning.js";

const Profile = (props) => {

    const ctxLogin = useContext(Message);
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            {/* <ModalAvatar open={open} openHandler={openHandler}></ModalAvatar> */}
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', alignItems:'center'}}>
                <Grid container direction="column" sx={{backgroundColor:"#222",  minHeight:"88vh", pt:2, pb:10, mr:2, borderRadius:{xs:0, lg:3}}}>
                    {ctxLogin.userProvider.logged ? <ProfileMain/> : <NotLoggedWarning>your Profile</NotLoggedWarning>}
                </Grid>
            </Box>
        </Box>
    )
}

export default Profile;


