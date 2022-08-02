import {Grid, Typography, FormControl} from "@mui/material";
import React, {useRef} from "react";
import ProfileTextField from "./ProfileTextField";
import ProfileTextFieldMultiline from "./ProfileTextFieldMultiline";
import Button from "../UI/buttons/button.js";

const ModalProfile = (props) => {
    const nameRef = useRef();
    const introRef = useRef();
    const birthdayDayRef = useRef();
    const birthdayMonthRef = useRef();

    function sendData(event) {
        event.preventDefault();

        const data = {name: nameRef.current.value, intro: introRef.current.value, birthday: `${birthdayMonthRef.current.value}/${birthdayDayRef.current.value}` }; // 'User depois vai virar o id do usuario'
        console.log(data);

        // fetch('', {
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: data
        // })
        // .then(res => res.json())
        // .then(res => console.log(res))

        // Clear the form
        nameRef.current.value = '';
        introRef.current.value = '';
        birthdayMonthRef.current.value = '';
        birthdayDayRef.current.value = '';
    }

    return(
        <FormControl component="form" onSubmit={sendData} sx={{width:'100%', pr:4}}>
            <Grid container item xs={12} sx={{mt:4}}>
                <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                    <Grid item xs={2}>
                        <Typography>User ID:</Typography>
                    </Grid>
                    <Grid item xs={10} sx={{ display:'flex', alignItems:'center'}}>
                        <Typography>A number </Typography> 
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                    <Grid item xs={2}>
                        <Typography>Name: </Typography> 
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container direction='row' sx={{width:"100%"}}>
                            <ProfileTextField ref={nameRef}></ProfileTextField> 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                    <Grid item xs={2}>
                        <Typography>Introduction: </Typography> 
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container direction='row' sx={{width:"100%"}}>
                            <ProfileTextFieldMultiline ref={introRef}></ProfileTextFieldMultiline>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ display:'flex', alignItems:'center', p:4}}>
                    <Grid item xs={2}>
                        <Typography>Birthday: </Typography> 
                    </Grid>
                    <Grid item xs={1}>
                        <Grid container direction='row' sx={{width:"100%", pr:2}}>
                            <ProfileTextField label={"Month"} ref={birthdayDayRef}></ProfileTextField> 
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid container direction='row' sx={{width:"100%",pr:2}}>
                            <ProfileTextField label={"Day"} ref={birthdayMonthRef}></ProfileTextField> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item xs={12} sx={{mt:3, display:'flex', justifyContent:'center', alignItems:'center' }}>
                <Button variant={"outlined"} type={'submit'}>Save</Button>
            </Grid>
        </FormControl>
    )
}

export default ModalProfile;