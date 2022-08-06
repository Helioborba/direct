import { useState } from "react";
import {Box, Grid} from "@mui/material";
import Nav from "../components/nav/nav.js";
import SearchForm from "../components/search/searchForm.js";
import SearchResult from "../components/search/searchResult.js";
const Search = (props) => {
    const [search, setSearch] = useState(true);
    const [result, setResult] = useState(null); // resulting data of form search 

    // Will run after searching for a person, to render the other comp
    function setSearchHandler() {
        setSearch(!search);
    }
    
    function setResultHandler(data) {
        setResult(data);
    }

    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#333"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="column"  sx={{p:3, backgroundColor:"#222", display:"flex", justifyContent:"space-between", alignItems:"center",  height:"88vh", borderRadius:{xs:0, lg:3} }}>
                    {search ? <SearchForm result={result} setResultHandler={setResultHandler} setSearchHandler={setSearchHandler}/> : <SearchResult result={result} setSearchHandler={setSearchHandler}/>}
                </Grid>
            </Box>
        </Box>
    )
}

export default Search;


