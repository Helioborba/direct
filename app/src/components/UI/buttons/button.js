import { Button } from "@mui/material";

/**
 * Accepts the SX as a object and onClick function
 */
const Btn = (props) => {
    
    return (
        <Button sx={{ color:"#fff", ':hover': { color:(theme) => `${theme.palette.primary.main} !important`, backgroundColor: `rgba(200,200,200,0.04)`}, ...props.sx }} onClick={props.onClick}>{props.children}</Button>
    )
}

export default Btn;