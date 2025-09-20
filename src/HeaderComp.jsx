
import { Layout, Breadcrumb, Input, Button, Space } from "antd";

import { BellIcon, ClockCounterClockwiseIcon, MagnifyingGlassIcon, SidebarIcon, StarIcon, SunIcon } from "@phosphor-icons/react";

const { Header } = Layout;

const HeaderComp = () => {
    return (
        <Header
            style={{
                background: "#fff",
                padding: "0 24px",
                borderBottom: "1px solid #f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "64px",
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <Button
                    type="text"
                    icon={<SidebarIcon size={20} weight="duotone" />}
                    style={{
                        marginRight: "16px",
                        fontSize: "16px",
                    }}
                />
                <Button
                    type="text"
                    icon={<StarIcon size={20} weight="duotone" />}
                    style={{
                        marginRight: "10px",
                        fontSize: "16px",
                    }}
                />
                <Breadcrumb style={{ fontSize: "16px" }}>
                    <Breadcrumb.Item>
                        <span style={{ color: "#8c8c8c" }}>Dashboards</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span style={{ color: "#262626", fontWeight: "500" }}>Default</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
                <Input
                    placeholder="Search"
                    prefix={<MagnifyingGlassIcon size={20} color="" />}
                    suffix={
                        <span
                            style={{
                                fontSize: "20px",
                                color: "#d1d1d1",
                            }}
                        >
                            ⌘/
                        </span>
                    }
                    style={{
                        width: "150px",
                        height: '30px',
                        marginRight: "16px",
                        backgroundColor: "#f3f3f3",
                        borderRadius: '10px'
                    }}
                />

                <Space size="small">
                    <Button
                        type="text"
                        icon={<SunIcon size={20} weight="duotone" />}
                        style={{
                            fontSize: "16px",
                        }}
                    />
                    <Button
                        type="text"
                        icon={<ClockCounterClockwiseIcon size={20} weight="duotone" />}
                        style={{
                            fontSize: "16px",
                        }}
                    />
                    <Button
                        type="text"
                        icon={<BellIcon size={20} weight="duotone" />}
                        style={{
                            fontSize: "16px",
                        }}
                    />
                    <Button
                        type="text"
                        icon={<SidebarIcon size={20} weight="duotone" />}
                        style={{
                            fontSize: "16px",
                        }}
                    />
                </Space>
            </div>
        </Header>
    );
};

export default HeaderComp;
