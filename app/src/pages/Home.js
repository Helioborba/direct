import { useContext, useEffect, useState, useRef } from "react";
import {Box, Typography, Grid} from "@mui/material";
import Nav from "../components/nav/nav.js";
import {Avatar} from "@mui/material";
import { useSpring, animated } from 'react-spring'



const Home = (props) => {
    const springProps = useSpring({ to: { opacity: 0 }, from: { opacity: 1 } })
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#333"}}>
            <Nav></Nav>
            <animated.div style={springProps}>
                <Box  sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Grid container direction="column" wrap="nowrap"  sx={{backgroundColor:"#222",  height:"88vh", borderRadius:{xs:0, lg:3} }}>
                        <Grid item xs={3} sx={{ display:'flex', justifyContent:"center", alignItems:"center"}} >
                            {/* <Avatar>S</Avatar>
                            <Avatar>S</Avatar>
                            <Avatar>S</Avatar>
                            <Avatar>S</Avatar>
                            <Avatar>S</Avatar> */}
                            Welcome to Direct
                            
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
            </animated.div>
        </Box>
    )
}

export default Home;
