import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Typography, } from "@material-ui/core";
import CorporateCateringPic from "./../../../assets/images/pineappledish.png";
import SpecialEvents from "./../../../assets/images/specialEvents.png";
import privateChef from "./../../../assets/images/corporatecatering.png";
// import PrivateChef from "./../../assests/images/fresh_pasta.jpg";
import { useStyles } from "./Services-styles";



  const data = [
    {
        title: "Private Chef",
        image: `${SpecialEvents}`,
        text: "",
        link: "/services"
    },
    {
        title: "Corporate Catering",
        image: `${CorporateCateringPic}`,
        text: "",
        link: "/services"
    },
    {
        title: "Special Events",
        image: `${privateChef}`,
        text: "",
        link: "/services"
    },
    {
        title: "Consulting",
        image: `${CorporateCateringPic}`,
        text: "",
        link: "/services"
    },
  ]
const Services = (props) => {
    const classes = useStyles(props);

    return (
        <Grid className={classes.root}>
                     <header  className={classes.header}>Services</header>
                    <Grid className={classes.wrapper}>
            {data.map((item) => (
                <ScrollAnimation className={classes.container} key={item.title}  animateIn="fadeIn" duration={2}>
                        <Grid className={classes.imgContainer}>
                            <img className={classes.img} src={`${item.image}`} alt={item.title}/>
                        </Grid>
                        <Grid className={classes.title}>
                            <Typography className={classes.h1}>{item.title}</Typography>
                        </Grid>
                    
                </ScrollAnimation>
            ))}
            </Grid>
        </Grid>
    )
};

export default Services;