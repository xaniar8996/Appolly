
import React from "react";
import Cookies from "js-cookie";
import { CircularProgress, Typography, AppBar, Toolbar, IconButton, Button, ButtonGroup, Skeleton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"
// icons
import AppleIcon from '@mui/icons-material/Apple';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// CSS
import "../assetss/Style/NavPage.css";
// image
import Logo from "../assetss/images/Logo4 1.png";
import Mobile from "../assetss/images/Free Ui View Mobile App Mockup 1.png";


export default function NavPage() {


    return (
        <>
            <div className="main-section">
                {/* Top infos */}
                <div className="top-infos">
                    <div className="first-top-infos">
                        <Typography variant="body2" className="email">
                            x655454@Gmail.com
                        </Typography>
                        <Typography variant="body2" className="number">
                            (+98) 9155865509
                        </Typography>
                    </div>
                    <div className="social-media">
                        <IconButton>
                            <Facebook sx={{ color: "white", fontSize: "20px" }} />
                        </IconButton>
                        <IconButton>
                            <Instagram sx={{ color: "white", fontSize: "20px" }} />
                        </IconButton>
                        <IconButton>
                            <Twitter sx={{ color: "white", fontSize: "20px" }} />
                        </IconButton>
                        <IconButton>
                            <YouTube sx={{ color: "white", fontSize: "20px" }} />
                        </IconButton>
                    </div>
                </div>
                {/* Nav */}
                <AppBar
                    sx={{
                        width: "90%",
                        mr: 9,
                        mt: 11,
                        borderRadius: "6px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "50px",
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
                            ml: 15
                        }}
                    >
                        <Button variant="text" sx={{ color: "black", fontSize: "18px" }}>
                            Home
                        </Button>
                        <Button variant="text" sx={{ color: "black", fontSize: "18px" }}>
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
                        <Button variant="contained" sx={{ color: "white", fontSize: "18px", ml: 5 }}>
                            Download
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className="hero">
                    <div className="mobile-pic-hero">
                        <img src={Mobile} />
                    </div>
                    <div className="hero-text">
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "fantasy",
                                wordSpacing: "12px",
                                color: "#5957e9",
                            }}
                        >
                            A Great App Makes <br />
                            Your Life Better
                        </Typography>
                        <Typography variant="body1" sx={{ color: "gray", mt: 2 }}>
                            In this App , We show you , your Bank account balance <br />
                            and everything you spend during day .
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 6, fontWeight: "bold" }}>
                            Download App Now
                        </Typography>
                        <div className="Btn-download-app">
                            <Button
                                startIcon={<SportsEsportsIcon />}
                                sx={{
                                    backgroundColor: "black",
                                    color: "white",
                                    fontSize: "17px",
                                     width: "180px"
                                }}
                            >
                                Google Play
                            </Button>
                            <Button
                                startIcon={<AppleIcon />}
                                sx={{
                                    backgroundColor: "black",
                                    color: "white",
                                    fontSize: "17px",
                                    width: "180px"
                                }}
                            >
                                App Store
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}