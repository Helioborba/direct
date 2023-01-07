import React, { useState, useEffect, useContext, useCallback } from "react";
import {Box, Grid, Typography,  Avatar, Button} from "@mui/material";
import Message from "../../context/message";
import ErrorAlert from "../alerts/errorAlert";
import InfoAlert from "../alerts/infoAlert";

const UserMainInner = (props) => {
    const [alertMessage, setAlertMessage] = useState(false);
    const msgCtx = useContext(Message);

    function addFriend(event) {
        const data = {data: { id: msgCtx.userProvider.id, targetId: props.id }}

        if ( props.id !== null && msgCtx.userProvider?.id !== undefined) { // this validation should actually be done by the backend, and should not be that needed if the user can't add himself/is not logged 
            fetch('/api/sys/addFriend', {
                method:"post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    setAlertMessage({type:'error', title:'Cannot add friend', text: res.message});
                } else {
                    setAlertMessage({type:'success', title:'Friend Request', text:"A friend request has been sent successfully!"});
                }
            })
            .catch(err => {console.log(err)});
        } else {
            setAlertMessage({type: 'info', title:'Cannot add friend', text: 'you are not logged in'}) // This is not necessary actually, the anonymous user will not be able to actually see the buttons later on 
        }
    }

    return(
        <React.Fragment>
            {/* Alerts, this should become a component in itself (it will repeat in most places) */}
            {alertMessage?.type === 'error' ? <ErrorAlert title={alertMessage?.title}>{alertMessage?.text}</ErrorAlert> : null}
            {alertMessage?.type === 'info' ? <InfoAlert title={alertMessage?.title}>{alertMessage?.text}</InfoAlert> : null}
            {alertMessage?.type === 'success' ? <InfoAlert title={alertMessage?.title}>{alertMessage?.text}</InfoAlert> : null}

            <Grid container item sx={{ position:'relative', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Grid container direction="row"  sx={{backgroundColor:"#222", borderRadius:{xs:0, lg:3} }}>
                        <Typography>{props.username}</Typography>
                    </Grid>
                </Box>
                <Grid container item xs={12} sx={{my:4}}>
                    <Grid container item xs={6} sx={{ position:'relative', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Avatar src={props.src} sx={{fontSize:"5em", width:200, height:200}}></Avatar>
                    </Grid>
                    <Grid container item xs={6} sx={{ position:'relative', display:'flex', justifyContent:'center'}}>
                        <Grid item xs={12}><Typography>Groups</Typography></Grid>
                        <Grid container direction="column" item xs={12}>
                            <Grid item>
                                <Typography>frerfffw</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>ewfwwefwef</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>cxzczxccxzxczx</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs={12}>
                            <Grid item>
                                <Typography>frerfffw</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>ewfwwefwef</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>cxzczxccxzxczx</Typography>
                            </Grid>
                        </Grid>
                        
                        {/* above is the 'title' */}
                    </Grid>
                </Grid>
                <Grid container item xs={12} sx={{my:4}}>
                    <Grid container item xs={6} sx={{ position:'relative', display:'flex', justifyContent:'center'}}>
                        <Grid item xs={12}>
                            <Typography>Biography</Typography>
                        </Grid>
                        <Grid container direction="column" item xs={12}>
                            <Grid item>
                                <Typography>
                                {`When did the human race start the need for violence? 
                                As we learned to build tools, why did we learn to build tools? 
                                back in the past when you did not have machines
                                `}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item direction='column' xs={12} sx={{p:10}}>
                            <Button onClick={() => addFriend()}>Add User</Button>
                            <Button>Block User</Button>
                        </Grid>
                        {/* above is the 'title' */}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default UserMainInner;