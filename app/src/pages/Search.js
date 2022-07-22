// import { useContext } from "react";
import {Avatar, Box, Grid, Typography} from "@mui/material";
import Nav from "../components/nav/nav.js";
import ModelPagination from "../components/pagination/pagination.js";

const Search = (props) => {
    // const ctxNations = useContext(NationsContext);

    // for (const node of ctxNations.canvasNodes) {
    //     if (node.city) {
    //         console.log(node.city);
    //     }
    // }
    
    // function render() {
    //     if (ctxNations.nationsProvider[0] != null) {
    //         return (ctxNations.nationsProvider.map((city,index) => {
    //             return (
    //                 <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={index} sx={{p:2,mt:2,borderRadius:4, backgroundColor:"#000"}}>
    //                     <Grid item>City: {city.name}</Grid><Grid item> Population: {city.population.total}</Grid><Grid item> Buildings: {city.buildings.total}</Grid><Grid item> Army: {city.army.report()}</Grid>
    //                 </Grid> 
    //             )
    //         }))
    //     }
    //     return (
    //         <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={0} sx={{p:2,mt:2,borderRadius:4, backgroundColor:"#000"}}>
    //             <Grid item>No nation yet.</Grid>
    //         </Grid> 
    //     )
        

    // }
    function render() {
        return (<Typography>Nothing Here</Typography>)
    }

    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#333"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="column"  sx={{p:3, backgroundColor:"#222", display:"flex", justifyContent:"space-between", alignItems:"center",  height:"88vh", borderRadius:{xs:0, lg:3} }}>
                    <Grid container item sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <Grid container item sx={{display:"flex", justifyContent:"space-between", alignItems:"center",backgroundColor:"red"}}>
                            <Grid item> 
                                <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            </Grid>
                            <Grid item> 
                                <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            </Grid>
                            <Grid item> 
                                <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            </Grid>
                        </Grid>
                        <Grid container item sx={{backgroundColor:"blue", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Grid item> 
                                <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            </Grid>
                            <Grid item> 
                                <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            </Grid>
                            <Grid item> 
                                <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            </Grid>
                        </Grid>
                        <Grid container item sx={{backgroundColor:"purple", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Grid item> 
                                <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            </Grid>
                            <Grid item> 
                                <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            </Grid>
                            <Grid item> 
                                <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ModelPagination></ModelPagination>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Search;


