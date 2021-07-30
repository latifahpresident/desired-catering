import React from "react";
import Jumbotron from "./../UI/Jumbotron/Jumbotron";
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Services from './Services/Servies';
import Contact from './../../containers/Contact/HomeComtactForm';
import PromoVid from "./../../assets/videos/Chef.mp4";

const Home = () => {
    return (
        <React.Fragment>
            <Jumbotron video={PromoVid}/>
            <About/>
            <Gallery/>
            <Services/>
            <Contact/>
        </React.Fragment>
    )
};

export default Home;