// common imports
import React from "react";
import {Box} from "@mui/material";
import {Route,Routes} from "react-router-dom";

// Pages
import Home from "../../pages/Home.js";
import Chat from "../../pages/FriendList.js"; // not to be confused with the ChatModel
import Search from "../../pages/Search.js";
import Profile from "../../pages/Profile.js";
import NotFound from "../../pages/NotFound.js";

const Router = (props) => {
    return (
        <React.Fragment>
            <Box>
                <Routes>
                    <Route path="/" element={<Home></Home>}/>
                    <Route path="/chat" element={<Chat></Chat>}/>
                    <Route path="/search" element={<Search></Search>}/>
                    <Route path="/profile" element={<Profile></Profile>}/>
                    <Route path="/*" element={<NotFound></NotFound>}/>
                </Routes>
            </Box>
        </React.Fragment>
    );
};

export default Router; 