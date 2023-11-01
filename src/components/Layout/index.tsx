import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Option 1", "1", <PieChartOutlined />),
	getItem("Option 2", "2", <DesktopOutlined />),
	getItem("User", "sub1", <UserOutlined />, [
		getItem("Tom", "3"),
		getItem("Bill", "4"),
		getItem("Alex", "5"),
	]),
	getItem("Team", "sub2", <TeamOutlined />, [
		getItem("Team 1", "6"),
		getItem("Team 2", "8"),
	]),
	getItem("Files", "9", <FileOutlined />),
];

const LayoutComponents: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout style={{ minHeight: "100vh" }}>
			{/* 左侧侧边栏 */}
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<div className="logo" />
				<Menu
					theme="dark"
					defaultSelectedKeys={["1"]}
					mode="inline"
					items={items}
				/>
			</Sider>
			{/* 右侧内容 */}
			<Layout className="site-layout">
				{/* //右侧顶部内容 */}
				<Header
					className="site-layout-background"
					style={{ padding: 0 }}
				>
					<Breadcrumb style={{ margin: "16px" }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
				</Header>
				{/* 右侧盒子内容 */}
				<Content
					style={{ margin: "16px 16px 0px 16px" }}
					className="site-layout-background"
				></Content>
				{/* 右侧底部内容 */}
				<Footer
					style={{
						textAlign: "center",
						padding: 0,
						lineHeight: "48px",
					}}
				>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default LayoutComponents;
