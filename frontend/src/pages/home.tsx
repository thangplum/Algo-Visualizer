import { Content } from 'antd/lib/layout/layout';
import React from 'react'

interface homeProps {

}

export const home: React.FC<homeProps> = ({}) => {
    return (
        <Content style={{textAlign: 'center', padding: '0 50px'}}>
          <h1 style={{fontWeight: 800}}>Welcome to my awesome project: AlgoVisual</h1>
          <h2>This project stems from the fact that I am not that good in algorithm. And the more I learn</h2>
          <h2>about it, the more I feel imcopetent. So, with this project, I will try to help others who is struggling</h2>
          <h2>with algorithms to have a way to visualize and understand them thoroughly</h2>
        </Content>
    );
}