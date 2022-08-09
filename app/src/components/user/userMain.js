import React, { useState, useRef, useContext } from "react";
import {Box, Grid, Typography, Button, Avatar} from "@mui/material";

const UserMain = (props) => {

    return(
        <React.Fragment>
            <Grid container item sx={{ position:'relative', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                <Box sx={{p:{xs:"5rem 0 5rem 0", lg:2}, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Grid container direction="row"  sx={{backgroundColor:"#222", borderRadius:{xs:0, lg:3} }}>
                        <Typography>{props.name}</Typography>
                    </Grid>
                </Box>
                <Grid container item xs={12} sx={{my:4}}>
                    <Grid container item xs={6} sx={{ position:'relative', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Avatar sx={{fontSize:"5em", width:200, height:200}}>S</Avatar>
                    </Grid>
                    <Grid container item xs={6} sx={{ position:'relative', display:'flex', justifyContent:'center'}}>
                        <Grid item xs={12}><Typography>Groups</Typography></Grid>
                        <Grid container direction="column" item xs={12}>
                            <Grid item>
                                <Typography>frerfffw</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>ewfwwefwef</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>cxzczxccxzxczx</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs={12}>
                            <Grid item>
                                <Typography>frerfffw</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>ewfwwefwef</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>cxzczxccxzxczx</Typography>
                            </Grid>
                        </Grid>
                        
                        {/* above is the 'title' */}
                    </Grid>
                </Grid>
                <Grid container item xs={12} sx={{my:4}}>
                    <Grid container item xs={6} sx={{ position:'relative', display:'flex', justifyContent:'center'}}>
                        <Grid item xs={12}><Typography>Biography</Typography></Grid>
                        <Grid container direction="column" item xs={12}>
                            <Grid item>
                                <Typography>
                                {`When did the human race start the need for violence? 
                                As we learned to build tools, why did we learn to build tools? 
                                back in the past when you did not have machines, 
                                the people would hunt with stones as the weapon of choice for survival; 
                                that comes from the needs of hunger. How much have we learned from the past? 
                                Thats a tricky question; from wars to the 'peaceful' days of the internet much has indeed changed,
                                this has been done by the connections that people now have. If you stop to think, 
                                no one wants a war if your neighbor has a atomic bomb or at least 'that' is what political 
                                leaders think. Lets go back in time and look at George Orwell classic book: Nineteen Eighty-Four.
                                A war is made by the hands of those who seek a easy way out to problems in the country by 
                                assigning hatred towards another, justifying crimes for the well being of another. 
                                But as history has proven, a war only causes nations to go backwards, after a war ends a 
                                country can still rebel after some years. So how do we stop wars?... War is Peace, thats a 
                                question yet to be answered`}
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* above is the 'title' */}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default UserMain;


