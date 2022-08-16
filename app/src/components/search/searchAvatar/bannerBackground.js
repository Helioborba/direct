import { Box } from "@mui/material";

const BannerBackground = (props) => {
    return (
        <Box 
            sx={{position:'absolute', 
            width:'100%', 
            height:"100%", 
            filter:"blur(1.2px)", 
            border: '1px solid #444',
            borderRadius:3, 
            backgroundImage:`url(${props.banner})`, 
            backgroundSize:'cover', 
            backgroundRepeat:'no-repeat', 
            backgroundPosition:'center', 
            ...props.sx}}>
        </Box>
    )
}

export default BannerBackground;