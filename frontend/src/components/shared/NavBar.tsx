import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link, NavLink, Route, useLocation } from "react-router-dom";
import Home from '../../App';
import { path } from '../../pages/path';
import { sort } from '../../pages/sort'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = () => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <Header>
            <Link to="/"><h1 className="logo">AlgoVisual</h1></Link>
            <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
                <Menu.Item key="/pathfinding">
                    <Link to="/pathfinding">Pathfinding</Link>
                </Menu.Item>
                <Menu.Item key="/sorting">
                    <Link to="/sorting">Sorting</Link>
                </Menu.Item>
            </Menu>
        </Header>
      
    );
}