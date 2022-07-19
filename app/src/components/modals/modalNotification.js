import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


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
        <div>
        <Dialog
            open={props.openNotification}
            onClose={props.onCloseNotification}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Notifications</DialogTitle>
            <DialogContent dividers={true}>
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
                {[...new Array(50)]
                .map(
                    () => `Row de dados`,
                )
                .join('\n')}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.onCloseNotification}>Exit</Button>
            {/* <Button onClick={props.onCloseNotification}>Update</Button> */}
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default ModalNotification;