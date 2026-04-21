<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { personalInfo } from '$lib/data/personalInfo';
	import { experience, achievements } from '$lib/data/experience';
	import AchievementCard from '$lib/components/AchievementCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { ArrowRight, MapPin, Mail, Github, Linkedin } from 'lucide-svelte';
	import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';

	const currentRole = experience[0];

	// Safe: always returns 2 items regardless of active/completed mix
	const featuredProjects = [
		...projects.filter((p) => p.status === 'active'),
		...projects.filter((p) => p.status === 'completed')
	].slice(0, 2);

	const techStack = ['TypeScript', 'Python', '.NET', 'React', 'SvelteKit', 'PostgreSQL', 'Cloudflare', 'Docker'];
</script>

<!-- HERO -->
<section class="container relative overflow-hidden">
	<div class="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>

	<div class="mx-auto flex max-w-[860px] flex-col items-center gap-6 py-20 md:py-24 lg:py-28">
		<!-- Avatar — single active signal: pill only, no dot -->
		<div class="h-28 w-28 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg flex items-center justify-center text-3xl font-bold text-white">
			{personalInfo.name.split(' ').map((n) => n[0]).join('')}
		</div>

		<!-- Name + subtitle + location in one focused block -->
		<div class="text-center space-y-3">
			<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/50 text-xs font-medium text-green-700 dark:text-green-300">
				<span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
				Open to new opportunities
			</div>

			<h1 class="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
				{personalInfo.name}
			</h1>

			<!-- Title + location on one line -->
			<p class="flex items-center justify-center gap-3 text-base text-gray-500 dark:text-gray-400">
				<span class="font-medium text-gray-700 dark:text-gray-300">{personalInfo.title}</span>
				<span class="text-gray-300 dark:text-gray-600">·</span>
				<span class="inline-flex items-center gap-1">
					<MapPin class="h-3.5 w-3.5" />
					{personalInfo.location}
				</span>
			</p>
		</div>

		<p class="max-w-[620px] text-center text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
			{personalInfo.shortBio}
		</p>

		<!-- CTAs first, tech strip below as proof -->
		<div class="flex flex-col sm:flex-row gap-3">
			<a href="/projects" class="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gray-900 dark:bg-white px-8 text-sm font-medium text-white dark:text-gray-900 transition-colors hover:bg-gray-800 dark:hover:bg-gray-100">
				View Projects
				<ArrowRight class="h-4 w-4" />
			</a>
			<a href="mailto:{personalInfo.email}" class="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-8 text-sm font-medium text-gray-900 dark:text-white transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
				<Mail class="h-4 w-4" />
				Get in touch
			</a>
		</div>

		<!-- Tech strip after CTAs — proof, not pitch -->
		<div class="flex flex-wrap justify-center gap-2 max-w-[620px] pt-2">
			{#each techStack as tech}
				<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
					{tech}
				</span>
			{/each}
		</div>
	</div>
</section>

<!-- ACHIEVEMENT — consistent section pattern -->
{#if achievements.length > 0}
	<section class="container px-4 py-16 md:py-20">
		<div class="mx-auto max-w-[860px]">
			<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
				<div>
					<p class="text-xs font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-400 mb-2">
						Latest Recognition
					</p>
					<h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
						Award
					</h2>
				</div>
			</div>
			<div class="space-y-6">
				{#each achievements as achievement}
					<AchievementCard {achievement} />
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- CURRENT ROLE — canonical section pattern -->
<section class="container px-4 py-16 md:py-20">
	<div class="mx-auto max-w-[860px]">
		<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
			<div>
				<p class="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-2">
					Currently
				</p>
				<h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
					{currentRole.title} at {currentRole.company}
				</h2>
			</div>
			<a href="/experience" class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white group shrink-0">
				Full career history
				<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
			</a>
		</div>

		<Card>
			<CardHeader>
				<div class="flex items-start justify-between gap-3">
					<div class="space-y-0.5">
						<CardTitle>{currentRole.title}</CardTitle>
						<CardDescription class="font-medium">{currentRole.company}</CardDescription>
					</div>
					<div class="flex shrink-0 flex-col items-end gap-1.5">
						<span class="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
							{currentRole.period}
						</span>
						<span class="inline-flex items-center gap-1.5 rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
							<span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
							Active
						</span>
					</div>
				</div>
			</CardHeader>
			<CardContent class="space-y-4">
				<p class="text-sm text-muted-foreground leading-relaxed">{currentRole.description}</p>
				<Separator />
				<ul class="space-y-2">
					{#each currentRole.responsibilities.slice(0, 3) as item}
						<li class="flex items-start gap-2 text-sm text-muted-foreground">
							<span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"></span>
							<span class="leading-relaxed">{item}</span>
						</li>
					{/each}
				</ul>
			</CardContent>
		</Card>
	</div>
</section>

<!-- FEATURED PROJECTS — same section pattern -->
<section class="container px-4 py-16 md:py-20">
	<div class="mx-auto max-w-[860px]">
		<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
			<div>
				<p class="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-2">
					Selected Work
				</p>
				<h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
					Featured Projects
				</h2>
			</div>
			<a href="/projects" class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white group shrink-0">
				All {projects.length} projects
				<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
			</a>
		</div>

		<div class="grid gap-6">
			{#each featuredProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>

<!-- CONNECT — differentiated from footer (footer = sitemap, this = contact action) -->
<section class="container px-4 py-16 md:py-24">
	<div class="mx-auto max-w-[860px]">
		<Card class="text-center">
			<CardHeader>
				<p class="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">Contact</p>
				<CardTitle tag="h2" class="text-3xl md:text-4xl tracking-tight">Hiring, consulting, or just saying hi?</CardTitle>
				<CardDescription class="text-base max-w-[460px] mx-auto pt-1">
					Open to engineering roles, product consulting, and web3 projects. Response within 24h.
				</CardDescription>
			</CardHeader>
			<CardContent class="flex flex-wrap justify-center gap-3 pt-4">
				<a href="mailto:{personalInfo.email}" class="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
					<Mail class="h-4 w-4" />
					Send email
				</a>
				<a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" class="inline-flex h-11 items-center justify-center gap-2 rounded-lg border bg-background px-6 text-sm font-medium transition-colors hover:bg-accent">
					<Linkedin class="h-4 w-4" />
					LinkedIn
				</a>
				<a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" class="inline-flex h-11 items-center justify-center gap-2 rounded-lg border bg-background px-6 text-sm font-medium transition-colors hover:bg-accent">
					<Github class="h-4 w-4" />
					GitHub
				</a>
			</CardContent>
		</Card>
	</div>
</section>
