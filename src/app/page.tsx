"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	CheckCircle2,
	Cloud,
	Code2,
	Database,
	ExternalLink,
	Github,
	Linkedin,
	Mail,
	Server,
	ShieldCheck,
	Workflow,
	Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const sectionReveal = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: "easeOut" },
	},
};

const staggerChildren = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.08, delayChildren: 0.05 },
	},
};

const expertise = [
	{
		title: "Platform Architecture",
		description:
			"Cloud-native systems, API-first design, microservices boundaries, and multi-tenant platform delivery.",
		icon: Server,
		accent: "text-accent",
	},
	{
		title: "Cloud And DevOps",
		description:
			"Docker, Kubernetes, CI/CD automation, zero-downtime deployments, and production readiness practices.",
		icon: Cloud,
		accent: "text-secondary",
	},
	{
		title: "Enterprise Integrations",
		description:
			"Payments, URA, accounting systems, OAuth2/JWT authentication, and compliance-driven workflows.",
		icon: Workflow,
		accent: "text-accent",
	},
	{
		title: "Backend Engineering",
		description:
			"Node.js, NestJS, .NET, Prisma, PostgreSQL, and high-reliability API implementation.",
		icon: Database,
		accent: "text-secondary",
	},
	{
		title: "Frontend Delivery",
		description:
			"React, TypeScript, responsive interfaces, dashboard UX, and product surfaces that feel premium.",
		icon: Code2,
		accent: "text-accent",
	},
	{
		title: "Security And Compliance",
		description:
			"Production controls, incident handling, postmortems, cyber security awareness, and resilient systems.",
		icon: ShieldCheck,
		accent: "text-secondary",
	},
];

const experience = [
	{
		period: "Dec 2025 - Present",
		role: "Team Lead, Software Engineering",
		company: "Reveloop TechSystems Ltd",
		description:
			"Leading architecture and execution for a multi-tenant healthcare payments platform built with NestJS, TypeScript, Prisma, PostgreSQL, and React.",
		highlights: [
			"Owned payments, billing, patients, providers, notifications, and Stripe integrations end-to-end.",
			"Drove code quality through reviews, refactoring, testing strategy, and schema evolution.",
			"Partnered with stakeholders to turn compliance and business needs into scalable technical designs.",
		],
	},
	{
		period: "Jul 2022 - Jul 2025",
		role: "Software Engineering Manager",
		company: "KumuSoft Solutions Ltd",
		description:
			"Designed and delivered microservices and APIs integrating URA, mobile money, and payment gateways for enterprise clients.",
		highlights: [
			"Reduced onboarding from 48 hours to same-day through better integration design.",
			"Opened new revenue streams by connecting accounting systems to URA EFRIS.",
			"Modernized legacy systems with Docker, Kubernetes, and automated CI/CD on DigitalOcean.",
		],
	},
	{
		period: "Oct 2020 - Jun 2022",
		role: "Software Engineering Officer",
		company: "KumuSoft Solutions Ltd",
		description:
			"Built internal platforms and integration products for booking, tax compliance, accounting, and reconciliation workflows.",
		highlights: [
			"Delivered a booking and ticketing system for Uganda Wildlife Education Center that increased bookings by 30%.",
			"Built REST APIs and desktop/web clients for QuickBooks, Tally ERP 9, ZohoBooks, Sage 200, and Sage Evolution.",
			"Improved tax compliance and reduced manual operations for client businesses.",
		],
	},
	{
		period: "Jan 2019 - Sep 2021",
		role: "Product Owner",
		company: "Echolink Technologies Ltd",
		description:
			"Contributed as product owner, project manager, and software developer on MobileFundi.",
		highlights: [
			"Supported product design, feature delivery, and backend integration.",
			"Helped position the product to secure over $100,000 in private sector funding.",
		],
	},
];

const projectCards = [
	{
		name: "EFRISBuddy",
		tagline:
			"Offline-first fiscal compliance platform for East African businesses.",
		description:
			"A SaaS platform used to issue fiscal invoices through the Uganda Revenue Authority API across Android, web, and desktop. It supports offline invoicing, automatic sync, accounting reconciliation, and a business intelligence dashboard.",
		metrics: [
			"10K+ transactions/day",
			"120+ active users/day",
			"50+ active businesses",
			"99.9% uptime",
		],
		stack: [
			"NestJS",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"Angular",
			".NET",
			"Kubernetes",
			"Docker",
		],
		link: "https://efris.app",
		accent: "accent",
		points: [
			"Issue up to 50 invoices offline before syncing back to URA.",
			"Runs across Android, POS, desktop, and web with synchronized compliance workflows.",
			"Supports accounting reconciliation into QuickBooks, Tally, Zoho Books, Sage, and custom APIs.",
		],
	},
	{
		name: "Qualiworth Online",
		tagline: "Integrated commerce platform for supermarket operations.",
		description:
			"An e-commerce platform for Qualiworth supermarkets with a modern storefront and comprehensive back office. It streamlines order processing and payment handling while integrating directly into the company's accounting systems.",
		metrics: [
			"Retail commerce",
			"Accounting integration",
			"Reduced order processing time",
			"Removed manual reconciliation",
		],
		stack: ["React", "Node.js", "REST APIs", "PostgreSQL", "Payments"],
		link: "https://qualiworth.com",
		accent: "secondary",
		points: [
			"Unified storefront and back office into one operational workflow.",
			"Connected orders and payments directly into accounting operations.",
			"Improved business efficiency by eliminating manual financial reconciliation.",
		],
	},
];

export default function Home() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<main className='min-h-screen bg-darker text-white'>
			<div className='fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(141,255,69,0.18),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(25,245,138,0.14),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(141,255,69,0.10),transparent_24%),linear-gradient(180deg,#000_0%,#030503_42%,#071108_100%)]' />
			<motion.div
				className='fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,rgba(141,255,69,0.14),transparent_26%)]'
				animate={{ opacity: [0.22, 0.38, 0.22], scale: [1, 1.03, 1] }}
				transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className='pointer-events-none fixed inset-0 -z-10 opacity-[0.16]'
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, rgba(141,255,69,0.11) 0 1px, transparent 1px 56px), repeating-linear-gradient(90deg, rgba(141,255,69,0.08) 0 1px, transparent 1px 56px)",
				}}
				animate={{
					backgroundPositionX: ["0px", "56px"],
					backgroundPositionY: ["0px", "56px"],
					opacity: [0.1, 0.17, 0.1],
				}}
				transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
			/>
			<div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
				<motion.div
					className='absolute -left-1/3 top-[22%] h-px w-[65%] bg-gradient-to-r from-transparent via-accent/35 to-transparent'
					animate={{ x: ["-8%", "12%", "-8%"], opacity: [0.2, 0.45, 0.2] }}
					transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className='absolute -right-1/3 top-[58%] h-px w-[60%] bg-gradient-to-r from-transparent via-secondary/30 to-transparent'
					animate={{ x: ["10%", "-10%", "10%"], opacity: [0.12, 0.32, 0.12] }}
					transition={{
						duration: 14,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1.2,
					}}
				/>
				<motion.div
					className='absolute left-[16%] top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent'
					animate={{ y: ["-6%", "6%", "-6%"], opacity: [0.08, 0.24, 0.08] }}
					transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className='absolute right-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-secondary/15 to-transparent'
					animate={{ y: ["5%", "-5%", "5%"], opacity: [0.08, 0.2, 0.08] }}
					transition={{
						duration: 18,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 0.8,
					}}
				/>
				<motion.div
					className='absolute left-[8%] top-[72%] h-40 w-40 rounded-full bg-accent/10 blur-3xl'
					animate={{
						x: [0, 30, -8, 0],
						y: [0, -18, 8, 0],
						scale: [1, 1.08, 0.96, 1],
					}}
					transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className='absolute right-[8%] top-[18%] h-36 w-36 rounded-full bg-secondary/10 blur-3xl'
					animate={{
						x: [0, -26, 10, 0],
						y: [0, 16, -10, 0],
						scale: [1, 0.94, 1.06, 1],
					}}
					transition={{
						duration: 22,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
				/>
			</div>

			<nav className='sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl'>
				<div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-6'>
					<a
						href='#top'
						className='text-2xl font-black tracking-[0.25em] text-white'
					>
						<span className='text-accent'>AXOB</span>
						<Zap
							size={22}
							strokeWidth={2.6}
							className='mx-[0.08em] mb-[0.08em] inline text-accent drop-shadow-[0_0_10px_rgba(141,255,69,0.55)]'
						/>
						ADE
					</a>
					<motion.div
						className='hidden gap-8 text-sm uppercase tracking-[0.2em] text-gray-400 md:flex'
						variants={staggerChildren}
						initial='hidden'
						animate='show'
					>
						{[
							{ href: "#work", label: "Work" },
							{ href: "#expertise", label: "Expertise" },
							{ href: "#experience", label: "Experience" },
							{ href: "#contact", label: "Contact" },
						].map((item) => (
							<motion.a
								key={item.label}
								href={item.href}
								variants={sectionReveal}
								whileHover={{ y: -1, color: "#ffffff" }}
								transition={{ duration: 0.2 }}
							>
								{item.label}
							</motion.a>
						))}
					</motion.div>
				</div>
			</nav>

			<section id='top' className='px-6 pb-24 pt-20 md:pb-32 md:pt-28'>
				<div className='mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end'>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						<div className='mb-6 inline-flex items-center rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent shadow-[0_0_24px_rgba(141,255,69,0.08)]'>
							Batte Akhsam • Systems Integrations Architect
						</div>
						<h1 className='max-w-5xl text-5xl font-black leading-[0.92] text-white sm:text-6xl lg:text-8xl'>
							Axoblade builds
							<span className='block bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent'>
								serious digital infrastructure.
							</span>
						</h1>
						<p className='mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl'>
							I design and lead scalable cloud-native platforms, enterprise
							integrations, and API-first systems for businesses that need
							reliability, speed, and real commercial impact. From payment rails
							to compliance products, I build like a tech agency with the
							accountability of a hands-on engineering lead.
						</p>
						<div className='mt-10 flex flex-col gap-4 sm:flex-row'>
							<a
								href='#work'
								className='inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_30px_rgba(141,255,69,0.22)] transition-transform hover:-translate-y-0.5'
							>
								See Projects <ArrowRight size={18} />
							</a>
							<a
								href='#contact'
								className='inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-accent hover:text-accent'
							>
								Start A Conversation
							</a>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.15 }}
						className='grid gap-4 sm:grid-cols-2 lg:grid-cols-1'
					>
						<div className='rounded-2xl border border-accent/15 bg-white/5 p-6 shadow-[0_0_30px_rgba(141,255,69,0.06)]'>
							<div className='text-sm uppercase tracking-[0.18em] text-gray-400'>
								Scale Delivered
							</div>
							<div className='mt-3 text-4xl font-black text-accent'>10K+</div>
							<p className='mt-2 text-sm leading-6 text-gray-300'>
								Daily transactions processed in production across
								compliance-focused platforms.
							</p>
						</div>
						<div className='rounded-2xl border border-secondary/15 bg-white/5 p-6 shadow-[0_0_30px_rgba(25,245,138,0.06)]'>
							<div className='text-sm uppercase tracking-[0.18em] text-gray-400'>
								Platform Reliability
							</div>
							<div className='mt-3 text-4xl font-black text-secondary'>
								99.9%
							</div>
							<p className='mt-2 text-sm leading-6 text-gray-300'>
								Operational uptime for revenue-critical, client-facing systems.
							</p>
						</div>
						<div className='rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2 lg:col-span-1'>
							<div className='text-sm uppercase tracking-[0.18em] text-gray-400'>
								Current Focus
							</div>
							<div className='mt-3 text-2xl font-bold text-white'>
								Healthcare payments, compliance flows, and multi-tenant product
								architecture.
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<section id='work' className='px-6 py-24 md:py-32'>
				<div className='mx-auto max-w-7xl'>
					<motion.div
						className='mb-14 max-w-3xl'
						variants={sectionReveal}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, margin: "-60px" }}
					>
						<div className='text-sm font-semibold uppercase tracking-[0.22em] text-accent'>
							Selected Work
						</div>
						<h2 className='mt-4 text-4xl font-black leading-tight text-white md:text-6xl'>
							Products that carry operational weight.
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-300'>
							These projects are not concept pieces. They solve live business
							problems, connect to real systems, and prove execution across
							compliance, payments, integrations, and commerce.
						</p>
					</motion.div>

					<div className='space-y-10'>
						{projectCards.map((project, index) => {
							const isQualiworth = project.name === "Qualiworth Online";
							const accentClass = isQualiworth
								? "text-[#ff7a00] drop-shadow-[0_0_10px_rgba(255,122,0,0.45)]"
								: project.accent === "accent"
									? "text-accent"
									: "text-secondary";
							const chipClass = isQualiworth
								? "border-[#ff7a00]/70 bg-transparent text-[#ff9a3d]"
								: project.accent === "accent"
									? "border-accent/30 bg-accent/10 text-accent"
									: "border-secondary/30 bg-secondary/10 text-secondary";
							const articleClass = isQualiworth
								? "rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12"
								: "rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12";
							const headingClass = isQualiworth
								? "mt-4 text-3xl font-black text-[#ff9a2f] drop-shadow-[0_0_12px_rgba(255,122,0,0.35)] md:text-5xl"
								: "mt-4 text-3xl font-black text-white md:text-5xl";
							const descriptionClass = isQualiworth
								? "mt-5 max-w-3xl text-lg leading-8 text-[#ffd8c9]"
								: "mt-5 max-w-3xl text-lg leading-8 text-gray-300";
							const metricClass = isQualiworth
								? "rounded-2xl border border-white/10 bg-black/30 p-5 text-sm font-semibold text-[#ffbb9f]"
								: "rounded-2xl border border-white/10 bg-black/30 p-5 text-sm font-medium text-gray-200";
							const highlightsCardClass = isQualiworth
								? "rounded-2xl border border-white/10 bg-black/30 p-6"
								: "rounded-2xl border border-white/10 bg-black/30 p-6";
							const highlightsTitleClass = isQualiworth
								? "mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff7a00]"
								: "mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400";
							const pointTextClass = isQualiworth
								? "flex gap-3 text-sm leading-7 text-[#ffd8c9]"
								: "flex gap-3 text-sm leading-7 text-gray-300";

							return (
								<motion.article
									key={project.name}
									initial={{ opacity: 0, y: 28 }}
									whileInView={{ opacity: 1, y: 0 }}
									whileHover={{ y: -6 }}
									transition={{ duration: 0.6, delay: index * 0.08 }}
									viewport={{ once: true, margin: "-80px" }}
									className={articleClass}
								>
									<div className='grid gap-10 lg:grid-cols-[1.15fr_0.85fr]'>
										<div>
											<div
												className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentClass}`}
											>
												{project.tagline}
											</div>
											<h3 className={headingClass}>{project.name}</h3>
											<p className={descriptionClass}>{project.description}</p>
											<div className='mt-8 flex flex-wrap gap-3'>
												{project.stack.map((item) => (
													<motion.span
														key={item}
														className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${chipClass}`}
														whileHover={{ y: -2 }}
														transition={{ duration: 0.2 }}
													>
														{item}
													</motion.span>
												))}
											</div>
											<a
												href={project.link}
												target='_blank'
												rel='noopener noreferrer'
												className={`mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] ${accentClass}`}
											>
												Visit Live Project <ExternalLink size={18} />
											</a>
										</div>

										<div className='space-y-5'>
											<div className='grid gap-4 sm:grid-cols-2'>
												{project.metrics.map((metric) => (
													<div key={metric} className={metricClass}>
														{metric}
													</div>
												))}
											</div>
											<div className={highlightsCardClass}>
												<div className={highlightsTitleClass}>Highlights</div>
												<div className='space-y-4'>
													{project.points.map((point) => (
														<div key={point} className={pointTextClass}>
															<motion.div
																animate={{ scale: [1, 1.08, 1] }}
																transition={{
																	duration: 2.4,
																	repeat: Infinity,
																	delay: 0.2,
																}}
															>
																<CheckCircle2
																	className={accentClass}
																	size={18}
																/>
															</motion.div>
															<span>{point}</span>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</motion.article>
							);
						})}
					</div>
				</div>
			</section>

			<section id='expertise' className='px-6 py-24 md:py-32'>
				<div className='mx-auto max-w-7xl'>
					<div className='mb-14 max-w-3xl'>
						<div className='text-sm font-semibold uppercase tracking-[0.22em] text-accent'>
							Expertise
						</div>
						<h2 className='mt-4 text-4xl font-black text-white md:text-6xl'>
							Agency-grade execution, solo-led.
						</h2>
					</div>
					<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
						{expertise.map((item, index) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 24 }}
									whileInView={{ opacity: 1, y: 0 }}
									whileHover={{ y: -4 }}
									transition={{ duration: 0.5, delay: index * 0.05 }}
									viewport={{ once: true, margin: "-60px" }}
									className='rounded-2xl border border-white/10 bg-white/[0.04] p-8'
								>
									<Icon className={item.accent} size={30} />
									<h3 className='mt-5 text-2xl font-bold text-white'>
										{item.title}
									</h3>
									<p className='mt-4 text-base leading-7 text-gray-300'>
										{item.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			<section id='experience' className='px-6 py-24 md:py-32'>
				<div className='mx-auto max-w-7xl'>
					<div className='mb-14 max-w-3xl'>
						<div className='text-sm font-semibold uppercase tracking-[0.22em] text-secondary'>
							Experience
						</div>
						<h2 className='mt-4 text-4xl font-black text-white md:text-6xl'>
							Built through delivery, not theory.
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-300'>
							My career has moved from product ownership into hands-on
							engineering leadership, with a strong pattern: turn operational
							friction into reliable software systems.
						</p>
					</div>

					<div className='space-y-6'>
						{experience.map((item, index) => (
							<motion.article
								key={`${item.company}-${item.role}`}
								initial={{ opacity: 0, x: -24 }}
								whileInView={{ opacity: 1, x: 0 }}
								whileHover={{ y: -4 }}
								transition={{ duration: 0.55, delay: index * 0.06 }}
								viewport={{ once: true, margin: "-60px" }}
								className='rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10'
							>
								<div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
									<div>
										<div className='text-sm font-semibold uppercase tracking-[0.18em] text-accent'>
											{item.company}
										</div>
										<h3 className='mt-2 text-2xl font-black text-white'>
											{item.role}
										</h3>
									</div>
									<div className='text-sm font-semibold uppercase tracking-[0.18em] text-gray-400'>
										{item.period}
									</div>
								</div>
								<p className='mt-5 max-w-4xl text-lg leading-8 text-gray-300'>
									{item.description}
								</p>
								<div className='mt-6 grid gap-3'>
									{item.highlights.map((highlight) => (
										<div
											key={highlight}
											className='flex gap-3 text-sm leading-7 text-gray-300'
										>
											<CheckCircle2 className='mt-1 text-accent' size={18} />
											<span>{highlight}</span>
										</div>
									))}
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section className='px-6 py-24 md:py-32'>
				<div className='mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:grid-cols-3 md:p-12'>
					<div>
						<div className='text-sm font-semibold uppercase tracking-[0.22em] text-accent'>
							Profile
						</div>
						<div className='mt-4 text-3xl font-black text-white'>
							Batte Akhsam
						</div>
						<p className='mt-4 text-base leading-7 text-gray-300'>
							Systems Integrations Architect based in Kampala, Uganda. Bachelors
							of Information Technology, Team University.
						</p>
					</div>
					<div>
						<div className='text-sm font-semibold uppercase tracking-[0.22em] text-secondary'>
							Certifications
						</div>
						<ul className='mt-4 space-y-3 text-sm leading-7 text-gray-300'>
							<li>
								Kubernetes & Cloud Native Associate — The Linux Foundation
							</li>
							<li>Certified in Cyber Security (CC) — ISC2</li>
							<li>Accelerate App Development by Using Copilot — Microsoft</li>
							<li>
								Angular Frontend Development / Problem Solving Intermediate —
								HackerRank
							</li>
						</ul>
					</div>
					<div>
						<div className='text-sm font-semibold uppercase tracking-[0.22em] text-accent'>
							Core Stack
						</div>
						<p className='mt-4 text-sm leading-7 text-gray-300'>
							Node.js, NestJS, .NET, TypeScript, React, Prisma, PostgreSQL,
							Docker, Kubernetes, microservices, cloud-native delivery.
						</p>
					</div>
				</div>
			</section>

			<section id='contact' className='px-6 pb-24 pt-8 md:pb-32'>
				<div className='mx-auto max-w-5xl text-center'>
					<div className='text-sm font-semibold uppercase tracking-[0.22em] text-accent'>
						Contact
					</div>
					<h2 className='mt-4 text-4xl font-black text-white md:text-6xl'>
						If you need strong engineering, start here.
					</h2>
					<p className='mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300'>
						Axoblade is built to signal depth, not noise. If you want a
						platform, integration layer, or backend system delivered with
						technical rigor and product judgment, reach out directly.
					</p>
					<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap'>
						<a
							href='mailto:axoblade@gmail.com'
							className='inline-flex min-w-52 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_30px_rgba(141,255,69,0.22)]'
						>
							<Mail size={18} /> Email
						</a>
						<a
							href='https://github.com/axoblade'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex min-w-52 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-accent hover:text-accent'
						>
							<Github size={18} /> GitHub
						</a>
						<a
							href='https://www.linkedin.com/in/batteakhsam'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex min-w-52 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-secondary hover:text-secondary'
						>
							<Linkedin size={18} /> LinkedIn
						</a>
						<a
							href='https://www.hackerrank.com/profile/axoblade'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex min-w-52 items-center justify-center gap-2 rounded-xl border border-accent/25 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-accent hover:text-accent'
						>
							<Code2 size={18} /> HackerRank
						</a>
					</div>
					<div className='mt-12 text-sm text-gray-500'>
						+256 708 379 861 • WakaTime: @axoblade • HackerRank: axoblade
					</div>
				</div>
			</section>
		</main>
	);
}
