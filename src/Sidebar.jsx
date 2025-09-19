import React from 'react';
import './Sidebar.css';
import { Button, Layout, List, Menu, Typography } from 'antd';
import {
    BookOutlined,
    UserOutlined,
    ContainerOutlined,
    TeamOutlined,
    SolutionOutlined,
    PieChartOutlined,
    ShoppingOutlined,
    FolderOpenOutlined,
    WechatOutlined,
    FileTextOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = () => {
    return (
        <Sider width={250} style={{ background: '#fff', height: '100vh', borderRight: '1px solid #f0f0f0' }}>
            <div style={{
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '24px',
                borderBottom: '1px solid #f0f0f0'
            }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#1890ff',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                }}>
                    <UserOutlined style={{ color: 'white', fontSize: '16px' }} />
                </div>
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#262626' }}>ByeWind</span>
            </div>

            <div style={{ padding: '16px 0' }}>
                <div style={{ display: 'flex', paddingLeft: '24px', marginBottom: '8px' }}>
                    <Button style={{
                        fontSize: '12px',
                        letterSpacing: '0.5px',
                        color: 'gray'

                    }} type="text">
                        Favorites
                    </Button>
                    <Button style={{
                        fontSize: '12px',

                        color: 'lightgrey'
                    }} type="text">
                        Recently
                    </Button>

                </div>

                <div>
                    <ul style={{ listStyleType: 'disc', color: 'lightgray' }}>
                        <li style={{ marginBottom: '15px', marginLeft: '15px' }}><span style={{ color: '#262626' }}>Overview</span></li>
                        <li style={{ marginBottom: '15px', marginLeft: '15px' }}><span style={{ color: '#262626' }}>Projects</span></li>
                    </ul>
                </div>

                <Menu
                    mode="inline"
                    style={{
                        borderRight: 0,
                        fontSize: '14px',
                        backgroundColor: 'transparent'
                    }}
                >
                    <Menu.ItemGroup key="dashboards" title={<Text style={{
                        fontSize: '12px',
                        letterSpacing: '0.5px',
                        color: 'gray',
                        paddingLeft: '24px'
                    }}>Dashboards</Text>}>
                        {/* <Menu.Item key="default" icon={<PieChartOutlined />} style={{
                            paddingLeft: '24px',
                            color: '#262626',
                            height: '36px'
                        }}>
                            Default
                        </Menu.Item>
                        <Menu.Item key="ecommerce" icon={<ShoppingOutlined />} style={{
                            paddingLeft: '24px',
                            color: '#262626',
                            height: '36px'
                        }}>
                            eCommerce
                        </Menu.Item>
                        <Menu.Item key="projects" icon={<FolderOpenOutlined />} style={{
                            paddingLeft: '24px',
                            color: '#262626',
                            height: '36px'
                        }}>
                            Projects
                        </Menu.Item>
                        <Menu.Item key="courses" icon={<BookOutlined />} style={{
                            paddingLeft: '24px',
                            color: '#262626',
                            height: '36px'
                        }}>
                            Online Courses
                        </Menu.Item> */}
                        <Menu.Item key="default" icon={<PieChartOutlined />} style={{
                            paddingLeft: '50px',
                            color: '#262626',
                            height: '36px'
                        }}>
                            Default
                        </Menu.Item>
                        <Menu.SubMenu
                            key="ecommerce"
                            icon={<ShoppingOutlined />}
                            title="eCommerce"
                            style={{
                                paddingLeft: '25px',
                                color: '#262626'
                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="projects"
                            icon={<FolderOpenOutlined />}
                            title="Projects"
                            style={{
                                paddingLeft: '25px',
                                color: '#262626'
                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="courses"
                            icon={<BookOutlined />}
                            title="Projects"
                            style={{
                                paddingLeft: '25px',
                                color: '#262626'
                            }}
                        >
                        </Menu.SubMenu>
                    </Menu.ItemGroup>



                    <Menu.ItemGroup key="pages" title={<Text style={{
                        fontSize: '12px',
                        letterSpacing: '0.5px',
                        color: 'gray',
                        paddingLeft: '24px'
                    }}>Pages</Text>}>
                        <Menu.SubMenu
                            key="user-profile"
                            icon={<UserOutlined />}
                            title="User Profile"
                            style={{
                                paddingLeft: '25px',
                                color: '#262626'
                            }}
                        >
                            <Menu.Item key="profile-overview" style={{ paddingLeft: '48px', height: '36px', color: '#262626' }}>
                                Overview
                            </Menu.Item>
                            <Menu.Item key="profile-projects" style={{ paddingLeft: '48px', height: '36px', color: '#262626' }}>
                                Projects
                            </Menu.Item>
                            <Menu.Item key="profile-campaigns" style={{ paddingLeft: '48px', height: '36px', color: '#262626' }}>
                                Campaigns
                            </Menu.Item>
                            <Menu.Item key="profile-documents" style={{ paddingLeft: '48px', height: '36px', color: '#262626' }}>
                                Documents
                            </Menu.Item>
                            <Menu.Item key="profile-followers" style={{ paddingLeft: '48px', height: '36px', color: '#262626' }}>
                                Followers
                            </Menu.Item>
                        </Menu.SubMenu>
                        {/* <Menu.Item key="account" icon={<SolutionOutlined />} style={{
                            paddingLeft: '24px',
                            color: '#262626',
                            height: '36px'
                        }}>
                            Account
                        </Menu.Item>
                        <Menu.Item key="corporate" icon={<TeamOutlined />} style={{
                            paddingLeft: '24px',
                            color: '#262626',
                            height: '36px'
                        }}>
                            Corporate
                        </Menu.Item>
                        <Menu.Item key="blog" icon={<ContainerOutlined />} style={{
                            paddingLeft: '24px',
                            color: '#262626',
                            height: '36px'
                        }}>
                            Blog
                        </Menu.Item>
                        <Menu.Item key="social" icon={<WechatOutlined />} style={{
                            paddingLeft: '24px',
                            color: '#262626',
                            height: '36px'
                        }}>
                            Social
                        </Menu.Item> */}
                        <Menu.SubMenu
                            key="account"
                            icon={<SolutionOutlined />}
                            title="Account"
                            style={{
                                paddingLeft: '25px',
                                color: '#262626'
                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="corporate"
                            icon={<TeamOutlined />}
                            title="Corporate"
                            style={{
                                paddingLeft: '25px',
                                color: '#262626'
                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="blog"
                            icon={<ContainerOutlined />}
                            title="Blog"
                            style={{
                                paddingLeft: '25px',
                                color: '#262626'
                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="social"
                            icon={<WechatOutlined />}
                            title="Social"
                            style={{
                                paddingLeft: '25px',
                                color: '#262626'
                            }}
                        >
                        </Menu.SubMenu>
                    </Menu.ItemGroup>
                </Menu>
            </div>
        </Sider>
    );
};

export default Sidebar;