import { Alert, AlertTitle } from "@mui/material";

/**
 * 
 * Used for errors only
 */
const ErrorAlert = (props) => {
    return (
        <Alert severity="error">
            <AlertTitle>{props.title}</AlertTitle>
            {props.children}
        </Alert>
    )
}

export default ErrorAlert;