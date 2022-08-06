import { Grid, Typography} from "@mui/material";
import ModelPagination from "../pagination/pagination.js";
import Button from "../UI/buttons/button.js";
import React, {useState} from "react";
import SearchInnerGrid from "./searchInnerGrid.js";
const SearchResult = (props) => {
    const [currentPage, setCurrentPage] = useState(1); // Pagination current page
    let numberOfPages = 1; // Holds the amount of necessary pages needed to render the other grids

    // receives both the event and value
    const currentPageHandler = (e, value) => {
        setCurrentPage(value);
    }

    function createComponents() {
        // Create all of the inner grids 
        const componentGroup = []; // a array containing the inner grids in a collection of 4
        const subGroup = []; // array containing the jsx inner grids
        let updatedKey = null; // Used to keep the updated index because of the 0-1 offset 

        for (const [key, value] of Object.entries(props.result)) {
            updatedKey = Number(key) + 1;
            subGroup.push(<SearchInnerGrid key={key} icon={value.profilePicture} banner={value.banner}>{value.username}</SearchInnerGrid>); // add the current value to the sub group
        
            // add the subgroup
            if (updatedKey % 4 === 0) {
                componentGroup.push(
                    <Grid key={`o-${key}`}  columnSpacing={1} container item xs={4} sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        {[...subGroup]}
                    </Grid>
                ); // add the whole jsx group to the componentGroup
                subGroup.length = 0; // flush the array
                continue;
            } 

            // This if adds the rest of the data to the group array when there's no more groups to form
            if (props.result.length === updatedKey) { 
                componentGroup.push(
                    <Grid key={`o-${key}-e`} container item xs={4} sx={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                        {[...subGroup]}
                    </Grid>
                );
            }
        }
        return componentGroup;
    }

    // Organize for each 3 groups of 4 grids
    function groupComponents() {
        const groupedComponents = []; // This array holds the object containing all of the 4 inner grids
        const subGroupComponents = []; // this array contains the components
        let groupCompletionKey = 1; // Used after each newly formed group array; it start at 1 because the index of the bottom navigation also starts at 1
        let updatedKey = null; // Used to keep the updated index because of the 0-1 offset
        
        const createdComponents = createComponents(); // create the comps before grouping (need this step to check the array length)

        for (const [key, value] of Object.entries(createdComponents)) {
            updatedKey = Number(key) + 1; // don't forget, the key is a string
            subGroupComponents.push(value)

            // add the subgroup to the component group
            if (updatedKey % 3 === 0) {
                groupedComponents.push({index: groupCompletionKey, components: [...subGroupComponents]});
                subGroupComponents.length = 0; // flush the array
                groupCompletionKey += 1;
                continue;
            }
            
            // Add the remaining jsx to the component group
            if (createdComponents.length === updatedKey) {
                groupedComponents.push({index: groupCompletionKey, components: [...subGroupComponents]});
            }

        }
        return groupedComponents;
    }
    
    // Used to get which comp should be rendered based on the keys, needs a array with objects containing indexes to work
    function render() {
        const componentsGrid = groupComponents();

        // HERE IS SET THE NUMBER OF PAGES BASED ON HOW MANY GROUPS OF COMPONENTS WE GOT
        numberOfPages = componentsGrid.length; 

        return  componentsGrid.map( (groupdObject) => {
                if( groupdObject.index === currentPage ) {
                    return groupdObject.components;
                }
                return null;
            }
        )
    };

    return(
        <React.Fragment>
            <Grid item xs={1} sx={{position:'relative', width:'100%', display:"flex", justifyContent:"end", alignItems:"center",}}>
                {/* Theres some padding left here to fix the position */}
                <Typography sx={{flex:1, pl:5}}>Results</Typography>
                <Button onClick={props.setSearchHandler}>Go back</Button>
            </Grid>
            <Grid container direction="column" item xs={10} sx={{display:"flex", alignItems:"center"}}>
                {render()}
            </Grid>
            <Grid item xs={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <ModelPagination currentPage={currentPage} currentPageHandler={currentPageHandler} numberOfPages={numberOfPages}></ModelPagination>
            </Grid>
        </React.Fragment>
    )
}

export default SearchResult;


