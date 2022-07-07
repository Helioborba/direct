import { Grid, Box, Avatar, Typography } from "@mui/material";

const ChatUserBox = (props) => {
    
    return (
        <Grid item sx={{ display:'flex', width:"100%", justifyContent:'baseline'}}>
            <Box sx={{position:"relative",mt:1,padding: 2, borderRadius:2, color:'#000', maxWidth:"70%", backgroundColor:"#bbdefb"}}>
                <Avatar sx={{position:"absolute", left:-50, top:-20}}>S</Avatar>
                <Typography>{props.children}</Typography>
            </Box>
        </Grid>
    )
}

export default ChatUserBox;