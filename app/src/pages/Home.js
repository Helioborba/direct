import { useContext, useEffect, useState, useRef } from "react";
import {Box, Typography, Grid} from "@mui/material";
import Nav from "../components/nav/nav.js";
import {Avatar} from "@mui/material";
import { useSpring, animated } from 'react-spring'
import Button from "../components/UI/buttons/button.js";
// Problema com o SVG: Ele é grande demais e esta ofuscando a nav 
const Home = (props) => {
    
    function SVG() {
        const [flip, setFlip] = useState(false);
        const [current, setCurrent] = useState(0);
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
        
        // const [pathOpacity, setPathOpacity] = useState(false);
        // const props = useSpring({
        //     to: { opacity: 0 },
        //     from: { opacity: 1 },
        //     reset: true,
        //     reverse: pathOpacity,
        //     delay: 2000,
        //     //config: config.molasses,
        //     onRest: () => setPathOpacity(!pathOpacity),
        // })
        // function trig(x) {
        //     x.from(1200)
        //     x.to(x => (1 - x) * 1195)
        // }
        return (
          <animated.svg
            style={{overflow:'visible', position:"absolute", top:290, width: 1200, height: 1 }}
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
            <Nav></Nav>
            <Box  sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="column" wrap="nowrap"  sx={{backgroundColor:"#222",  height:"88vh", borderRadius:{xs:0, lg:3} }}>
                    <Grid item xs={3} sx={{ position:'relaive', display:'flex', justifyContent:"center", alignItems:"center"}} >
                        {/* <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                    <Avatar>S</Avatar> */}
                        <Typography variant='h1'>Welcome to Direct</Typography>
                        {SVG()}
                    </Grid>
                    <Grid item container xs={7} sx={{display:'flex', justifyContent:"space-between", p:5, alignItems:"center"}}>
                        <Grid item  sx={{display:'flex', flexDirection:"column", justifyContent:"start", alignItems:"center"}}>
                            <Typography variant="h2">What is Direct?</Typography>
                            <Typography variant="p" sx={{fontSize:'1.2em'}}>Direct is a chat app built around the user, with the user in mind.</Typography>
                            <Typography variant="p">Talk with friends, chat in groups, send funny images or work sheets to colleagues, find a group or a topic in rise.</Typography>
                            <Typography>Everything you need, in one place.</Typography>
                            <Button>Join Direct</Button>
                        </Grid>
                    </Grid>
                    <Grid item container xs={2} sx={{display:'flex', justifyContent:"end", p:5, alignItems:"center"}}>
                        <Grid item sx={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <Typography variant="h2">One word of Direct</Typography>
                            <Typography variant="p">We care for your personal data</Typography>
                            <Typography variant="p">We care to make the userr find what he likes</Typography>
                            <Typography variant="p">We care to make the experience of enjoying a chat multinational</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;
