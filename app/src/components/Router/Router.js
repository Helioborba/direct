// common imports
import React from "react";
import {Box} from "@mui/material";
import {Route,Routes} from "react-router-dom";

// Pages
import Home from "../../pages/Home.js";
import Log from "../../pages/Log.js";
import NotFound from "../../pages/NotFound.js";

// Diary is the blog part
// About for who I am (or who are we...)
// Archive for the stuff by date
// Snips for some random codes
const Router = (props) => {
    return (
        <React.Fragment>
            <Box>
                <Routes>
                    <Route path="/" element={<Home></Home>}/>
                    {/* about...                     */}
                    <Route path="/Log" element={<Log></Log>}/>
                    <Route path="/*" element={<NotFound></NotFound>}/>
                </Routes>
            </Box>
        </React.Fragment>
    );
};

export default Router; 