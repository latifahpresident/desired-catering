import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Layout from './utilities/layout/Layout';
import './App.css';
import About from './components/Home/About/About';
import Services from './components/Home/Services/Servies';
import Contact from './components/Home/Contact/Contact';


const App = () => {
  // let routes = (
  //   <Switch>
  //     <Route exact path='/meetthechef' component={About}/>      
  //     <Route exact path='/services' component={Services}/>
  //   </Switch>
  // )
  return (
    <div className="App">
      <Layout>
        <About/>
        <Services/>
        {/* <Contact/> */}
      </Layout>
    </div>
  );
}

export default withRouter(App);
