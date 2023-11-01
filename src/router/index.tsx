/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Home from "@/views/Home";
const About = lazy(() => import("@/views/About"));
const User = lazy(() => import("../views/User"));

import WithLoadingComponent from "@/components/Loading";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "about",
				element: WithLoadingComponent(<About />),
			},
			{ path: "home", element: <Home /> },
			{
				path: "user",
				element: WithLoadingComponent(<User />),
			},
		],
	},
]);
export default router;
