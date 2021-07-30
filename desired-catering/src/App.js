import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Layout from './utilities/layout/Layout';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import './App.css';


const App = () => {
  let routes = (
    <Switch>
             <Route exact path='/services' component={Services}/>

      <Route exact path='/' component={Home}/>
      {/* <Route exact path='/meetthechef' component={About}/>      
       */}
    </Switch>
  )
  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);
