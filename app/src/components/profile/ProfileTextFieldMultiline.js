import { TextField} from "@mui/material";
import React, {forwardRef} from 'react';
const ProfileTextFieldMultiline = forwardRef((props, ref) => {
    return (
        <TextField
            id="input-field-chat"
            inputRef={ref}
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
    )
})

export default ProfileTextFieldMultiline;