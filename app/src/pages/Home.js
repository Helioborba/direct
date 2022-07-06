import { useContext, useEffect, useRef } from "react";
import {Box, Typography, Grid} from "@mui/material";
import { styled } from '@mui/material/styles';
import banner from "../others/images/banner.jpg";
import Nav from "../components/nav/nav.js";
import { FormControl, TextField, IconButton } from "@mui/material";
import Message from '../context/message.js';
import {Avatar} from "@mui/material";
import Button from "../components/UI/buttons/button";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import SendIcon from '@mui/icons-material/Send';
import Input from "../components/form/input";

const Home = (props) => {
    const ctxCanvas = useContext(Message);

    const chatField = useRef();
    const canvasRef = useRef();
    ctxCanvas.canvasProvider = canvasRef;
    
    // file input
    const fileInput = useRef(null);

    const handleClick = () => {
        fileInput.current.click();
    }

    const handleFileChange = event => {
        const data = event.target.value;
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

    // get the data from input of city
    function sendMessage(event) {
        event.preventDefault();
        const message = {message: chatField.current.value}
        // fetch('/sendMessage', {
        //     method: 'POST', 
        //     mode: 'cors',
        //     cache: 'no-cache',
        //     credentials: 'same-origin',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     redirect: 'follow',
        //     referrerPolicy: 'no-referrer', 
        //     body: JSON.stringify(message) 
        // });
        console.log(message)
        chatField.current.value = '';
    }
    
    // used for the canvas draw and for each time the page goes to another one
    // Careful here, the marches are also drawn.
    // useEffect( () => {
    //     const identifier = setTimeout( () => {
    //         // Its probably not a good idea to perform such a memory heavy operation here inside this use effect to get the nodes
    //         ctxNations.canvasNodesCurrentHandler(draw(canvasRef,ctxNations.canvasNodes))
    //         drawLine(canvasRef,ctxCanvas.currentAtMarch);
    //         //drawLine(ctxCanvas.canvasProvider);
    //         // draw canvas and create the nodes
    //     return () => {
    //         clearTimeout(identifier);
    //     };
    //   })
    // },[])
   
    // used for keeping track of the movements, based on the clock
    // useEffect( () => {
    //     const identifier = setTimeout( () => {
    //         drawLine(canvasRef,ctxCanvas.currentAtMarch);
    //     return () => {
    //         clearTimeout(identifier);
    //     };
    //   })
    // },[ctxClock.clockProvider])

    // const componenteDados = () => { 
    //     // In case its still empty
    //     if (!ctxClock.clockProvider) {
    //         return ( 
    //             <Box>
    //                 <Typography>Month: </Typography> 
    //                 <Typography>Day: </Typography> 
    //                 <Typography>Year: </Typography> 
    //             </Box>
    //         )
    //     }
    //     return ( 
    //         <Box>
    //             <Typography>{`Month: ${ctxClock.clockProvider.monthName}`}</Typography> 
    //             <Typography>{`Day: ${ctxClock.clockProvider.day}`}</Typography> 
    //             <Typography>{`Year: ${ctxClock.clockProvider.year}`}</Typography> 
    //         </Box>
    //     )
    // }

    // <IconButton component='span' for="myInputFile" sx={{display:'flex', justifyContent:'center', alignItems:'center', p:0, color:"#fff"}}>
    //     <CreateNewFolderIcon sx={{width:60, height:60}}></CreateNewFolderIcon>
    //     <Input type="file" name='myInputFile' id="myInputFile" sx={{display:'none'}}/>
    // </IconButton>   

    // Custom scrollbar, this should become a component in itself
    const scrollBar = {
        /* width */
        '::-webkit-scrollbar': {
            width: '10px',
            
        },
  
        /* Track */
        '::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 5px grey',
            borderTopLeftRadius:{xs:0, lg:15},
            borderBottomRightRadius:{xs:0, lg:15}
            
        },
           
        /* Handle */
        '::-webkit-scrollbar-thumb': {
            background: '#666',
            borderTopLeftRadius:{xs:0, lg:15},
            borderBottomRightRadius:{xs:0, lg:15}
        },
          
        /* Handle on hover */
        '::-webkit-scrollbar-thumb:hover': {
            background: '#333'
        }
    }
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:5}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="row"  sx={{backgroundColor:"#222",  height:"80vh", borderRadius:{xs:0, lg:3} }}>
                    {/* Avatar and Navigation */}
                    <Grid container item direction="column" xs={2}>
                        {/* Avatar */}
                        <Grid item display='flex' flexDirection='column' sx={{backgroundColor:"#111", borderTopLeftRadius:{xs:0, lg:15}, display:"flex", justifyContent:'center', alignItems:'center'}} xs={3}> 
                            <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                        </Grid>
                        {/* Navi */}
                        <Grid item display='flex' flexDirection='column' xs={9}  sx={{display:"flex", justifyContent:"flex-end", alignItems:'center', backgroundColor:"#111", borderBottomLeftRadius:{xs:0, lg:15}, p:5, boxShadow:'12px 0px 10px -3px rgba(10,10,10,0.2)'}}> 
                            <Grid item>
                                <Button>
                                    Go back
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Banner and Chat */}
                    <Grid container item direction="column" xs={10}>
                        {/* Banner */}
                        <Grid item display='flex' flexDirection='column' xs={3}  sx={{backgroundImage: `url(${banner})`, borderRadius:{xs:0, lg:3}, display:"flex", justifyContent:'center', alignItems:'center'}}> 
                            <Typography>Nova Otavian</Typography>
                        </Grid>
                        {/* Chat */} 
                        {/* Just a template for now, but the idea is solid */}
                        {/* Recall that theres a massive overflow problem here! need to implement the scroll down there  */}
                        <Grid item container direction='column' wrap='nowrap'  xs={9} sx={{display:'flex', justifyContent:'space-between', maxHeight:'70vh', overflow:"hidden" }}> 
                            <Grid item container sx={{textAlign:"start", paddingY: 6, paddingX: 10, overflowY:'scroll', ...scrollBar}}>
                                <Grid item sx={{display:'flex', width:"100%", justifyContent:'flex-end'}}>
                                    <Box sx={{position:"relative",mt:1, p: 2, borderRadius:2, color:'#000', maxWidth:"70%", backgroundColor:"#bbdefb"}}>
                                        <Avatar sx={{position:"absolute", right:-50, top:-20}}>S</Avatar>
                                        <Typography>How are you?</Typography>
                                    </Box>
                                </Grid>
                                <Grid item sx={{ display:'flex', width:"100%", justifyContent:'baseline'}}>
                                    <Box sx={{position:"relative",padding: 2, borderRadius:2, color:'#000', maxWidth:"70%", backgroundColor:"#bbdefb"}}>
                                        <Avatar sx={{position:"absolute", left:-50, top:-20}}>S</Avatar>
                                        <Typography>Good, and you?</Typography>
                                    </Box>
                                </Grid>
                                <Grid item sx={{ display:'flex', width:"100%", justifyContent:'flex-end'}}>
                                    <Box sx={{position:"relative", mt:1, p: 2, borderRadius:2, color:'#000', maxWidth:"70%", backgroundColor:"#bbdefb"}}>
                                        <Avatar sx={{position:"absolute", right:-50, top:-20}}>S</Avatar>
                                        <Typography>had to go to the grocery store buy some beer, however because of some soccer game that happened, they did not have any at all! in the end I had to buy some coke cuz it was the only thing they still had</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item sx={{display:'flex', borderTop:"1px solid #333", justifyContent:'center', alignItems:'center', p:2}}>
                                <FormControl component="form" onSubmit={sendMessage} sx={{width:"100%"}}>
                                    <Grid container direction='row'>
                                        <Grid item xs={1} display='flex' justifyContent='center' alignItems='center'>   
                                            <IconButton component='button' onClick={() => handleClick()} sx={{display:'flex', justifyContent:'center', alignItems:'center', p:0, color:"#fff"}}>
                                                <CreateNewFolderIcon sx={{width:60, height:60}}></CreateNewFolderIcon>
                                                <Input type="file" onChange={(e) => handleFileChange(e)} ref={fileInput} id="anex-chat-file" style={{display:'none'}}/>
                                            </IconButton>                               
                                        </Grid>
                                        <Grid item xs={9}>
                                            <TextField
                                                id="inpuy-field-city"
                                                inputRef={chatField}
                                                fullWidth
                                                placeholder={"Write your message"}
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
                                        <Grid item xs={2} sx={{display:'flex', justifyContent:'center', alignItems:'center', p:0}}>
                                            <Button type="submit">
                                                <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', p:2}}>
                                                    <Grid item xs={10} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                                        <Typography>Send</Typography>
                                                    </Grid>
                                                    <Grid item xs={2} sx={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                                                        <SendIcon/>
                                                    </Grid>
                                                </Grid>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </FormControl> 
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;
