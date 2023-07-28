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
import { useRouter } from 'next/router';
const { Header, Sider, Content } = Layout;
const PcBuilderPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const router = useRouter();
    const handleHomeClick = () => {
        router.push('/');
    }
    const handleAccountClick = () => {
        router.push('/components/Auth/registerPage');
    }
    const handleBuilderClick = () => {
        router.push('/components/PcBuilder/PcBuilderPage');
    }
    const handleContactClick = () => {
        router.push('/components/Contact/contact');
    }
    return (
        <Layout>
            <Sider style={{ height: '100vh' }} trigger={null} collapsible collapsed={collapsed}>
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
                            onClick: handleHomeClick
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: 'Account',
                            onClick: handleAccountClick


                        },
                        {
                            key: '3',
                            icon: <LaptopOutlined />,
                            label: 'PC Builder',
                            onClick: handleBuilderClick
                        },
                        {
                            key: '4',
                            icon: <MessageOutlined />,
                            label: 'Contact',
                            onClick: handleContactClick
                        }
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
                        minHeight: '0vh',
                        background: colorBgContainer,
                    }}
                >
                    <h1 style={{ color: 'red' }}>Hello</h1>
                </Content>
            </Layout>
        </Layout >
    );
};
export default PcBuilderPage;