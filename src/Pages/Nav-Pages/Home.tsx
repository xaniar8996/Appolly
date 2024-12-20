
import React, { CSSProperties } from "react";
import { CircularProgress, Typography, AppBar, Toolbar, IconButton, Button, ButtonGroup, Skeleton, Slider, Container, Grid2, Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Slide from "react-slick";
// img
import Logo from "../../assetss/images/Logo4 1.png";
import Mobile from "../../assetss/images/Free Ui View Mobile App Mockup 1.png";
import mobileAbout from "../../assetss/images/android-smartphone-free-mockup 1.png";
import AppFeatures from "../../assetss/images/App.png";
import MobileDownload from "../../assetss/images/Gravity-Scene-iPhone-12-Mockup 1.png";
import WayToUseAppImage from "../../assetss/images/Image.png";
import FirstEmployee from "../../assetss/images/Profile.png";
import SecendEmployee from "../../assetss/images/Profile Image.png";
import TheirdEmployee from "../../assetss/images/Profile Image (1).png";
import SliderImage from "../../assetss/images/Profile Image (2).png";
// Blogs images
import Blog1 from "../../assetss/images/Blogs (1).png";
import Blog2 from "../../assetss/images/Blogs (2).png";
import Blog3 from "../../assetss/images/Blogs (3).png";
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
import DownloadIcon from '@mui/icons-material/Download';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarIcon from '@mui/icons-material/Star';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
// react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Style
import "../../assetss/Style/Home.css";
import Cookies from "js-cookie";


export default function Home() {

    var Settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    var SliderHappy = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>
            {/* Hero */}

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

            {/* Features */}

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
                        className="main-image-of-details"
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

                {/* Support */}

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

            {/* Slider */}

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
                    className="Slider-container"
                    style={{
                        width: "70%",
                        marginLeft: "50px",
                        borderRadius: "15px",

                    }}
                >
                    <Slide
                        {...Settings}
                    >
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

            {/* Download App */}

            <div className="Download-App-Container">
                <img
                    className="Download-App-image"
                    style={{
                        width: "400px",
                        height: "400px"
                    }}
                    src={MobileDownload}
                />
                <div className="Download-App-Text">
                    <div className="Title-of-Download-App-Text">
                        <Typography
                            variant="h4"
                        >
                            Download App Now
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Commodi molestiae optio laborum quis expedita minima et
                            cumque <br /> natus sint, odit eaque asperiores libero  nihil deserunt ea <br /> similique autem delectus voluptate.
                        </Typography>
                    </div>
                    <div className="Download-App-Btns">
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
                    <div className="Download-App-Infos">
                        <div className="main-download-infos">
                            <DownloadIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "white"
                                }}
                            >
                                59865
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "white"
                                }}
                            >
                                Download
                            </Typography>
                        </div>
                        <div className="main-download-infos">
                            <ThumbUpIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "white"
                                }}
                            >
                                29852
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "white"
                                }}
                            >
                                Like
                            </Typography>
                        </div>
                        <div className="main-download-infos">
                            <StarIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "white"
                                }}
                            >
                                1500
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "white"
                                }}
                            >
                                5 Star Rating
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>

            {/* the-way-to-use-app */}

            <Container
                maxWidth="xl"
                className="the-way-to-use-app"
            >
                <Grid2
                    container
                    className="explanation-of-way-to-use-app"
                >
                    <Grid2 size={{ xs: 12, xl: 12 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white",
                                mt: 10,
                                textAlign: "center"
                            }}
                        >
                            How To Use The App Perfectly
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, xl: 12 }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "white",
                                textAlign: "center"
                            }}
                        >
                            To use the app perfectly, start by exploring its
                            features <br /> and understanding the interface. Follow any provided tutorials or guides to ensure <br /> you're
                            utilizing all functionalities efficiently. Regularly check for
                            updates to enjoy <br /> the latest improvements and features.
                        </Typography>
                    </Grid2>
                    <img
                        className="WayToUseAppImage"
                        src={WayToUseAppImage}
                    />
                </Grid2>
            </Container>

            {/* Our Team */}

            <Container
                maxWidth="xl"
                className="Our-Team"
            >
                <Grid2 container>
                    <Grid2 size={{ xs: 12, xl: 12 }}>
                        <Typography
                            variant="h4"
                        >
                            Our reative team
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, xl: 12 }}>
                        <Typography
                            variant="body1"
                        >
                            Our creative team is a dynamic group of innovators driven by passion and fresh ideas. <br />
                            We specialize in transforming concepts into impactful solutions,
                            ensuring every projectstands out. <br /> With diverse
                            expertise and a collaborative spirit, we bring visions to life with excellence
                        </Typography>
                    </Grid2>
                </Grid2>
                <Grid2
                    container
                    maxWidth="xl"
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "70px"
                    }}
                >
                    <Grid2 size={{ xs: 12, xl: 3 }}>
                        <div
                            className="employes"
                            id="first-employee"
                        >
                            <img
                                src={FirstEmployee}
                                style={{
                                    border: "4px solid blueviolet",
                                    borderRadius: "100%",
                                    padding: "4px",
                                    borderColor: "rgb(80, 80, 241)"
                                }}
                            />
                            <div className="texts-of-employees">
                                <Typography variant="h6">
                                    Carla Press
                                </Typography>
                                <Typography variant="body1">
                                    App Developer
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "gray"
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Viverra nunc ante velit vitae. Est tellus vitae.
                                </Typography>
                                <div className="social-medias">
                                    <FacebookIcon />|
                                    <InstagramIcon />|
                                    <TwitterIcon />|
                                    <YouTubeIcon />
                                </div>
                            </div>
                        </div>
                    </Grid2>
                    <Grid2 size={{ xs: 12, xl: 3 }}>
                        <div
                            className="employes"
                            id="secend-employee"
                        >
                            <img
                                src={SecendEmployee}
                                style={{
                                    border: "4px solid blueviolet",
                                    borderRadius: "100%",
                                    padding: "4px",
                                    borderColor: "rgb(80, 80, 241)"
                                }}
                            />
                            <div className="texts-of-employees">
                                <Typography variant="h6">
                                    Craig Gouse
                                </Typography>
                                <Typography variant="body1">
                                    UI/UX Designer
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "gray"
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Viverra nunc ante velit vitae. Est tellus vitae.
                                </Typography>
                                <div className="social-medias">
                                    <FacebookIcon />|
                                    <InstagramIcon />|
                                    <TwitterIcon />|
                                    <YouTubeIcon />
                                </div>
                            </div>
                        </div>
                    </Grid2>
                    <Grid2 size={{ xs: 12, xl: 3 }}>
                        <div
                            className="employes"
                            id="theird-employee"
                        >
                            <img
                                src={TheirdEmployee}
                                style={{
                                    border: "4px solid blueviolet",
                                    borderRadius: "100%",
                                    padding: "4px",
                                    borderColor: "rgb(80, 80, 241)"
                                }}
                            />
                            <div className="texts-of-employees">
                                <Typography variant="h6">
                                    Jocelyn Septimus
                                </Typography>
                                <Typography variant="body1">
                                    Website developer
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "gray"
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Viverra nunc ante velit vitae. Est tellus vitae.
                                </Typography>
                                <div className="social-medias">
                                    <FacebookIcon />|
                                    <InstagramIcon />|
                                    <TwitterIcon />|
                                    <YouTubeIcon />
                                </div>
                            </div>
                        </div>
                    </Grid2>
                </Grid2>
            </Container>
            <Container
                maxWidth="xl"
                className="Customers-slider"
                sx={{
                    mt: 20
                }}
            >
                <Grid2 container>
                    <Grid2 size={{ xs: 12, xl: 12 }} sx={{ mt: 7 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white"
                            }}
                        >
                            Our Founder
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, xl: 12 }} sx={{ mt: 7 }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "white"
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. <br />
                            Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,<br />
                            ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                        </Typography>
                    </Grid2>
                    <Grid2
                        sx={{
                            mt: 7,
                            width: "70%",
                            ml: 25,
                        }}
                    >
                        <div className="customer-div">
                            <img src={SliderImage} />
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bold"
                                }}
                            >
                                Ann Lubin
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: "bold"
                                }}
                            >
                                Co-Founder
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: "bold",
                                    color: "gray"
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. <br />
                                Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,<br />
                                ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                            </Typography>
                        </div>
                    </Grid2>
                </Grid2>
            </Container>
            <Container
                maxWidth="xl"
                className="Blogs-container"
                sx={{
                    mt: 20,
                }}
            >
                <Grid2 container>
                    <Grid2 size={{ xs: 12 }}>
                        <Typography variant="h4">
                            Our Recent Blogs
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 5 }}>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. <br />
                            Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,<br />
                            ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                        </Typography>
                    </Grid2>
                    <div className="all-blogs">
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 5 }}>
                        <Card
                            sx={{
                                width: "370px",
                                height: "500px",
                                textAlign: "left",
                            }}
                        >
                            <CardMedia
                                image={Blog1}
                                component="img"
                            />
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px"
                                }}
                            >
                                <Typography variant="h6">
                                    The Snap Pixel: How It Works and How to Install
                                </Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. <br />
                                    Est tellus vitae, nullam lobortis enim.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    className="blogs-actions"
                                    variant="text"
                                    sx={{
                                        fontSize: "17px",
                                        color: "blue",
                                        borderRadius: "10px"
                                    }}
                                >
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid2>

                    {/* secend blog */}

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 5 }}>
                        <Card
                            sx={{
                                width: "370px",
                                height: "500px",
                                textAlign: "left",
                            }}
                        >
                            <CardMedia
                                image={Blog2}
                                component="img"
                            />
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px"
                                }}
                            >
                                <Typography variant="h6">
                                    The Snap Pixel: How It Works and How to Install
                                </Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. <br />
                                    Est tellus vitae, nullam lobortis enim.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    className="blogs-actions"
                                    variant="text"
                                    sx={{
                                        fontSize: "17px",
                                        color: "blue",
                                        borderRadius: "10px"
                                    }}
                                >
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid2>

                    {/* theird blog */}

                    <Grid2 size={{ xs: 12  , xl:3}} sx={{ mt: 5 }}>
                        <Card
                            sx={{
                                width: "370px",
                                height: "500px",
                                textAlign: "left",
                            }}
                        >
                            <CardMedia
                                image={Blog3}
                                component="img"
                            />
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px"
                                }}
                            >
                                <Typography variant="h6">
                                    The Snap Pixel: How It Works and How to Install
                                </Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. <br />
                                    Est tellus vitae, nullam lobortis enim.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    className="blogs-actions"
                                    variant="text"
                                    sx={{
                                        fontSize: "17px",
                                        color: "blue",
                                        borderRadius: "10px"
                                    }}
                                >
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid2>
                    </div>
                </Grid2>
            </Container>
        </>
    )
}

