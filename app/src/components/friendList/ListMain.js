import React, { useState, useRef, useContext, useEffect } from "react";
import {Box, Grid, Typography, Button, Avatar, IconButton} from "@mui/material";


const ListMain = () => {
    return(
        <React.Fragment>
            <Grid container item sx={{position:'relative', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Grid container direction="row"  sx={{backgroundColor:"#222", borderRadius:{xs:0, lg:3} }}>
                        <Typography>Online</Typography>
                    </Grid>
                </Box>
                    <Grid container item xs={3} sx={{mt:7, display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <IconButton>
                            <Avatar>S</Avatar>
                        </IconButton>
                    </Grid>
                    <Grid container item xs={3} sx={{mt:7, display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <IconButton>
                            <Avatar>A</Avatar>
                        </IconButton>
                    </Grid>
                    <Grid container item xs={3} sx={{mt:7, display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <IconButton>
                            <Avatar>D</Avatar>
                        </IconButton>
                    </Grid>
                    <Grid container item xs={3} sx={{mt:7, display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <IconButton>
                            <Avatar>F</Avatar>
                        </IconButton>
                    </Grid>
            </Grid>
            
            <Grid container item>

                <Grid container item xs={12} sx={{mt:4, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography>Posts</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ListMain;