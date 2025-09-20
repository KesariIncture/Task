import byeWind from './assets/ByeWind.png'
import './Sidebar.css';
import { Button, Layout, List, Menu, Typography } from 'antd';
import { BookOpenIcon, ChartPieSliceIcon, ChatCircleIcon, ChatsCircleIcon, FolderIcon, IdentificationBadgeIcon, IdentificationCardIcon, NotebookIcon, NoteIcon, ShoppingBagOpenIcon, UsersThreeIcon } from "@phosphor-icons/react";

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

                <img src={byeWind} alt="ByeWind" style={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '12px',
                    justifyContent: 'center',
                }} />

                <span style={{ fontSize: '16px', fontWeight: '400', }}>ByeWind</span>
            </div>

            <div style={{ padding: '16px 0' }}>
                <div style={{ display: 'flex', paddingLeft: '24px', marginBottom: '8px' }}>
                    <Button style={{
                        fontSize: '14px',
                        letterSpacing: '0.5px',
                        color: 'gray'

                    }} type="text">
                        Favorites
                    </Button>
                    <Button style={{
                        fontSize: '14px',

                        color: 'lightgrey'
                    }} type="text">
                        Recently
                    </Button>

                </div>

                <div>
                    <ul style={{ listStyleType: 'disc', color: 'lightgray' }}>
                        <li style={{ marginBottom: '15px', marginLeft: '15px', fontSize: '14px', }}><span style={{ color: 'black' }}>Overview</span></li>
                        <li style={{ marginBottom: '15px', marginLeft: '15px', fontSize: '14px', }}><span style={{ color: 'black' }}>Projects</span></li>
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
                        fontSize: '14px',
                        letterSpacing: '0.5px',
                        color: 'gray',
                        paddingLeft: '24px'
                    }}>Dashboards</Text>}>
                        {/* <Menu.Item key="default" icon={<PieChartOutlined />} style={{
                            paddingLeft: '24px',
                            ,
                            height: '36px'
                        }}>
                            Default
                        </Menu.Item>
                        <Menu.Item key="ecommerce" icon={<ShoppingOutlined />} style={{
                            paddingLeft: '24px',
                            ,
                            height: '36px'
                        }}>
                            eCommerce
                        </Menu.Item>
                        <Menu.Item key="projects" icon={<FolderOpenOutlined />} style={{
                            paddingLeft: '24px',
                            ,
                            height: '36px'
                        }}>
                            Projects
                        </Menu.Item>
                        <Menu.Item key="courses" icon={<BookOutlined />} style={{
                            paddingLeft: '24px',
                            ,
                            height: '36px'
                        }}>
                            Online Courses
                        </Menu.Item> */}
                        <Menu.Item key="default" icon={< ChartPieSliceIcon size={'20'} weight='duotone' />} style={{
                            paddingLeft: '50px',

                            height: '36px'
                        }}>
                            Default
                        </Menu.Item>
                        <Menu.SubMenu
                            key="ecommerce"
                            icon={< ShoppingBagOpenIcon size={'20'} />}
                            title="eCommerce"
                            style={{
                                paddingLeft: '25px',

                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="projects"
                            icon={<FolderIcon size={20} />}
                            title="Projects"
                            style={{
                                paddingLeft: '25px',

                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="courses"
                            icon={<BookOpenIcon size={20} weight='duotone' />}
                            title="Online Courses"
                            style={{
                                paddingLeft: '25px',

                            }}
                        >
                        </Menu.SubMenu>
                    </Menu.ItemGroup>



                    <Menu.ItemGroup key="pages" title={<Text style={{
                        fontSize: '14px',
                        letterSpacing: '0.5px',
                        color: 'gray',
                        paddingLeft: '24px'
                    }}>Pages</Text>}>
                        <Menu.SubMenu
                            key="user-profile"
                            icon={<IdentificationBadgeIcon size={20} weight='duotone' />}
                            title="User Profile"
                            style={{
                                paddingLeft: '25px',

                            }}
                        >
                            <Menu.Item key="profile-overview" style={{ paddingLeft: '48px', height: '36px', }}>
                                Overview
                            </Menu.Item>
                            <Menu.Item key="profile-projects" style={{ paddingLeft: '48px', height: '36px', }}>
                                Projects
                            </Menu.Item>
                            <Menu.Item key="profile-campaigns" style={{ paddingLeft: '48px', height: '36px', }}>
                                Campaigns
                            </Menu.Item>
                            <Menu.Item key="profile-documents" style={{ paddingLeft: '48px', height: '36px', }}>
                                Documents
                            </Menu.Item>
                            <Menu.Item key="profile-followers" style={{ paddingLeft: '48px', height: '36px', }}>
                                Followers
                            </Menu.Item>
                        </Menu.SubMenu>
                        {/* <Menu.Item key="account" icon={<SolutionOutlined />} style={{
                            paddingLeft: '24px',
                            ,
                            height: '36px'
                        }}>
                            Account
                        </Menu.Item>
                        <Menu.Item key="corporate" icon={<TeamOutlined />} style={{
                            paddingLeft: '24px',
                            ,
                            height: '36px'
                        }}>
                            Corporate
                        </Menu.Item>
                        <Menu.Item key="blog" icon={<ContainerOutlined />} style={{
                            paddingLeft: '24px',
                            ,
                            height: '36px'
                        }}>
                            Blog
                        </Menu.Item>
                        <Menu.Item key="social" icon={<WechatOutlined />} style={{
                            paddingLeft: '24px',
                            ,
                            height: '36px'
                        }}>
                            Social
                        </Menu.Item> */}
                        <Menu.SubMenu
                            key="account"
                            icon={<IdentificationCardIcon size={20} weight='duotone' />}
                            title="Account"
                            style={{
                                paddingLeft: '25px',

                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="corporate"
                            icon={<UsersThreeIcon size={20} weight='duotone' />}
                            title="Corporate"
                            style={{
                                paddingLeft: '25px',

                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="blog"
                            icon={<NotebookIcon size={20} weight='duotone' />}
                            title="Blog"
                            style={{
                                paddingLeft: '25px',

                            }}
                        >
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="social"
                            icon={<ChatsCircleIcon size={20} weight='duotone' />}
                            title="Social"
                            style={{
                                paddingLeft: '25px',

                            }}
                        >
                        </Menu.SubMenu>
                    </Menu.ItemGroup>
                </Menu>
            </div>
        </Sider >
    );
};

export default Sidebar;