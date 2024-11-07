
import React from "react";
import { CircularProgress, Typography, AppBar, Toolbar, IconButton, Button, ButtonGroup, Skeleton } from "@mui/material";
// img
import Logo from "../../assetss/images/Logo4 1.png";
import Mobile from "../../assetss/images/Free Ui View Mobile App Mockup 1.png";
// icons
import AppleIcon from '@mui/icons-material/Apple';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// Style
import "../../assetss/Style/Home.css";

export default function Home() {
    return (
        <>
            <div className="hero">
                <div 
                className="mobile-pic-hero"
                style={{
                    marginTop:"110px"
                }}
                >
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
        </>
    )
}