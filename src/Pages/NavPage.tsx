
import React, { lazy, Suspense, useState } from "react";
import Cookies from "js-cookie";
import { CircularProgress, Typography, AppBar, Toolbar, IconButton, Button, ButtonGroup, Skeleton, colors, useScrollTrigger } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"
// icons
import AppleIcon from '@mui/icons-material/Apple';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SearchIcon from '@mui/icons-material/Search';
// CSS
import "../assetss/Style/NavPage.css";
// image
import Logo from "../assetss/images/Logo4 1.png";
import Mobile from "../assetss/images/Free Ui View Mobile App Mockup 1.png";
import { Route, Routes, useNavigate } from "react-router-dom";
// Pages
import SearchBar from "./Nav-Pages/Search-Bar";


export default function NavPage() {

    const Home = lazy(() => import("./Nav-Pages/Home"));
    const AboutUs = lazy(() => import("./Nav-Pages/About-Us"));
    const SearchPage = lazy(() => import("./Nav-Pages/Search-Bar"));
    // usestates

    // Navigate
    const Navigate = useNavigate();

    return (
        <>
            <div className="main-section">
                {/* Nav */}
                <AppBar
                    sx={{
                        width: "90%",
                        mr: 9,
                        mt: 1,
                        borderRadius: "6px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "70px",
                        backgroundColor: "white",
                    }}
                >
                    <Toolbar
                        className="first-toolbar"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "30px",
                        }}
                    >
                        <IconButton
                            onClick={() => Navigate("/Search-Bar")}
                            sx={{
                                mr: 5
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                        <Button
                            variant="text"
                            sx={{ color: "black", fontSize: "18px" }}
                            onClick={() => Navigate("/Home")}
                        >
                            Home
                        </Button>
                        <Button
                            variant="text"
                            sx={{ color: "black", fontSize: "18px" }}
                            onClick={() => Navigate("/About-Us")}
                        >
                            About
                        </Button>
                        <Button variant="text" sx={{ color: "black", fontSize: "18px" }}>
                            Features
                        </Button>
                    </Toolbar>
                    <Toolbar>
                        <img src={Logo} />
                    </Toolbar>
                    <Toolbar
                        className="secend-toolbar"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "30px",
                        }}
                    >
                        <Button variant="text" sx={{ color: "black", fontSize: "18px" }}>
                            BLogs
                        </Button>
                        <Button variant="text" sx={{ color: "black", fontSize: "18px" }}>
                            Setting
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ color: "white", fontSize: "18px", ml: 5 }}
                        >
                            Download
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Routes>
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/Home"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/About-Us"
                    element={
                        <Suspense fallback={<Loading />}>
                            <AboutUs />
                        </Suspense>
                    }
                />

                {/* Search page */}

                <Route
                    path="/Search-Bar"
                    element={
                        <Suspense fallback={<Loading />}>
                            <SearchPage />
                        </Suspense>
                    }
                />
            </Routes>
        </>
    )
}

const Loading = () => {
    return (
        <div
            style={{
                marginTop: "300px",
                marginLeft: "730px"
            }}
        >
            <CircularProgress sx={{ color: "black" }} />
        </div>
    )
}