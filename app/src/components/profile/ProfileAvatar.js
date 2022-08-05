import {IconButton, FormControl} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Input from "../form/input";
import { useState, useRef, useContext, useEffect } from "react";
import Message from "../../context/message";

const ProfileAvatar = (props) => {
    const [image, setImage] = useState(null);
    const formRef = useRef();
    const MessageCtx = useContext(Message);
    // Used to transform the file object into a file stream
    const blobToData = (blob) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => resolve(reader.result);
        })
    }

    // Add the file to the memory when the user select it
    const handleFileChange = async event => {
        const data = event.target.files[0];
        console.log(data)
        setImage(await blobToData(data));
        // console.log(image)
        // Submit the form
        formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
        );
    }

    const submitHandler = event => {
        event.preventDefault();
        const imageData = {data: { id:MessageCtx.userProvider.profile_id, image:image}};
        // Need to check if user is logged later
        fetch('/api/sys/newProfilePic', {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(imageData) 
        })
        .then(res=> res.json())
        .then(res=> {
            console.log(res);
            MessageCtx.userProvider.profilePicture = image;
        }
        )
        .catch(err=>console.log(err))
    }

    useEffect( () => {
        const identifier = setTimeout( () => {
        return () => {
            clearTimeout(identifier);
        };
      })
    },[MessageCtx.userProvider?.profilePicture])

    return (
        <FormControl component="form" onSubmit={submitHandler} ref={formRef} sx={{position:'absolute', display:"flex", justifyContent:'center', alignItems:'center'}}>
            <IconButton component='button' sx={{position:'absolute'}}>
                <Input type="file" onChange={(e) => handleFileChange(e)} ref={props.fileInput} id="anex-profile-picture" style={{display:'none'}}/>
                <CameraAltIcon sx={{position:'absolute', pointerEvents:'none', width:100, height:100, color:"blue"}}></CameraAltIcon >
            </IconButton>
        </FormControl>
    )
}

export default ProfileAvatar