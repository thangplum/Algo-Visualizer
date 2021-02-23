import { Col, Layout, Menu, Row } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/shared/NavBar';
import { path } from './pages/path';
import { sort } from './pages/sort';
import { home } from './pages/home';

function App() {
  return (
    <div className="App">
      <Layout>
        <NavBar />
        {/* <Content style={{textAlign: 'center', padding: '0 50px'}}>
          <h1 style={{fontWeight: 800}}>Welcome to my awesome project: AlgoVisual</h1>
          <h2>This project stems from the fact that I am not that good in algorithm. And the more I learn</h2>
          <h2>about it, the more I feel imcopetent. So, with this project, I will try to help others who is struggling</h2>
          <h2>with algorithms to have a way to visualize and understand them thoroughly</h2>
        </Content> */}
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/pathfinding" component={path} />
          <Route path="/sorting" component={sort} />
        </Switch>
      </Layout>
      
    </div>
  );
}

export default App;
