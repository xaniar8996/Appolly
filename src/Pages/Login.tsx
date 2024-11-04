
import React from "react";
import { Button, Container, Grid2, TextField, Typography, LinearProgress } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { FormikValues, useFormik } from "formik";
import App from "../App";
// style
import "../assetss/Style/Login.css";
// img
import Logo from "../assetss/images/Logo4 1.png";
// icons
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
        },

        onSubmit: (values) => {
            axios.post(" http://localhost:5000/api/user/login", values)
                .then((response) => {
                    Cookies.set("user", response.data.jwtToken, {
                        secure: false, sameSite: "Strict"
                    })
                    window.location.reload();
                })
                .catch((error) => {
                    alert("Error . Please try again !")
                })
        }
    })

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
                    <div className="main-login-image">
                        <img
                            src={Logo}
                            style={{
                                margin: "30px"
                            }}
                        />
                    </div>
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
                    <form
                        onSubmit={formik.handleSubmit}
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
                            name="userName"
                            id="userName"
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            variant="outlined"
                            sx={{ width: "300px" }}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            sx={{ width: "300px" }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                width: "300px",
                                padding: "10px",
                                borderRadius: "12px",
                                color: "white",
                                backgroundColor: "black"
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<GoogleIcon />}
                            sx={{
                                width: "300px",
                                padding: "10px",
                                borderRadius: "12px",
                                border: "1px solid black"
                            }}
                        >
                            Login with Google
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
