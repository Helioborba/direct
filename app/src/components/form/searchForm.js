import {Typography, Grid} from "@mui/material";
import { FormControl, TextField, IconButton } from "@mui/material";
import Button from "../UI/buttons/button";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import SendIcon from '@mui/icons-material/Send';
import Input from "./input.js";

const SearchForm = (props) => {
    return (
        <FormControl component="form" onSubmit={props.sendMessage} sx={{width:"100%"}}>
            <Grid container direction='row'>
                <Grid item xs={1} display='flex' justifyContent='center' alignItems='center'>   
                    <IconButton component='button' onClick={() => props.handleClick()} sx={{display:'flex', justifyContent:'center', alignItems:'center', p:0, color:"#fff"}}>
                        <CreateNewFolderIcon sx={{ width:60, height:60}}></CreateNewFolderIcon>
                        <Input type="file" onChange={(e) => props.handleFileChange(e)} ref={props.fileInput} id="anex-chat-file" style={{display:'none'}}/>
                    </IconButton>                               
                </Grid>
                <Grid item xs={9}>
                    <TextField
                        id="input-field-chat"
                        inputRef={props.chatField}
                        fullWidth
                        placeholder={"Write your message"}
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
                <Grid item xs={2} sx={{display:'flex', justifyContent:'center', alignItems:'center', p:0}}>
                    <Button type={'submit'}>
                        <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', p:2}}>
                            <Grid item xs={10} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <Typography>Send</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                                <SendIcon/>
                            </Grid>
                        </Grid>
                    </Button>
                </Grid>
            </Grid>
        </FormControl> 
    )
}

export default SearchForm;