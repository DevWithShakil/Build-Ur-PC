import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
    UserOutlined,
    LaptopOutlined,
    LockOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Form, Checkbox, Input } from 'antd';
import { useRouter } from 'next/router';
const { Header, Sider, Content } = Layout;
const Navbar = () => {
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

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const centerContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px'
    };
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
                    <div style={centerContainerStyle}>

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <div>
                                    <Button style={{ marginRight: '10px' }} type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button >
                                    Or <a href="">register now!</a>
                                </div>
                            </Form.Item>
                        </Form>

                    </div>

                </Content>
            </Layout>
        </Layout >
    );
};
export default Navbar;