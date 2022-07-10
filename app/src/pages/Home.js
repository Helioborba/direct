import { useContext, useEffect, useState, useRef } from "react";
import {Box, Typography, Grid} from "@mui/material";
import Nav from "../components/nav/nav.js";
import {Avatar} from "@mui/material";
import { useSpring, animated } from 'react-spring'

// Problema com o SVG: Ele é grande demais e esta ofuscando a nav 
const Home = (props) => {
    const POINTS = '200,10 250,190 160,210'
    function SVG() {
        const [flip, set] = useState(false)
        const { x } = useSpring({
            reset: true,
            reverse: flip,
            from: { x: 0 },
            x: 1,
            delay: 1000,
            config: { frequency: 10 },
            onRest: () => set(!flip),
        })
      
        return (
          <animated.svg
            style={{overflow:'visible',position:"absolute", width: 1200, height: 1000 }}
            
            //strokeWidth="2"
            //fill="white"
            //stroke="rgb(30, 30, 171)"
            //strokeLinecap="round"
            //strokeLinejoin="round"
            //strokeDasharray={156}
            //strokeDashoffset={x.to(x => (1 - x) * 156)}
            >
            <path d="M 0 600 q 600 100 1200 0" style={{stroke:'blue',fill:"#222",strokeWidth:5}} />
            <g stroke="black" strokeWidth="3" fill="red">
                <circle id="P-0-S" cx="0" cy="600" r="3" />
                <circle id="P-1" cx="300" cy="637" r="3" />
                <circle id="P-2-M" cx="600" cy="650" r="3" />
                <circle id="P-3" cx="900" cy="637" r="3" />
                <circle id="P-4-E" cx="1200" cy="600" r="3" />
            </g>
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
                    <Grid item xs={7} sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                    </Grid>
                    <Grid item xs={2} sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                        <Avatar>S</Avatar>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;
