/**
 * Portfolio Data
 * Update this file with your actual information
 */

export const portfolioData = {
	personal: {
		name: "Batte Akhsam",
		title: "Senior Software Developer",
		email: "batte@example.com",
		github: "https://github.com/yourusername",
		linkedin: "https://linkedin.com/in/yourusername",
		website: "https://batte.dev",
	},

	hero: {
		headline: "Senior Software Developer",
		subheading:
			"Crafting elegant solutions to complex problems. Full-stack developer with a passion for clean code, exceptional UX, and building products that matter.",
	},

	about: {
		intro:
			"With over a decade of experience building web applications and systems, I've developed a deep appreciation for elegant architecture and user-centric design. My journey spans from startups to enterprise environments, where I've led teams and shipped products used by millions.",
		philosophy:
			"I'm passionate about mentoring, open-source contributions, and staying at the cutting edge of technology. When I'm not coding, you'll find me exploring new frameworks, contributing to OSS, or architecting solutions to complex technical challenges.",
		stats: [
			{ value: "10+", label: "Years Experience" },
			{ value: "50+", label: "Projects Shipped" },
			{ value: "24/7", label: "Passion for Code" },
			{ value: "100%", label: "Commitment" },
		],
	},

	experience: [
		{
			role: "Senior Software Developer",
			company: "Tech Company",
			period: "2022 - Present",
			description:
				"Led architecture and development of microservices handling 1M+ daily transactions.",
			highlights: [
				"Architected microservices reducing latency by 60%",
				"Led team of 5 engineers on critical infrastructure",
				"Implemented CI/CD pipeline reducing deployment time by 80%",
			],
		},
		{
			role: "Full-Stack Engineer",
			company: "Growth Startup",
			period: "2020 - 2022",
			description:
				"Built scalable infrastructure and frontend features that increased user engagement by 3x.",
			highlights: [
				"Built real-time features using WebSockets & GraphQL",
				"Optimized database queries improving performance by 40%",
				"Mentored 3 junior developers",
			],
		},
		{
			role: "Software Engineer",
			company: "Early-Stage Startup",
			period: "2018 - 2020",
			description:
				"Developed MVP and led technical decisions from 2 to 20 person engineering team.",
			highlights: [
				"Built MVP in 3 months with React & Node.js",
				"Grew engineering team from 2 to 20 people",
				"Established coding standards and best practices",
			],
		},
	],

	skills: [
		{
			category: "Frontend",
			icon: "Code2",
			skills: [
				"React",
				"TypeScript",
				"Next.js",
				"Tailwind CSS",
				"Vue.js",
				"HTML/CSS",
				"Responsive Design",
			],
		},
		{
			category: "Backend",
			icon: "Zap",
			skills: [
				"Node.js",
				"Python",
				"PostgreSQL",
				"MongoDB",
				"GraphQL",
				"REST APIs",
				"System Design",
			],
		},
		{
			category: "DevOps & Cloud",
			icon: "Target",
			skills: [
				"Docker",
				"Kubernetes",
				"AWS",
				"CI/CD",
				"Terraform",
				"GCP",
				"Monitoring",
			],
		},
	],

	projects: [
		{
			title: "High-Performance Analytics Platform",
			description:
				"Real-time analytics for 10M+ daily events with sub-second query times.",
			tech: ["React", "Node.js", "PostgreSQL", "Redis", "Kubernetes"],
			link: "#",
			impact: "10M+ events/day, <100ms query time",
		},
		{
			title: "Microservices Architecture Migration",
			description:
				"Led migration of monolithic application to scalable microservices.",
			tech: ["Kubernetes", "Docker", "Node.js", "gRPC", "Terraform"],
			link: "#",
			impact: "60% latency reduction, 3x scaling capacity",
		},
		{
			title: "Mobile-First E-Commerce Platform",
			description: "Built responsive platform handling 100K+ concurrent users.",
			tech: ["Next.js", "TypeScript", "Stripe", "AWS", "React Query"],
			link: "#",
			impact: "100K CCU, 99.99% uptime",
		},
		{
			title: "Open Source Contribution",
			description:
				"Maintained and contributed to popular open-source projects.",
			tech: ["Open Source", "React", "Node.js", "Community", "TypeScript"],
			link: "#",
			impact: "1K+ GitHub stars, 200+ contributors helped",
		},
	],

	contact: {
		title: "Let's Work Together",
		description:
			"I'm always interested in hearing about new projects and opportunities. Feel free to reach out!",
		methods: [
			{ type: "email", label: "Email", href: "mailto:batte@example.com" },
			{ type: "github", label: "GitHub", href: "https://github.com" },
			{ type: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
		],
	},

	footer: {
		copyright: "© 2026 Batte Akhsam. Crafted with care.",
		tech: "Built with Next.js, Tailwind CSS & Framer Motion",
	},
};
