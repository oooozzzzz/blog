import React from "react";
import { ModeToggle } from "./mode-toggle";
import HeaderTabs from "./HeaderTabs";

function Header() {

	const navLinks = [
		{
			href: "/",
			label: "Home",
		},
		{
			href: "/blog",
			label: "Blog",
		},
		{
			href: "/about",
			label: "About",
		},
	]

	return (
		<header className="container flex relative max-w-5xl w-full items-center justify-center font-light py-8 text-lg">
			<ModeToggle />
			<HeaderTabs links={navLinks}/>
		</header>
	);
}

export default Header;
