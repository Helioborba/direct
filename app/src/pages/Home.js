import { useContext, useEffect, useState, useRef } from "react";
import {Box, Typography, Grid} from "@mui/material";
import Nav from "../components/nav/nav.js";
import {Avatar} from "@mui/material";
import { useSpring, animated } from 'react-spring';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import Button from "../components/UI/buttons/button.js";
import ModalMUI from '@mui/material/Modal';
import Modal from "../components/modals/modal.js";
// Problema com o SVG: Ele é grande demais e esta ofuscando a nav 
const Home = (props) => {
    const [open, setOpen] = useState(false);

    function showModal() {
        setOpen(!open);
    }

    function SVG() {
        const [flip, setFlip] = useState(false);
        const { x } = useSpring({
            reset: true,
            reverse: flip,
            from: { x: 3 },
            x: 1,
            delay: 1000,
            config: { frequency:2},
            onRest: () => {
                setFlip(!flip)
            },
        })
        
        return (
          <animated.svg
            style={{overflow:'visible',  top:290, width: 1200, height: 1 }}
            strokeWidth="2"
            stroke="rgb(255, 30, 171)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={1200}
            strokeDashoffset={
               x.to(x => (1 - x) * 1195) 
            }
            >
            <path d="M 0 0 q 600 100 1200 0" style={{stroke:'#1976d2', fill:"#222", fillOpacity:"0",  strokeWidth:5}} />
          </animated.svg>
        )
    }

    useEffect( () => {
        const identifier = setTimeout( () => {
        return () => {
            clearTimeout(identifier);
        };
      })
    },[])


    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#333"}}>
            {/* <ModalMUI
                open={open}
                onClose={showModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > */}
                {/* <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </ModalMUI> */}
            <Modal open={open} showModal={showModal}></Modal>
            <Nav></Nav>
            <Box  sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="column" wrap="nowrap"  sx={{backgroundColor:"#222",  minHeight:"88vh", pt:2, borderRadius:{xs:0, lg:3} }}>
                    <Grid item xs={12} sx={{ position:'relative', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                        {/* <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                    <Avatar>S</Avatar> */}
                        <Grid item  sx={{display:'flex', flexDirection:"column", justifyContent:"start", alignItems:"center"}}>
                            <Typography variant='h1'>Welcome to Direct</Typography>
                        </Grid>
                        <Grid item  sx={{display:'flex', flexDirection:"column", justifyContent:"start", alignItems:"center"}}>
                            {SVG()}
                        </Grid>
                    </Grid>
                    <Grid item container xs={7} sx={{display:'flex', justifyContent:"space-between", p:5,mt:20, alignItems:"center"}}>
                        <Grid item xs={6} sx={{display:'flex', flexDirection:"column", justifyContent:"start", alignItems:"center"}}>
                            <Typography variant="h2">What is Direct?</Typography>
                            <Typography variant="p" sx={{fontSize:'1.2em'}}>Direct is a chat app built around the user, with the user in mind.</Typography>
                            <Typography variant="p">Talk with friends, chat in groups, send funny images or work sheets to colleagues, find a group or a topic in rise.</Typography>
                            <Typography variant="p">We make everything easy so that our users may focus on their social life</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{display:'flex', flexDirection:"column", justifyContent:"start", alignItems:"center"}}>
                            <Typography variant="h2">One word of Direct</Typography>
                            <Typography variant="p">We care for your personal data</Typography>
                            <Typography variant="p">We care to help our users to find what they like</Typography>
                            <Typography variant="p">We care to make the experience of enjoying a chat multinational</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={2} sx={{display:'flex', justifyContent:"space-between", p:5, alignItems:"center"}}>
                        <Grid item xs={6} sx={{display:'flex', justifyContent:"center", alignItems:"center"}}>
                            <ChatIcon sx={{ width: 100, height: 100, color:"#1976d2"}}/>
                        </Grid>
                        <Grid item xs={6} sx={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <SendIcon sx={{ width: 100, height: 100, color:"#1976d2"}}/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} sx={{display:'flex', justifyContent:"center", p:5, mt:20, alignItems:"center"}}>
                        <Grid item  sx={{display:'flex', flexDirection:"column", justifyContent:"start", alignItems:"center"}}>
                            <Typography variant="h2">Ready to be Direct?</Typography>
                            <Typography variant="p" sx={{fontSize:'1.2em'}}> Various groups awaits you! come and chat with everyone, even the creators of Direct</Typography>
                            <Typography>Everything you need, in one place.</Typography>
                            <Button color={'#1976d2'} onClick={() => showModal()}>Join Direct</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;
