import React, { useContext, useEffect, useState, useRef } from "react";
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
  bgcolor: '#222',
  border: '2px solid #000',
  boxShadow: 24,
  color: 'white',
  p: 4,
};


// What should be done: have a alert play after closing if the operation went alright
// Welcome back! we have been waiting for you 
const ModalLogin = (props) => {
  // Refs are used for the form inputs
  const usernameField = useRef();
  const passwordField = useRef();

  // Send data to server
  function sendLoginRequest(event) {
    event.preventDefault();

    // The data
    const userData = { data : { username: usernameField.current.value, password: passwordField.current.value} };
    
    fetch('/api/sys/login', {
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
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch( err => console.log(err));

    // Clear the fields
    usernameField.current.value = '';
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
                <Typography id="modal-modal-title" variant="h6" color={'white'} component="h2">
                    Log into Direct
                </Typography>
                <Typography id="modal-modal-description" color={'white'}  sx={{ mt: 2 }}>
                    Type your account information to get right back in
                </Typography>
                <FormControl component="form" onSubmit={sendLoginRequest} sx={{width:"100%",pt:2}}>
                  <Grid container direction='row'>
                    <Grid item xs={6} p={2}>
                      <Typography color={'white'}>
                        Username
                      </Typography>
                      <TextField
                        id="input-field-username"
                        inputRef={usernameField}
                        fullWidth
                        placeholder={"Type your Username"}
                        InputLabelProps={{
                            sx: { color: '#fff'}
                        }}
                        sx={{
                            input: { // set the input styles and autofill
                                color: '#fff',
                                "&:-webkit-autofill": {
                                  WebkitBoxShadow: "0 0 0 1000px #222 inset",
                                  WebkitTextFillColor: '#fff !important'
                                }
                            },
                            fieldset: {
                                borderColor: '#fff'
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
                        <Typography color={'white'} >
                            Password
                        </Typography>
                        <TextField
                            id="input-field-password"
                            inputRef={passwordField}
                            fullWidth
                            placeholder={"Type your Password"}
                            InputLabelProps={{
                                sx: { color: '#fff'}
                            }}
                            sx={{
                                input: { // set the input styles and autofill
                                    color: '#fff',
                                    "&:-webkit-autofill": {
                                    WebkitBoxShadow: "0 0 0 1000px #222 inset",
                                    WebkitTextFillColor: '#fff !important'
                                    }
                                },
                                fieldset: {
                                    borderColor: '#fff'
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
                      <Button type={'submit'} variant={'outlined'} sx={{ '&:hover': {borderColor: '#1976d2'}, m:1}}>
                          <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', p:1}}>
                              <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                  <Typography>Login</Typography>
                              </Grid>
                          </Grid>
                      </Button>
                      <Button onClick={props.onClose} variant={'outlined'} sx={{ '&:hover': {borderColor: '#1976d2'}, ml:3}}>
                          <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', p:1}}>
                              <Grid item xs={12}>
                                  <Typography>Go back</Typography>
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

export default ModalLogin;