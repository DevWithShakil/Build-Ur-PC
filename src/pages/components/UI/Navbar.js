import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
    UserOutlined,
    LaptopOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Hero from './carosoul';
const { Header, Sider, Content } = Layout;
const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: 'Account',
                        },
                        {
                            key: '3',
                            icon: <LaptopOutlined />,
                            label: 'PC Builder',
                        },
                        {
                            key: '4',
                            icon: <MessageOutlined />,
                            label: 'Contact',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,


                    }}
                >
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
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 500,
                        background: colorBgContainer,
                    }}
                >
                    <Hero />
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};
export default Navbar;