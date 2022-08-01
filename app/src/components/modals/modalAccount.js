import React, { useRef } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ModalMUI from '@mui/material/Modal';
import { FormControl, TextField, Grid } from "@mui/material";
import Button from "../UI/buttons/button";

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


// What should be done: have a alert play after closing if the operation went alright
const ModalAccount = (props) => {
  // Refs are used for the form inputs
  const usernameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  // const retypeField = useRef(); Disabled for now

  // Send data to server
  function sendNewUserRequest(event) {
    event.preventDefault();

    // The data
    const userData = { data : { username: usernameField.current.value, email: emailField.current.value, password: passwordField.current.value} };

    fetch('/api/sys/new_user', {
        method: 'POST', 
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(userData) 
    });

    // Clear the fields
    usernameField.current.value = '';
    emailField.current.value = '';
    passwordField.current.value = '';
    
    // Close modal
    props.onClose();
  }

  return (
    <React.Fragment>
       <ModalMUI
            open={props.open}
            onClose={props.onClose}
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
              <FormControl component="form" onSubmit={sendNewUserRequest} sx={{width:"100%",pt:2}}>
                <Grid container direction='row'>
                  <Grid item xs={6} p={2}>
                    <Typography>
                      Username
                    </Typography>
                    <TextField
                      id="input-field-username"
                      inputRef={usernameField}
                      fullWidth
                      placeholder={"Type your Username"}
                      InputLabelProps={{
                          sx: { color: '#000'}
                      }}
                      sx={{
                          input: { // set the input styles and autofill
                              color: '#000',
                              "&:-webkit-autofill": {
                                WebkitBoxShadow: "0 0 0 1000px #fff inset",
                                WebkitTextFillColor: '#000 !important'
                              }
                          },
                          fieldset: {
                              borderColor: '#000'
                          },
                          '&:hover fieldset': {
                              borderColor: (theme) => `${theme.palette.primary.main} !important`
                          },
                          '&.Mui-focused input': { // - Set the Input border when parent is focused 
                              borderColor: '#fff !important',
                          },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} p={2}>
                    <Typography>
                      Email
                    </Typography>
                    <TextField
                      id="input-field-email"
                      inputRef={emailField}
                      fullWidth
                      placeholder={"Type your Email"}
                      InputLabelProps={{
                          sx: { color: '#000'}
                      }}
                      sx={{
                          input: { // set the input styles and autofill
                              color: '#000',
                              "&:-webkit-autofill": {
                                WebkitBoxShadow: "0 0 0 1000px #fff inset",
                                WebkitTextFillColor: '#000 !important'
                              }
                          },
                          fieldset: {
                              borderColor: '#000'
                          },
                          '&:hover fieldset': {
                              borderColor: (theme) => `${theme.palette.primary.main} !important`
                          },
                          '&.Mui-focused input': { // - Set the Input border when parent is focused 
                              borderColor: '#fff !important',
                          },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} p={2}>
                    <Typography>
                      Password
                    </Typography>
                    <TextField
                      id="input-field-password"
                      inputRef={passwordField}
                      fullWidth
                      placeholder={"Type your Password"}
                      InputLabelProps={{
                          sx: { color: '#000'}
                      }}
                      sx={{
                          input: { // set the input styles and autofill
                              color: '#000',
                              "&:-webkit-autofill": {
                                WebkitBoxShadow: "0 0 0 1000px #fff inset",
                                WebkitTextFillColor: '#000 !important'
                              }
                          },
                          fieldset: {
                              borderColor: '#000'
                          },
                          '&:hover fieldset': {
                              borderColor: (theme) => `${theme.palette.primary.main} !important`
                          },
                          '&.Mui-focused input': { // - Set the Input border when parent is focused 
                              borderColor: '#fff !important',
                          },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} p={2}>
                    <Typography>
                      Retype Password
                    </Typography>
                    <TextField
                      id="input-field-password-check"
                      //inputRef={retypeField} Disabled for now
                      fullWidth
                      placeholder={"Retype your Password"}
                      InputLabelProps={{
                          sx: { color: '#000'}
                      }}
                      sx={{
                          input: { // set the input styles and autofill
                              color: '#000',
                              "&:-webkit-autofill": {
                                WebkitBoxShadow: "0 0 0 1000px #fff inset",
                                WebkitTextFillColor: '#000 !important'
                              }
                          },
                          fieldset: {
                              borderColor: '#000'
                          },
                          '&:hover fieldset': {
                              borderColor: (theme) => `${theme.palette.primary.main} !important`
                          },
                          '&.Mui-focused input': { // - Set the Input border when parent is focused 
                              borderColor: '#fff !important',
                          },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center', mt: 5}}>
                    <Button color={"#1976d2"} type={'submit'} variant={'outlined'} sx={{ '&:hover': {borderColor: '#1976d2'}, m:1}}>
                        <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', p:1}}>
                            <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Typography>Join Direct</Typography>
                            </Grid>
                        </Grid>
                    </Button>
                    <Button color={"#1976d2"} onClick={props.onClose} variant={'outlined'} sx={{ '&:hover': {borderColor: '#1976d2'}, ml:3}}>
                        <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', p:1}}>
                            <Grid item xs={12}>
                                <Typography>Close</Typography>
                            </Grid>
                        </Grid>
                    </Button>
                  </Grid>
                </Grid>
            </FormControl> 
          </Box>
        </ModalMUI>
    </React.Fragment>
  );
}

export default ModalAccount;