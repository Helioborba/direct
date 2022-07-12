import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ModalMUI from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  height: '50vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Modal = (props) => {

  return (
    <React.Fragment>
       <ModalMUI
            open={props.open}
            onClose={props.showModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create Account
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    To create your account in Direct we need the following information:
                </Typography>
            </Box>
        </ModalMUI>
    </React.Fragment>
  );
}

export default Modal;