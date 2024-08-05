"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLink = {
	href: string;
	label: string;
};

type Props = {
	links: NavLink[];
};

function HeaderTabs({ links }: Props) {
	const pathname = usePathname();

	return (
		<div>
			{links.map((link) => {
				const isActive = pathname == link.href;
				return (
					<Link
						key={link.label}
						href={link.href}
						className={`px-3 hover:underline ${isActive ? "text-slate-400" : ""}`}
					>
						{link.label}
					</Link>
				);
			})}
		</div>
	);
}

export default HeaderTabs;
