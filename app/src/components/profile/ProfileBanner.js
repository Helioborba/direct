import {IconButton, Box} from "@mui/material";
import Input from "../form/input";
import { useState, useRef, useContext, useEffect } from "react";
import Message from "../../context/message";
import defaultBanner from "../../others/images/banner.jpg";

const ProfileBanner = (props) => {
    const [banner, setBanner] = useState(null);
    const fileInput = useRef(null);
    const MessageCtx = useContext(Message);

    // This should become a function, as it is the universal way of handling picture data
    // Used to transform the file object into a file stream
    const blobToData = (blob) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => resolve(reader.result);
        })
    }

    // send file to api
    const handleFileChange = async event => {
        const data = event.target.files[0];
        
        const processedBanner = await blobToData(data);
        setBanner(processedBanner);
        // Send data
        const bannerData = {data: { id:MessageCtx.userProvider.profile_id, banner: processedBanner }};

        fetch('/api/sys/newBannerPic', {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(bannerData) 
        })
        .then(res=> res.json())
        .then(res=> {
            MessageCtx.userProvider.banner = processedBanner;
        })
        .catch(err=>console.log(err))
    }

    const handleClick = () => {
        fileInput.current.click();
    }

    return(
        <Box component='button' onClick={handleClick} sx={{position:'absolute', p:0, m:0, border:'none', borderRadius:3}}>
            <Input type="file" onChange={(e) => handleFileChange(e)} ref={fileInput} id="anex-profile-picture" style={{display:'none'}}/>
            <Box sx={{backgroundImage: `url(${banner ? banner : MessageCtx.userProvider?.banner ? MessageCtx.userProvider?.banner : defaultBanner })`, width:"750px", height:"250px", borderRadius:3, display:"flex", justifyContent:'center', alignItems:'center'}}></Box>
            {/* That is quite the tenary, so what happens is that we check if the banner state exists */}
            {/* if it does, returns the banner, else checks if the UserProvider has a old banner */}
            {/* lastly, if no condition is achieved, send the default banner*/}
        </Box>
    )
}

export default ProfileBanner;