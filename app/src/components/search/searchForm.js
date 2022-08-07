import React, {useRef} from "react";
import {Typography, Grid} from "@mui/material";
import { FormControl, TextField } from "@mui/material";
import Button from "../UI/buttons/button";
import SearchIcon from '@mui/icons-material/Search';


const SearchForm = (props) => {
    // Refs are used for the form inputs
    const displayNameField = useRef();
        
    // Send data to server
    function sendSearchRequest(event) {
        event.preventDefault();

        // The data
        const userData = { data : { displayName: displayNameField.current.value} };
        
        fetch('/api/sys/findUser', {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(userData) 
        })
        .then(res => res.json())
        .then(reqData => {
            if(!reqData.error) {
                // Update the state after getting the data as well
                props.setResultHandler(reqData.users);
                props.setSearchHandler();
            }
        })
        .catch( err => console.log(err));

        // Clear the fields
        displayNameField.current.value = '';
    }

    return (
        <FormControl component="form" onSubmit={sendSearchRequest} sx={{width:"100%"}}>
            <Grid container direction='column' sx={{p:20}}>
                <Grid item>
                    <Typography>Type the name of the person or group ID to search</Typography>
                </Grid>
                <Grid item>
                    <TextField
                        id="input-field-chat"
                        inputRef={displayNameField}
                        fullWidth
                        placeholder={"Person name or Group ID"}
                        InputLabelProps={{
                            sx: { color: '#fff'}
                        }}
                        sx={{
                            input: { // set the input styles and autofill
                                color: '#fff',
                                "&:-webkit-autofill": {
                                    WebkitBoxShadow: "0 0 0 1000px #222 inset",
                                    WebkitTextFillColor: '#fff !important'
                                }
                            },
                            fieldset: {
                                borderColor: '#fff'
                            },
                            '&:hover fieldset': {
                                borderColor: (theme) => `${theme.palette.primary.main} !important`
                            },
                            '&.Mui-focused input': { // - Set the Input border when parent is focused 
                                borderColor: '#fff !important',
                            },
                        }}
                    />
                </Grid>
                <Grid item sx={{display:'flex', justifyContent:'center', alignItems:'center', pt: 4}}>
                    <Button type={'submit'}>
                        <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', p:2}}>
                            <Grid item xs={10} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <Typography>Search</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                                <SearchIcon/>
                            </Grid>
                        </Grid>
                    </Button>
                </Grid>
            </Grid>
        </FormControl> 
    )
}

export default SearchForm;