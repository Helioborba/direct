import { Alert, AlertTitle, Slide } from "@mui/material";

/**
 * 
 * Used for success alerts (green)
 */
const SuccessAlert = (props) => {
    
    return (
        <Slide in={true}>
            <Alert severity="success">
                <AlertTitle>{props.title}</AlertTitle>
                {props.children}
            </Alert>
        </Slide>
    )
}

export default SuccessAlert;