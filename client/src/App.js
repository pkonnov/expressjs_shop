import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path={'/sing-in'} exact component={Auth}/>
            <Route path={'/'} component={Home}/>
            <Redirect to="/sing-in" />
          </Switch>
        </div>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
