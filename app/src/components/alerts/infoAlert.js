import { Alert, AlertTitle, Slide } from "@mui/material";
/**
 * Used for Informational errors
 */
const InfoAlert = (props) => {


    return (
        <Slide in={true}>
            <Alert severity="info" >
                <AlertTitle>{props.title}</AlertTitle>
                {props.children}
            </Alert>
        </Slide>
    )
}

export default InfoAlert;