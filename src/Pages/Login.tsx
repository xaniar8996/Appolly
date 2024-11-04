
import React from "react";
import "../assetss/Style/Login.css";
import { Button, Container, Grid2, TextField, Typography } from "@mui/material";
// img
import LoginImage from "../assetss/images/glowing-wwdc-apple-3840x2160-17155.png";
// icons
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
    return (
        <>
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "110px"
                }}
            >
                <div>
                    <img src={LoginImage} className="Login-Image" />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        marginRight: "150px",
                    }}
                >
                    <div>
                        <Typography
                            variant="h3"
                            sx={{ width: "470px" }}
                            className="welcome-message"
                        >
                            Welcome to "Appolly"
                        </Typography>
                    </div>
                    <div>
                        <Typography
                            variant="body1"
                            className="welcome-message"
                            sx={{ mr: 2 }}
                        >
                            Welcome dear , Please Fill the form below.
                        </Typography>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                        }}
                    >
                        <TextField
                            label="Username"
                            variant="outlined"
                            sx={{ width: "300px" }}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            sx={{ width: "300px" }}
                        />
                        <Button 
                        variant="contained"
                        color="success"
                        sx={{ 
                            width: "300px" , 
                            padding:"10px" ,
                            borderRadius:"12px"
                        }}
                        >
                            Login
                        </Button>
                        <Button 
                        variant="outlined"
                        endIcon={<GoogleIcon/>}
                        sx={{ 
                            width: "300px" , 
                            padding:"10px" ,
                            borderRadius:"12px",
                            border:"1px solid black"
                        }}
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}