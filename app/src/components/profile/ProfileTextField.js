import {TextField} from "@mui/material";
import { forwardRef } from "react";

const ProfileTextField= forwardRef((props, ref) => {
    return (
        <TextField
            id="input-field-chat"
            inputRef={ref}
            fullWidth
            label={props.label}
            placeholder={props.displayName || null}
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

export default ProfileTextField;