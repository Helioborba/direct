import {IconButton, FormControl} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Input from "../form/input";

const ProfileAvatar = (props) => {
    
    // Used to transform the file object into a file stream
    const blobToData = (blob) => {
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(blob)
        })
    }

    const handleFileChange = async event => {
        const data = event.target.files[0];
        console.log(await blobToData(data));
    }

    const submitHandler = event => {
        event.preventDefault();
        const data = event.target.value;
        console.log(data)
        // fetch('/upload', {
        //     method: 'POST', 
        //     mode: 'cors',
        //     cache: 'no-cache',
        //     credentials: 'same-origin',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     redirect: 'follow',
        //     referrerPolicy: 'no-referrer', 
        //     body: JSON.stringify(data) 
        // });
        console.log(`Data sent.\n${data}`);
    }
    return (
        <FormControl component="form" onSubmit={submitHandler} sx={{position:'absolute', display:"flex", justifyContent:'center', alignItems:'center'}}>
            <IconButton component='button' sx={{position:'absolute'}}>
                <Input type="file" onChange={(e) => handleFileChange(e)} ref={props.fileInput} id="anex-profile-picture" style={{display:'none'}}/>
                <CameraAltIcon sx={{position:'absolute', pointerEvents:'none', width:100, height:100, color:"blue"}}></CameraAltIcon >
            </IconButton>
        </FormControl>
    )
}

export default ProfileAvatar