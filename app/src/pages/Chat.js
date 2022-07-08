import { useContext, useEffect, useState, useRef } from "react";
import {Box, Typography, Grid} from "@mui/material";
import banner from "../others/images/banner.jpg";
import Nav from "../components/nav/nav.js";
import { FormControl, TextField, IconButton } from "@mui/material";
import Message from '../context/message.js';
import {Avatar} from "@mui/material";
import Button from "../components/UI/buttons/button";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import SendIcon from '@mui/icons-material/Send';
import Input from "../components/form/input";

// Caixas do chat
import ChatUserBox from "../components/chatBoxes/user";
import ChatOthersBox from "../components/chatBoxes/others";

const Chat = (props) => {
    const [connection] = useState(new WebSocket("ws://localhost:5000/ws"));
    const [currentMessages, setCurrentMessages] = useState([]);
    const [reload, setReload] = useState(false)
    const ctxMessage = useContext(Message);
    const chatField = useRef();

   
    // Preciso trabalhar no envio de imagens depois
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
    
    // Principal: a cada mensagem recebida do WebSocket, adiciona ao contexto e ao estado normal
    useEffect( () => {
        const identifier = setTimeout( () => {
            connection.onmessage = event => {
                // O context tem todos os dados recebidos do WebSocket; eles são JSONs (em string) contendo a mensagem e o user
                ctxMessage.messageProvider.push(JSON.parse(event.data)); // Transformar em object o json recebido
                setReload(!reload)

                // Parece que é necessário limpar o ultimo estado?
                // Na vdd, quando os dados são mudados dentro do useEffect, eles não trigam o re-render
                setCurrentMessages([]);
                setCurrentMessages(ctxMessage.messageProvider);
            }
        return () => {
            clearTimeout(identifier);
        };
      })
    },[reload, connection, ctxMessage.messageProvider, currentMessages])

    // Roda apenas quando a pessoa troca a pagina, assim mantemos os dados da conversa
    useEffect( () => {
        const identifier = setTimeout( () => {
            setCurrentMessages([]);
            setCurrentMessages(ctxMessage.messageProvider);
        return () => {
            clearTimeout(identifier);
        };
      })
    },[ctxMessage.messageProvider])

    // Enviar pelo websocket os dados
    function sendMessage(event) {
        event.preventDefault();
        const message = {message: chatField.current.value, name: 'User'}; // 'User depois vai virar o id do usuario'
        connection.send(JSON.stringify(message));
        chatField.current.value = '';
    }
    
   
    const componenteDados = () => { 
        // In case its still empty, this is a simple way of not breaking the app
        // if (!currentMessages) { 
        //     return ( 
        //         [null]
        //     )
        // }
    
        return (            
            currentMessages.map( (value, index) => {
                if (value.name === "User") {
                    return (
                        <ChatUserBox key={index}>{value.message}</ChatUserBox>
                    )
                } else {
                    return (
                        <ChatOthersBox key={index}>{value.message}</ChatOthersBox>
                    )
                }
            })
        )
    }

    // scrollbar customizada; deve virar um component em si depois.
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
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#333"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="row"  sx={{backgroundColor:"#222",  height:"88vh", borderRadius:{xs:0, lg:3} }}>
                    
                    {/* Avatar and Navigation */}
                    <Grid container item direction="column" xs={2}>
                        {/* Avatar */}
                        <Grid item display='flex' flexDirection='column' sx={{backgroundColor:"#222", borderTopLeftRadius:{xs:0, lg:15}, display:"flex", justifyContent:'center', alignItems:'center'}} xs={3}> 
                            <Avatar sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                        </Grid>
                        {/* Navi */}
                        <Grid item display='flex' flexDirection='column' xs={9} sx={{display:"flex", justifyContent:"flex-end", alignItems:'center', backgroundColor:"#222", borderBottomLeftRadius:{xs:0, lg:15}, p:5, boxShadow:'12px 0px 10px -5px rgba(10,10,10,0.2)'}}> 
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
                        <Grid item display='flex' flexDirection='column' xs={3} sx={{backgroundImage: `url(${banner})`, borderRadius:{xs:0, lg:3}, display:"flex", justifyContent:'center', alignItems:'center'}}> 
                            <Typography>Nova Otavian</Typography>
                        </Grid>
                        {/* Chat */} 
                        <Grid item container direction='column' wrap='nowrap'  xs={9} sx={{display:'flex', justifyContent:'space-between', maxHeight:'70vh', overflow:"hidden" }}> 
                            <Grid item container sx={{textAlign:"start", paddingY: 6, paddingX: 10, overflowY:'scroll', ...scrollBar}}>
                                {/* HERE IS THE MAIN CHAT BOXES */}
                                {componenteDados()}
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
                                            <Button onClick={sendMessage}>
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

export default Chat;
