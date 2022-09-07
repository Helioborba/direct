import { Alert, AlertTitle, Slide } from "@mui/material";

/**
 * Used for errors only
 */
const ErrorAlert = (props) => {
    
    return (
        <Slide in={true}>
            <Alert severity="error">
                <AlertTitle>{props.title}</AlertTitle>
                {props.children}
            </Alert>
        </Slide>
    )
}

export default ErrorAlert;