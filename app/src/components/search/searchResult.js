import { Grid, Typography} from "@mui/material";
import ModelPagination from "../pagination/pagination.js";
import Button from "../UI/buttons/button.js";
import icon from "../../others/images/icon.png";
import Image from "../UI/image/image.js";
import React, {useState} from "react";
import SearchInnerGrid from "./searchInnerGrid.js";
const SearchResult = (props) => {
    const [currentPage, setCurrentPage] = useState(1); // Pagination current page
    let numberOfPages = 3; // Holds the amount of necessary pages needed to render the other grids

    // receives both the event and value
    const currentPageHandler = (e, value) => {
        setCurrentPage(value);
    }

    function render() {
        // Create all of the inner grids 
        const componentGroup = []; // a array containing the inner grids in a collection of 4
        const subGroup = []; // array containing the jsx inner grids

        for (const [key, value] of Object.entries(props.result)) {
            let updatedKey = Number(key) + 1;
            
            subGroup.push(<SearchInnerGrid>{value.username}</SearchInnerGrid>); // add the current value to the sub group
        
            // add the subgroup
            if (updatedKey % 4 === 0) {
                componentGroup.push([...subGroup]); // add the whole jsx group to the componentGroup
                subGroup.length = 0; // flush the array
                console.log(componentGroup)
            }
            
            // Add the rest of the data to the group array when there's no more groups to form
            if (props.result.length === updatedKey) {
                componentGroup.push(subGroup);
            }
        }
        // const componentInnerGridArray = props.result.map((data, index) => {
        //     // Used to set if the component can be wrapped later on inside the outer grid
        //     if (index % 4 === 0) {
        //         keyIndex += 1;
        //     }
            
        //     return { grid: [keyIndex], component: <SearchInnerGrid>{data.username}</SearchInnerGrid>}
        // })

        // Wrap every 4 innerGrids to the OuterGrid to complete the row
        // const assembledComponents = componentInnerGridArray.map( (component) => {
            
        // })


        // return componentInnerGridArray
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
                <ModelPagination currentPage={currentPage} currentPageHandler={currentPageHandler} numberOfPages={numberOfPages}></ModelPagination>
            </Grid>
        </React.Fragment>
    )
}

export default SearchResult;


