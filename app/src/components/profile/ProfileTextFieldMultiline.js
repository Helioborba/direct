import { TextField} from "@mui/material";
import React, {forwardRef} from 'react';
const ProfileTextFieldMultiline = forwardRef((props, ref) => {
    return (
        <TextField
            id="input-field-chat"
            inputRef={ref}
            multiline
            rows={2}
            maxRows={props.maxRows || 2} // default is 4
            fullWidth
            InputProps={{
                sx: { color: '#fff'}
            }}
            placeholder={props.username}
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