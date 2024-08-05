import Link from "next/link";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<h1>About us</h1>
			<ul className="text-slate-300">
				<li>
					<Link href="/about/contacts">Contacts</Link>
				</li>
				<li>
					<Link href="/about/team">Team</Link>
				</li>
			</ul>
			{children}
		</div>
	);
}
