import React, { useEffect, useState } from 'react';
import '../styles/defaultLayout.css';
import { Link,useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useSelector } from 'react-redux';


const { Header, Sider, Content } = Layout;


const SideBar = ({children}) => {
  const cartItems=useSelector(state => state.cart)
  const navigate=useNavigate();
useEffect(()=>{
localStorage.getItem("cart")
},[])
 
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <h1 className='text-center text-light text-weight-bold mt-4'>POS</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}

        >
          <Menu.Item key={"/"} icon={<HomeOutlined />}>
            <Link to={'/'} style={{textDecoration:"none"}}>Home</Link>
          </Menu.Item>
          <Menu.Item key={'/bills'} icon={<CopyOutlined />}>
            <Link to={'/bills'} style={{textDecoration:"none"}} >Bills</Link>
          </Menu.Item>
          <Menu.Item key={'/items'} icon={<UnorderedListOutlined />}>
            <Link to={'/items'} style={{textDecoration:"none"}}>Items</Link>
          </Menu.Item>
          <Menu.Item key={'/customers'} icon={<UserOutlined />}>
            <Link to={'/customers'} style={{textDecoration:"none"}}>Customers</Link>
          </Menu.Item>
          <Menu.Item key={1} icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className='header_items'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          
          <div className="cart_item" onClick={()=>navigate('/cart')}>
            <p>{cartItems.cartItems.length}</p>
            <ShoppingCartOutlined />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;