import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./Gallery-styles"
import SliderImage1 from "./../../../assets/images/slide_image_1.jpg";
import SliderImage2 from "./../../../assets/images/slide_image_2.jpg";
import SliderImage3 from "./../../../assets/images/slide_image_3.jpg";
import SliderImage4 from "./../../../assets/images/slide_image_4.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const Gallery = (props) => {
    const classes = useStyles(props);
    const images = [SliderImage1, SliderImage2, SliderImage3, SliderImage4];
    return (
        <Grid className={classes.root}>
               <Grid className={classes.title}>
                    <Grid className={classes.tagline}>
                        <div className={classes.line}></div>
                        <Typography component="h4" className={classes.h4}>Event gallery</Typography>
                    </Grid>
                    <Typography component="h1" className={classes.h1}>Visualize the experience</Typography>
                </Grid>
            <Grid className={classes.imageWrapper}>
                {images.map((image, i) => (
                    <ScrollAnimation animateIn="slideInUp" duration={2}  className={classes.imageCard} >
                        {console.log(i)}
                        <img onClick={() => props.history.push("/services")} src={image} alt={`slider ${i}`} className={classes.image}/>
                    </ScrollAnimation>
                ))}
            </Grid>
         
        </Grid>
    )
};

export default withRouter(Gallery);