import React, { useState, useEffect, useContext } from "react";
import {Box, Grid, Typography,  Avatar, Button} from "@mui/material";
import Message from "../../context/message";

const UserMain = (props) => {
    const [src, setSrc] = useState(null);

    // used for adding a friend
    const [id, setId] = useState(null);
    const msgCtx = useContext(Message);

    function fetchUser() {
        const data = {data: { username: props.username}}
        fetch('/api/sys/findProfile', {
            method:"post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            setSrc(res.profilePicture);
            setId(res.id);
            console.log(res);
        })
        .catch(err => {console.log(err)});
    }

    function addFriend(event) {
        const data = {data: { id: msgCtx.userProvider.id, targetId: id }}
        console.log(data)
        if ( id != null && msgCtx.userProvider?.id != undefined) {
            fetch('/api/sys/addFriend', {
                method:"post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
            .catch(err => {console.log(err)});
        } else {
            console.log('Cannot add')
        }
    }
    
    useEffect( () => {
        const identifier = setTimeout( () => {
        fetchUser();
        return () => {
            clearTimeout(identifier);
        };
      })
    },[fetchUser])

    return(
        <React.Fragment>
            <Grid container item sx={{ position:'relative', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Grid container direction="row"  sx={{backgroundColor:"#222", borderRadius:{xs:0, lg:3} }}>
                        <Typography>{props.username}</Typography>
                    </Grid>
                </Box>
                <Grid container item xs={12} sx={{my:4}}>
                    <Grid container item xs={6} sx={{ position:'relative', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Avatar src={src} sx={{fontSize:"5em", width:200, height:200}}></Avatar>
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

export default UserMain;


