import { Button } from "@mui/material";

/**
 * Accepts the SX as a object
 */
const Button = (props) => {

    return (
        <Button sx={{':hover': {color:"white",  backgroundColor: `rgba(200,200,200,0.04)`}, ...props.sx }} onClick={props.onClick}></Button>
    )
}

export default Button;