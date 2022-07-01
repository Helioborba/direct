import { useContext, useEffect, useRef } from "react";
import {Box, Typography, Grid, Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import Nav from "../components/nav/nav.js";
import { FormControl, TextField } from "@mui/material";
import Message from '../context/message.js';
import {Avatar} from "@mui/material";


const Home = (props) => {
    // const ctxClock = useContext(ClockContext);
    // const ctxNations = useContext(NationsContext);
    const ctxCanvas = useContext(Message);

    const cityRef = useRef();
    const canvasRef = useRef();
    ctxCanvas.canvasProvider = canvasRef;
    
    // get the data from input of city
    // function submitCity(event) {
    //     event.preventDefault();
    //     const city = new City(cityRef.current.value);
    //     city.createArmy();
    //     ctxNations.nationsCurrentHandler([...ctxNations.nationsProvider,city]); // push the new city
    //     cityRef.current.value = '';
    //     drawOn(ctxNations.canvasNodes, canvasRef, city);
    // }
    
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
    //mt2
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:5}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Grid container direction="row" alignItems="stretch" sx={{backgroundColor:"#222",minHeight:"90vh", borderRadius:{xs:0, lg:3} }}>
                    {/* Avatar and Navigation */}
                    <Grid container item direction="column" xs={2}>
                        {/* Avatar */}
                        <Grid item display='flex' flexDirection='column' sx={{backgroundColor:"#666", display:"flex", justifyContent:'center', alignItems:'center'}} xs={3}> 
                            <Avatar   sx={{ width: '50%', height: '90%', fontSize:"5em" }}>S</Avatar>
                            {/* <FormControl sx={{pt:5}} component="form" onSubmit={submitCity}>
                                <TextField
                                    id="inpuy-field-city"
                                    inputRef={cityRef}
                                    label="Add City"
                                    defaultValue="Rome"
                                    InputLabelProps={{
                                        sx: { color: '#fff'}
                                    }}
                                    sx={{
                                        '& fieldset': {
                                            borderColor: 'white'
                                        }
                                    }}
                                />
                                <Button sx={{mt:2}} type="submit">Add</Button>
                            </FormControl> */}
                        </Grid>
                        {/* Navi */}
                        <Grid item display='flex' flexDirection='column' xs={9}  sx={{backgroundColor:"#333", display:"flex", justifyContent:'center', alignItems:'center'}}> 
                            <Typography variant="span">Navigation</Typography>
                        </Grid>
                    </Grid>

                    {/* Banner and Chat */}
                    <Grid container item direction="column" xs={10}>
                        {/* Banner */}
                        <Grid item display='flex' flexDirection='column' xs={3}  sx={{backgroundColor:"#444", display:"flex", justifyContent:'center', alignItems:'center'}}> 
                            <Typography variant="span">Banner</Typography>
                        </Grid>
                        {/* Chat */}
                        <Grid item container direction='column' xs={9} sx={{ display:"flex", paddingY: 6, paddingX: 10 }}> 
                            <Grid item sx={{display:'flex', justifyContent:'flex-end'}}>
                                <Box sx={{padding: 2, borderRadius:2, color:'#000', backgroundColor:"#bbdefb"}}>
                                    <Typography variant="span">Hello sir</Typography>
                                </Box>
                            </Grid>
                            <Grid item sx={{display:'flex', justifyContent:'flex-end'}}>
                                <Box sx={{mt:1, p: 2, borderRadius:2, color:'#000', backgroundColor:"#bbdefb"}}>
                                    <Typography variant="span">How are you?</Typography>
                                </Box>
                            </Grid>
                            <Grid item sx={{ display:'flex', justifyContent:'baseline'}}>
                                <Box sx={{padding: 2, borderRadius:2, color:'#000', backgroundColor:"#bbdefb"}}>
                                    <Typography variant="span">Good, and you?</Typography>
                                </Box>
                            </Grid>
                            <Grid item sx={{display:'flex', justifyContent:'flex-end'}}>
                                <Box sx={{mt:1, p: 2, borderRadius:2, color:'#000', backgroundColor:"#bbdefb"}}>
                                    <Typography variant="span">All is good!</Typography>
                                </Box>
                            </Grid>
                            <Grid item sx={{display:'flex', justifyContent:'flex-end'}}>
                                <Box sx={{mt:1, p: 2, borderRadius:2, color:'#000', backgroundColor:"#bbdefb"}}>
                                    <Typography variant="span">Save for last friday thought</Typography>
                                </Box>
                            </Grid>
                            <Grid item sx={{display:'flex', justifyContent:'flex-end'}}>
                                <Box sx={{mt:1, p: 2, borderRadius:2, color:'#000', backgroundColor:"#bbdefb", maxWidth:"70%"}}>
                                    <Typography variant="span">Had to go to the grocery store buy some beers, however because of some soccer game that happened, they did not have any at all! in the end I had to buy some coke cuz it was the only thing they still had</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;
