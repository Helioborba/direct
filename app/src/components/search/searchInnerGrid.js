// import icon from "../../others/images/icon.png";
import SearchAvatar from "./searchAvatar/avatar.js";
import { Grid, Typography} from "@mui/material";
import DefaultSearchAvatar from "./searchAvatar/defaultAvatar.js";

const SearchInnerGrid = (props) => {
    return (
        <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
            {props.icon ? <SearchAvatar img={props.icon}/> : <DefaultSearchAvatar/>}
            <Typography pt={2}>{props.children}</Typography>
        </Grid>
    )
}

export default SearchInnerGrid;