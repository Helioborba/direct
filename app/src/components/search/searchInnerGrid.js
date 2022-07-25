import icon from "../../others/images/icon.png";
import Image from "../UI/image/image.js";
import { Grid, Typography} from "@mui/material";

const SearchInnerGrid = (props) => {
    return (
        <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
            <Image img={icon}></Image>
            <Typography pt={2}>{props.children}</Typography>
        </Grid>
    )
}

export default SearchInnerGrid;