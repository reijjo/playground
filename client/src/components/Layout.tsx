import { Outlet } from "react-router";
import { Navbar } from "./navbar-footer/Navbar";
import { Footer } from "./navbar-footer/Footer";

import './Layout.css'

export const Layout = () => {
	return (
		<div className="layout-container">
			<Navbar />
			<main>
				<div className="wrapper">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
}