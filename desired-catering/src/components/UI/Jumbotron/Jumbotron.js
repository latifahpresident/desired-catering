import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import PromoVid from './../../../assets/videos/Chef.mp4';
import { useStyles } from './Jumbotron-styles';

const Jumbotron = (props) => {
    const classes = useStyles(props);
    return (
        <React.Fragment>
                <CardMedia
                component='video'
                className={classes.mobileMedia}
                image={PromoVid}
                autoPlay
                controls
                muted
                playsInline
                loop
            />  
        </React.Fragment>
        
    )
};

export default Jumbotron;