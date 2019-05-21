import React from 'react';
import Layout from './hoc/Layout/Layout'
import Crm from './containers/Crm/Crm'
import './App.css';


function App() {
  return (
    <div className="App">
      <Layout>
        <Crm />
      </Layout>
    </div>
  );
}

export default App;
