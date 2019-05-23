import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Crm from './containers/Crm/Crm'
import Auth from './components/Auth/Auth'
import './App.css';


class App extends React.Component {

  checkAuth(){
    return this.props.loggingIn
  }

  render(){
    return (
      <div className="App">
        <Layout>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/overview">Overview</NavLink></li>
          </ul>
          <Route path="/" exact component={Crm} />
          <Route path="/overivew" />
          <Route path="/login" component={Auth} />
        </Layout>
      </div>
    );
  }
}

export default App;
