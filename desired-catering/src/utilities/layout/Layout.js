import React from 'react';
import {withRouter} from 'react-router-dom';
import Aux from './../Aux/Aux';
import Navigation from './../../containers/Navigation/Navigation';
import Jumbotron from './../../components/UI/Jumbotron/Jumbotron';

const Layout = (props) => {
    return (
        <Aux>
            <Navigation/>
            <Jumbotron/>
             <main >
                {props.children}
            </main>
        </Aux>

    )
};

export default withRouter(Layout);