import ListAvatar from "../../search/searchAvatar/avatar.js";
import { Box, Grid, Typography, Link, Avatar} from "@mui/material";
import BannerBackground from "../../search/searchAvatar/bannerBackground.js";
import { NavLink } from "react-router-dom";

const UserListGrid = (props) => {

    function activeNumber() {
        console.log('this is: ', props.id);
    }
    
    return (
        <Grid item onClick={activeNumber} sx={{width:"100%", p:1}}>
            {/* Has a small shrink animation */}
            <Link component={NavLink} to={`/user/${props.username}`} sx={{textDecoration: 'none'}} >
                <Box sx={{transition:"all 0.3s", ':hover': {cursor:"pointer", transform: 'scale(0.9)'}, position:'relative', width:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <BannerBackground banner={props.banner}/>
                    {props.icon ? <ListAvatar img={props.icon}/> : <Avatar/>}
                    <Typography pt={2} sx={{
                        zIndex:'100',
                        color:'white'
                    }}>
                        {props.children}
                    </Typography>
                </Box>
            </Link>
        </Grid>
    )
}

export default UserListGrid;