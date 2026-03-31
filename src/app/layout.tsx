import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Axoblade | Systems Integrations Architect | Cloud Platforms",
	description:
		"Batte Akhsam - Systems Integrations Architect building scalable cloud platforms, enterprise integrations, and API-first systems.",
	keywords: [
		"systems integrations architect",
		"software engineering",
		"systems integration",
		"cloud architecture",
		"microservices",
		"kubernetes",
		"backend development",
	],
	authors: [{ name: "Batte Akhsam" }],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://axoblade.dev",
		title: "Axoblade | Systems Integrations Architect",
		description:
			"Building scalable cloud platforms, enterprise integrations, and API-first systems with modern infrastructure",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
