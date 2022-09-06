import { Alert, AlertTitle } from "@mui/material";
/**
 * 
 * Used for Informational errors
 */
const InfoAlert = (props) => {


    return (
        <Alert severity="info">
            <AlertTitle>{props.title}</AlertTitle>
            {props.children}
        </Alert>
    )
}

export default InfoAlert;