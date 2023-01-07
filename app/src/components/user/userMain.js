import React, { useState, useEffect, useContext, useCallback } from "react";
import {Box, Grid, Typography,  Avatar, Button, CircularProgress} from "@mui/material";
import Message from "../../context/message";
import ErrorAlert from "../alerts/errorAlert";
import InfoAlert from "../alerts/infoAlert";
import UserMainInner from "./userMainInner";

// We have the user main in case we can't find the user, this way we can display each component rightfully
const UserMain = (props) => {
    // Source and ID states, this could be simplified into one
    const [loading, setLoading] = useState(true);
    const [src, setSrc] = useState(null);
    const [id, setId] = useState(null);

    const fetchUser = useCallback( () => {
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
            if(res.error == true) { // There's no player found
                setSrc(null);
                setId(null);
            } else {
                setSrc(res.profilePicture);
                setId(res.id);
            };
            setLoading(false);
        })
        .catch(err => {console.log(err)});
    }, [props.username])

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
            {loading ? <CircularProgress/> : id ? <UserMainInner src={src} id={id}/> :  <div>No profile found</div>}
        </React.Fragment>
    )
}

export default UserMain;


