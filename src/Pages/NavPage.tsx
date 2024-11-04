
import React from "react";
import Cookies from "js-cookie";
import { CircularProgress, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"
// CSS
import "../assetss/Style/NavPage.css";


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
                            <Instagram sx={{ color: "white" , fontSize:"20px" }} />
                        </IconButton>
                        <IconButton>
                            <Twitter sx={{ color: "white" , fontSize:"20px" }} />
                        </IconButton>
                        <IconButton>
                            <YouTube sx={{ color: "white" , fontSize:"20px" }} />
                        </IconButton>
                    </div>
                </div>
                {/* Nav */}
                <AppBar
                    sx={{
                        width: "90%",
                        mr: 9,
                        mt: 11,
                        borderRadius: "6px"
                    }}
                >
                    <Toolbar>

                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}