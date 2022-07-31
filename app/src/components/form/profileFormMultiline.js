import {Typography, Grid} from "@mui/material";
import { FormControl, TextField, IconButton } from "@mui/material";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import Input from "./input.js";

const ProfileFormMultiline = (props) => {
    return (
        <FormControl component="form" onSubmit={props.sendMessage} sx={{width:"100%"}}>
            <Grid container direction='row'>
                <TextField
                    id="input-field-chat"
                    inputRef={props.chatField}
                    multiline
                    maxRows={props.maxRows || 4} // default is 4
                    fullWidth
                    placeholder={props.username || '\n\n'} // the new lines help give the status a bit of 'multiline' sentiment
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
        </FormControl> 
    )
}

export default ProfileFormMultiline;