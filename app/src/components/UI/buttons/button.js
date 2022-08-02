import { Button } from "@mui/material";

/**
 * Custom button based on MUI
 * Accepts the SX as a object and onClick function
 */
const Btn = (props) => {
    if(props.component) {
        console.log("Warning at button.js Line 9: THIS IS NOT A MATERIAL UI ROOT BUTTON.")
    }
    return (
        <Button sx={{ color: props?.color || "#fff", ':hover': { color:props?.color ? "#49ACF0" : (theme) => `${theme.palette.primary.main} !important`, backgroundColor: `rgba(200,200,200,0.04)`}, ...props.sx }} type={props.type} variant={props.variant || "text"} onClick={props.onClick}>{props.children}</Button>
    )
}

export default Btn;