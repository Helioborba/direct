import { useState } from "react";
import {Avatar, Box, Grid, Typography} from "@mui/material";
import Nav from "../components/nav/nav.js";
import ModelPagination from "../components/pagination/pagination.js";
import Button from "../components/UI/buttons/button.js";
import icon from "../others/images/icon.png";
import Image from "../components/UI/image/image.js";
import SearchForm from "../components/search/searchForm.js";
import SearchResult from "../components/search/searchResult.js";
const Search = (props) => {
    const [search, setSearch] = useState(true)

    // Will run after searching for a person, to render the other comp
    function setSearchHandler() {
        setSearch(!search);
    }
    
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

    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#333"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="column"  sx={{p:3, backgroundColor:"#222", display:"flex", justifyContent:"space-between", alignItems:"center",  height:"88vh", borderRadius:{xs:0, lg:3} }}>
                    {search ? <SearchForm></SearchForm> : <SearchResult></SearchResult>}
                </Grid>
            </Box>
        </Box>
    )
}

export default Search;


