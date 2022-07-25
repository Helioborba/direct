import { Grid, Typography} from "@mui/material";
import ModelPagination from "../pagination/pagination.js";
import Button from "../UI/buttons/button.js";
import icon from "../../others/images/icon.png";
import Image from "../UI/image/image.js";
import React from "react";
import SearchInnerGrid from "./searchInnerGrid.js";
const SearchResult = (props) => {
    function render() {
        // 
        const componentInnerGridArray = props.result.map((data) => {
            return <SearchInnerGrid>{data.username}</SearchInnerGrid>
        })
        return componentInnerGridArray
    }
    return(
        <React.Fragment>
            <Grid item xs={1} sx={{position:'relative', width:'100%', display:"flex", justifyContent:"end", alignItems:"center",}}>
                {/* Theres some padding left here to fix the position */}
                <Typography sx={{flex:1, pl:5}}>Results</Typography>
                <Button onClick={props.setSearchHandler}>Go back</Button>
            </Grid>
            <Grid container direction="column" item xs={10} sx={{display:"flex", alignItems:"center"}}>
                <Grid container item xs={4} sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                   {render()}
                </Grid>
                {/* <Grid container item xs={4} sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
                        <Image img={icon}></Image>
                        <Typography pt={2}>ASARERAWERERARER</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
                        <Image img={icon}></Image>
                        <Typography pt={2}>ASARERAWERERARER</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
                        <Image img={icon}></Image>
                        <Typography pt={2}>ASARERAWERERARER</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
                        <Image img={icon}></Image>
                        <Typography pt={2}>ASARERAWERERARER</Typography>
                    </Grid>   
                </Grid>
                <Grid container item xs={4} sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
                        <Image img={icon}></Image>
                        <Typography pt={2}>ASARERAWERERARER</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
                        <Image img={icon}></Image>
                        <Typography pt={2}>ASARERAWERERARER</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
                        <Image img={icon}></Image>
                        <Typography pt={2}>ASARERAWERERARER</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
                        <Image img={icon}></Image>
                        <Typography pt={2}>ASARERAWERERARER</Typography>
                    </Grid>
                </Grid> */}
            </Grid>
            <Grid item xs={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <ModelPagination></ModelPagination>
            </Grid>
        </React.Fragment>
    )
}

export default SearchResult;


