// import icon from "../../others/images/icon.png";
import SearchAvatar from "./searchAvatar/avatar.js";
import { Box, Grid, Typography} from "@mui/material";
import DefaultSearchAvatar from "./searchAvatar/defaultAvatar.js";
import BannerBackground from "./searchAvatar/bannerBackground.js";

const SearchInnerGrid = (props) => {
    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

    return (
        <Grid item xs={3}> 
            <Box sx={{ position:'relative', width:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <BannerBackground banner={props.banner}></BannerBackground>
                {props.icon ? <SearchAvatar img={props.icon}/> : <DefaultSearchAvatar/>}
                <Typography pt={2} sx={{zIndex:'10000'}}>{props.children}</Typography>
            </Box>
        </Grid>
    )
}

export default SearchInnerGrid;