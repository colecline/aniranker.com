import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head></head>
			<body className="bg-zinc-900">
				<Header />
				<main className="mx-auto max-w-7xl">
					{children}
					<Analytics />
				</main>
			</body>
		</html>
	);
}
