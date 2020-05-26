import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;

function CustomLayout(props){
    const isAuthenticated = useSelector(state => state.token !== null);
    const dispatch = useDispatch();
    return <Layout className="layout">
        <Header>
          <div className="logo" />

          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

            {
                isAuthenticated ?
                  <Menu.Item key="2" onClick={dispatch(actions.logout())}>Logout</Menu.Item>
                  :
                  <Menu.Item key="2"><Link to='/login/'>Login</Link></Menu.Item>

            }
            <Menu.Item key="1"><Link to='/'>Post</Link></Menu.Item>

          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/" >/List</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
}


export default CustomLayout;