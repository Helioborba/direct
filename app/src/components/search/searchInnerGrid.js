import SearchAvatar from "./searchAvatar/avatar.js";
import { Box, Grid, Typography, Link} from "@mui/material";
import DefaultSearchAvatar from "./searchAvatar/defaultAvatar.js";
import BannerBackground from "./searchAvatar/bannerBackground.js";
import { NavLink } from "react-router-dom";

const SearchInnerGrid = (props) => {

    function activeNumber() {
        console.log('this is: ', props.id)
    }
    
    return (
        <Grid item xs={3} sx={{p:1}} onClick={activeNumber}>
            {/* Has a small shrink animation */}
            <Link component={NavLink} to={`/user/${props.username}`} sx={{textDecoration: 'none'}} >
                <Box sx={{transition:"all 0.3s", ':hover': {cursor:"pointer", transform: 'scale(0.9)'}, position:'relative', width:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <BannerBackground banner={props.banner}/>
                    {props.icon ? <SearchAvatar img={props.icon}/> : <DefaultSearchAvatar/>}
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

export default SearchInnerGrid;