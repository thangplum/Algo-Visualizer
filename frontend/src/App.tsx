import { Col, Layout, Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        
        <Menu theme="dark" mode="horizontal">
          
            <Menu.Item>Pathfinding</Menu.Item>
            <Menu.Item>Sorting</Menu.Item>
          
          
        </Menu>
      </Layout>
    </div>
  );
}

export default App;
