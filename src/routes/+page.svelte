<script lang="ts">
	import { personalInfo } from '$lib/data/personalInfo';
	import { experience, achievements } from '$lib/data/experience';
	import { projects } from '$lib/data/projects';
	import { skills } from '$lib/data/education';
	import {
		ArrowDown,
		Mail,
		Github,
		Twitter,
		Linkedin,
		ExternalLink,
		Trophy,
		MapPin
	} from 'lucide-svelte';

	// Reveal-on-scroll action (replaces motion/react whileInView)
	function reveal(node: HTMLElement) {
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						node.classList.add('reveal-in');
						io.unobserve(node);
					}
				}
			},
			{ threshold: 0.12 }
		);
		io.observe(node);
		return { destroy: () => io.disconnect() };
	}

	const social = [
		{ name: 'GitHub', url: personalInfo.social.github },
		{ name: 'LinkedIn', url: personalInfo.social.linkedin },
		{ name: 'Twitter', url: personalInfo.social.twitter }
	];
</script>

<!-- HERO -->
<section class="relative flex min-h-[90vh] flex-col justify-center px-6 pt-20 md:px-12 lg:px-24">
	<div class="reveal-init reveal-in mx-auto w-full max-w-6xl" use:reveal>
		<p class="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
			{personalInfo.title}
		</p>
		<h1
			class="mb-8 font-display text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl"
		>
			{personalInfo.name}
		</h1>
		<p
			class="mb-6 max-w-2xl text-xl font-light leading-relaxed text-slate-600 dark:text-slate-300 md:text-2xl"
		>
			{personalInfo.shortBio}
		</p>
		<p class="mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
			<MapPin class="h-4 w-4" />
			{personalInfo.location}
		</p>

		<div class="flex flex-wrap items-center gap-6">
			<a
				href={`mailto:${personalInfo.email}`}
				class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
			>
				<Mail class="h-4 w-4" />
				Get in touch
			</a>
			<div class="flex items-center gap-4">
				{#each social as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full bg-slate-200/50 p-3 text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
						aria-label={link.name}
					>
						{#if link.name === 'GitHub'}<Github class="h-5 w-5" />
						{:else if link.name === 'Twitter'}<Twitter class="h-5 w-5" />
						{:else if link.name === 'LinkedIn'}<Linkedin class="h-5 w-5" />{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div class="absolute bottom-12 left-6 animate-bounce motion-reduce:animate-none md:left-12 lg:left-24">
		<ArrowDown class="h-6 w-6 text-slate-400" />
	</div>
</section>

<!-- EXPERIENCE -->
<section id="experience" class="bg-white px-6 py-24 dark:bg-slate-900 md:px-12 lg:px-24">
	<div class="mx-auto max-w-6xl">
		<h2
			class="reveal-init mb-16 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
			use:reveal
		>
			Experience
		</h2>

		<div class="space-y-16">
			{#each experience as job}
				<div
					class="reveal-init group grid items-start gap-4 md:grid-cols-[1fr_3fr] md:gap-8"
					use:reveal
				>
					<div class="pt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
						{job.period}
					</div>
					<div>
						<h3 class="mb-1 font-display text-xl font-semibold text-slate-900 dark:text-white">
							{job.title}
						</h3>
						<h4 class="mb-4 font-medium text-slate-600 dark:text-slate-400">{job.company}</h4>
						<p class="mb-6 font-light leading-relaxed text-slate-600 dark:text-slate-300">
							{job.description}
						</p>
						<ul class="space-y-2">
							{#each job.responsibilities as item}
								<li
									class="flex items-start gap-2 text-sm font-light leading-relaxed text-slate-600 dark:text-slate-400"
								>
									<span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400"></span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PROJECTS -->
<section id="projects" class="bg-slate-50 px-6 py-24 dark:bg-slate-950 md:px-12 lg:px-24">
	<div class="mx-auto max-w-6xl">
		<h2
			class="reveal-init mb-16 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
			use:reveal
		>
			Selected Work
		</h2>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				{@const href = project.url ?? project.repository}
				<div
					class="reveal-init group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-slate-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
					use:reveal
				>
					<div class="mb-6 flex items-start justify-between">
						<h3
							class="font-display text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
						>
							{project.title}
						</h3>
						{#if href}
							<a
								{href}
								target="_blank"
								rel="noopener noreferrer"
								class="text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
								aria-label={`View ${project.title}`}
							>
								<ExternalLink class="h-5 w-5" />
							</a>
						{/if}
					</div>
					<p class="mb-8 flex-grow font-light leading-relaxed text-slate-600 dark:text-slate-300">
						{project.description}
					</p>
					<div class="mt-auto flex flex-wrap gap-2">
						{#each project.technologies as tag}
							<span
								class="rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- AWARDS -->
{#if achievements.length > 0}
	<section id="awards" class="bg-slate-900 px-6 py-24 text-white dark:bg-slate-950 md:px-12 lg:px-24">
		<div class="mx-auto max-w-6xl">
			<h2
				class="reveal-init mb-16 font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
				use:reveal
			>
				Awards & Recognition
			</h2>

			<div class="space-y-12">
				{#each achievements as award}
					<div
						class="reveal-init group grid items-start gap-6 border-b border-slate-800 pb-12 last:border-0 last:pb-0 md:grid-cols-[auto_1fr] md:gap-8"
						use:reveal
					>
						<div class="rounded-2xl bg-slate-800 p-4 text-blue-400">
							<Trophy class="h-8 w-8" />
						</div>
						<div>
							<div class="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
								<h3 class="font-display text-xl font-semibold text-slate-100">
									{award.title}
								</h3>
								<span
									class="w-fit rounded-full bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-400"
								>
									{award.period}
								</span>
							</div>
							<h4 class="mb-4 font-medium text-slate-400">{award.event}</h4>
							<p class="font-light leading-relaxed text-slate-300">
								{award.prize}{#if award.project} — project <span class="text-slate-100">{award.project}</span>{/if}.
							</p>
							{#if award.projectUrl}
								<a
									href={award.projectUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300"
								>
									{award.projectLinkLabel ?? 'View project'}
									<ExternalLink class="h-4 w-4" />
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- SKILLS -->
<section id="skills" class="bg-white px-6 py-24 dark:bg-slate-900 md:px-12 lg:px-24">
	<div class="mx-auto max-w-6xl">
		<h2
			class="reveal-init mb-16 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
			use:reveal
		>
			Technical Expertise
		</h2>

		<div class="grid gap-12 md:grid-cols-2">
			{#each skills as group}
				<div class="reveal-init" use:reveal>
					<h3
						class="mb-6 border-b border-slate-100 pb-4 font-display text-lg font-semibold text-slate-900 dark:border-slate-800 dark:text-white"
					>
						{group.category}
					</h3>
					<div class="flex flex-wrap gap-3">
						{#each group.items as item}
							<span
								class="rounded-lg border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
							>
								{item}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Hide-before-reveal ONLY when JS is available — no-JS/crawlers see content. */
	:global(html.js) .reveal-init {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}
	:global(.reveal-in) {
		opacity: 1 !important;
		transform: none !important;
	}
	@media (prefers-reduced-motion: reduce) {
		:global(html.js) .reveal-init {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
