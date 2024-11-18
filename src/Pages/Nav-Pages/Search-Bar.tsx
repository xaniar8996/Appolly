
import React, { useEffect, useState } from "react";
import { Button, IconButton, TextField, Typography, useScrollTrigger } from "@mui/material";
// icons
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// CSS
import "../../assetss/Style/Search-Bar.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {

    const [displayBox, setDisplayBox] = useState(false);
    const [word, setWord] = useState("");
    const [textChange, setTextChange] = useState("");
    const [textChange2, setTextChange2] = useState("");
    const [errorText, setErrorText] = useState("");
    const [searchForText, setSearchForText] = useState("Searching For ...");

    const Navigate = useNavigate();

    useEffect(() => {
        if (
            word === "A" ||
            word === "a" ||
            word === "about" ||
            word === "About" ||
            word === "About us" ||
            word === "About Us" ||
            word === "about us" ||
            word === "about Us"
        ) {
            setTextChange("About US")
            setTextChange2("About")
            setDisplayBox(true)
            setErrorText("")
            setSearchForText("Searching For ...");
        } else if (
            word === "h" ||
            word === "H" ||
            word === "home" ||
            word === "Home"
        ) {
            setTextChange("Home")
            setTextChange2("Home page")
            setDisplayBox(true)
            setErrorText("")
            setSearchForText("Searching For ...");
        } else if (
            word === ""
        ) {
            setDisplayBox(false)
        }
        else {
            setErrorText("Sorry , This page is not valid !")
            setTextChange2("")
            setTextChange("")
            setSearchForText("");
        }
    })

    // handlClicks-on-Resluts

    const handlClicksonResluts = () => {
        if (
            textChange === "Home" ||
            textChange === "Home page"
        ) {
            Navigate("/Home")
        } else if (
            textChange === "About US" ||
            textChange === "About"
        ) {
            Navigate("/About-Us")
        }
    }

    const handleSearch = () => {
        if (
            word === "Home" ||
            word === "Home page" ||
            word === "home" ||
            word === "home page" ||
            word === "home Page"
        ) {
            Navigate("/Home")
        } else if (
            word === "About Us" ||
            word === "About" ||
            word === "about" ||
            word === "about us" ||
            word === "About us" ||
            word === "about Us"
        ) {
            Navigate("/About-Us")
        } else if (
            word === ""
        ) {
            alert("Please Fill the Input")
        }else{
            alert("Sorry , This page is not valid !")
        }
    }

    return (
        <>
            <div
                className="container"
            >
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        marginTop: "120px",
                    }}
                >
                    <b style={{ color: "rgb(80, 80, 241)", textShadow: "0px 0px 70px rgb(80, 80, 241)" }}> Appolly </b>
                    : Your Guide to Smarter Finances
                </Typography>
                <div
                    className="Main-Search"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                        marginTop: "50px"
                    }}
                >
                    <input
                        type="search"
                        className="search-input"
                        placeholder="Search ..."
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        style={{
                            padding: "10px",
                            fontSize: "18px",
                            width: "60%",
                            outline: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none"
                        }}
                    />
                    <IconButton
                        className="search-icon"
                        onClick={() => handleSearch()}
                    >
                        <SearchIcon
                            style={{
                                fontSize: "30px",
                                borderRadius: "100%",
                            }}
                        />
                    </IconButton>
                </div>
                <div
                    className="Suggestions"
                    style={{
                        display: displayBox ? "block" : "none",
                    }}
                >
                    <div className="search-for-container">
                        <Typography
                            variant="h6"
                            className="searching-for-text"
                            sx={{
                                mb: 3
                            }}
                        >
                            {searchForText}
                        </Typography>
                    </div>
                    {textChange &&
                        <Typography
                            variant="h5"
                            className="results"
                            onClick={() => handlClicksonResluts()}
                            sx={{
                                cursor: "pointer",
                            }}
                        >
                            {textChange}
                        </Typography>
                    }
                    {textChange2 &&
                        <Typography
                            className="results"
                            variant="h5"
                            onClick={() => handlClicksonResluts()}
                            sx={{
                                mt: 2,
                                cursor: "pointer",
                            }}
                        >
                            {textChange2}
                        </Typography>
                    }
                    <h2
                        style={{
                            marginTop: "0px",
                            color: "red",
                            textShadow: "5px 5px 30px red",
                        }}
                    >
                        {errorText}
                    </h2>
                </div >
                <div className="search-results">
                    <Typography
                        variant="h5"
                    >
                        Recently Searches
                    </Typography>
                    <div className="main-searches">
                        <Button variant="text">
                            Contact Us
                        </Button>
                        <Button variant="text">
                            Features
                        </Button>
                        <Button variant="text">
                            BLogs
                        </Button>
                    </div>
                </div>
            </div >
        </>
    )
}