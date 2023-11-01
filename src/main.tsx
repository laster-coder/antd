import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css"; //初始化的样式
import "antd/dist/antd.css"; //ui框架的样式
import "@/assets/styles/global.scss"; //我的样式

import router from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
