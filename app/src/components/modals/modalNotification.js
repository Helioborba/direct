import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Accordion from '../accordion/accordion';
// What should be done: have a alert play after closing if the operation went alright
// Welcome back! we have been waiting for you 
const ModalNotification = (props) => {
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (props.openNotification) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [props.openNotification]);

    return (
        <Box>
            <Dialog
                open={props.openNotification}
                onClose={props.onCloseNotification}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                PaperProps={{sx:{minWidth:'50vw'}}}
            >
                <DialogTitle id="scroll-dialog-title">Notifications</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText>
                        <Accordion></Accordion>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onCloseNotification}>Exit</Button>
                    {/* <Button onClick={props.onCloseNotification}>Update</Button> */}
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ModalNotification;