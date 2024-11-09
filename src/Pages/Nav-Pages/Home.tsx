
import React, { CSSProperties } from "react";
import { CircularProgress, Typography, AppBar, Toolbar, IconButton, Button, ButtonGroup, Skeleton, Slider } from "@mui/material";
import Slide from "react-slick";
// img
import Logo from "../../assetss/images/Logo4 1.png";
import Mobile from "../../assetss/images/Free Ui View Mobile App Mockup 1.png";
import mobileAbout from "../../assetss/images/android-smartphone-free-mockup 1.png";
import AppFeatures from "../../assetss/images/App.png";
// Slide
import FirstSlide from "../../assetss/images/Slide (1).png";
import SecendSlide from "../../assetss/images/Slide (5).png";
import TheridSlide from "../../assetss/images/Slide (2).png";
import FourthSlide from "../../assetss/images/Slide (4).png";
import FivthSlide from "../../assetss/images/Slide (3).png";
// icons
import AppleIcon from '@mui/icons-material/Apple';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Check from "../../assetss/Icons/check-regular-24 (1).png";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import limit from '../../assetss/Icons/browser.png';
import Version from '../../assetss/Icons/cell-phone.png';
import Vector from '../../assetss/Icons/vector.png';
import EyeScanner from '../../assetss/Icons/eye-scanner 1.png';
import Support from '../../assetss/Icons/male-telemarketer.png';
// react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Style
import "../../assetss/Style/Home.css";

export default function Home() {

    var Settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    };

    return (
        <>
            <div className="hero">
                <div
                    className="mobile-pic-hero"
                    style={{
                        marginTop: "110px"
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
                            color: "#5957e9"
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
            {/* About our App */}
            <div className="container">
                <div className="first-part">
                    <Typography
                        variant="h4"
                        sx={{ color: "black", fontWeight: "bold" }}
                    >
                        About Our App
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: "bold"
                        }}
                    >
                        Welcome to " Appolly ", the leading solution for simplified bank account management. Our
                        mission is to provide individuals and businesses with a seamless, secure, and
                        efficient way to monitor their financial health, enabling smarter financial decisions through transparency and insight.
                    </Typography>
                </div>
                <div className="secend-part">
                    <img src={mobileAbout} className="mobileAbout" />
                    <div className="our-options">
                        <div className="first-option">
                            <div className="titles">
                                <img src={Check} className="checks" />
                                <Typography
                                    className="title-of-options"
                                    variant="h6"
                                >
                                    Creative Design
                                </Typography>
                            </div>
                            <Typography
                                variant="body2"
                                sx={{ color: "gray" }}
                            >
                                Whether it’s branding, web design, illustration, or multimedia, our goal is to create
                                designs that not only look remarkable but also serve to connect, inspire, and engage audiences.
                                We believe in pushing boundaries, adapting to new trends,
                                and always striving for excellence, creating designs that speak to your unique identity and vision.
                            </Typography>
                        </div>
                        {/* scend option */}
                        <div className="secend-option">
                            <div className="titles">
                                <img src={Check} className="checks" />
                                <Typography
                                    className="title-of-options"
                                    variant="h6"
                                >
                                    Esay to use
                                </Typography>
                            </div>
                            <Typography
                                variant="body2"
                                sx={{ color: "gray" }}
                            >
                                At " Appolly ", simplicity is at the heart of everything we do. We believe that technology and
                                design should be intuitive, efficient, and accessible to everyone. Our mission is to make
                                products that are not only powerful but also remarkably easy to use, helping you achieve more with less effort.
                            </Typography>
                        </div>
                        {/* thired option */}
                        <div className="thired-option">
                            <div className="titles">
                                <img src={Check} className="checks" />
                                <Typography
                                    className="title-of-options"
                                    variant="h6"
                                >
                                    Better user experince
                                </Typography>
                            </div>
                            <Typography
                                variant="body2"
                                sx={{ color: "gray" }}
                            >
                                We understand that a great user experience goes beyond design – it’s about understanding
                                our users' goals and removing obstacles along their journey. By leveraging insights, testing rigorously, and
                                iterating with intention, we craft solutions that are not only beautiful but also functional and accessible for everyone.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Features">
                <div className="title-of-Features">
                    <Typography
                        variant="h4"
                        sx={{ color: "white", fontWeight: "bold", mt: 10 }}
                        className="title-of-features"
                    >
                        App Features
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: "bold",
                            color: "white"
                        }}
                    >
                        " Appolly ", the secure and intuitive way to manage your finances on the go. Our app is designed to
                        make tracking your bank account balances and transactions effortless. With real-time balance updates, transaction
                        history, and customizable alerts, you’ll always stay informed of your financial status. We prioritize security
                        and privacy, ensuring your data is protected with the latest encryption standards. Whether you’re saving,
                        budgeting, or simply checking your balance, [App Name] provides the tools you need for smarter financial management.
                    </Typography>
                </div>
                <div className="infos-of-acoount">
                    <AttachMoneyIcon
                        sx={{
                            color: "white",
                            fontSize: "40px"
                        }}
                    />
                    <Typography
                        variant="h5"
                        sx={{ color: "white", fontWeight: "bold" }}
                    >
                        Full Informations of your Account
                    </Typography>
                </div>
                <div className="details-of-app">
                    <div className="first-detail-part">
                        <div id="limit">
                            <img src={limit} />
                            <Typography
                                variant="h5"
                                sx={{ color: "white" }}
                            >
                                Unlimiter Features
                            </Typography>
                        </div>
                        <div id="design">
                            <img src={Vector} />
                            <Typography
                                variant="h5"
                                sx={{ color: "white" }}
                            >
                                Awsome UI Design
                            </Typography>
                        </div>
                    </div>
                    <img
                        src={AppFeatures}
                        style={{
                            height: "500px",
                            borderRadius: "16px"
                        }}
                    />
                    <div className="secend-detail-part">
                        <div id="versions">
                            <img src={Version} />
                            <Typography
                                variant="h5"
                                sx={{ color: "white" }}
                            >
                                IOS & Android Version
                            </Typography>
                        </div>
                        <div id="security">
                            <img src={EyeScanner} />
                            <Typography
                                variant="h5"
                                sx={{ color: "white" }}
                            >
                                Best security in Account
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="Support">
                    <img
                        src={Support}
                        style={{
                            width: "40px",
                            height: "40px"
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{ color: "white" }}
                    >
                        24/7 Support by Our Team
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "white" }}
                    >
                        We Support you all day
                    </Typography>
                </div>
            </div>
            <div className="Slide-Container">
                <div className="check-out-text">
                    <Typography
                        variant="h4"
                        className="Check-out-text"
                    >
                        Check Out Our App
                    </Typography>
                    <Typography variant="body1">
                        You can see our App pages in mobile and become freindly <br />
                        with pages and how to work with it .
                    </Typography>
                </div>
                <div
                    style={{
                        width: "70%",
                        marginLeft: "100px",
                        borderRadius: "15px",
                    }}
                >
                    <Slide
                        {...Settings}>
                        <div>
                            <img
                                src={FivthSlide}
                                style={{
                                    height: "400px"
                                }}
                            />
                        </div>
                        <div>
                            <img
                                src={TheridSlide}
                                style={{
                                    height: "400px"
                                }}
                            />
                        </div>
                        <div>
                            <img
                                src={FirstSlide}
                                style={{
                                    height: "400px"
                                }}
                            />
                        </div>
                        <div>
                            <img
                                src={SecendSlide}
                                style={{
                                    height: "400px"
                                }}
                            />
                        </div>
                        <div>
                            <img
                                src={FourthSlide}
                                style={{
                                    height: "400px"
                                }}
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        </>
    )
}

