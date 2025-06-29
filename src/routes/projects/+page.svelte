<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { projects } from '$lib/data/projects';
	import { personalInfo } from '$lib/data/personalInfo';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { fly } from 'svelte/transition';

	// Sort projects: active first, then completed
	const sortedProjects = [...projects].sort((a, b) => {
		if (a.status === 'active' && b.status === 'completed') return -1;
		if (a.status === 'completed' && b.status === 'active') return 1;
		return 0;
	});

	const activeProjects = sortedProjects.filter(p => p.status === 'active');
	const completedProjects = sortedProjects.filter(p => p.status === 'completed');
</script>

<MetaTags
	title="Projects"
	description={`A showcase of ${personalInfo.name}'s development projects and technical work, featuring ${projects.length} projects across various technologies.`}
/>

<div class="container py-16 sm:py-20">
	<div class="mx-auto max-w-4xl">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white">Projects Portfolio</h1>
		<div class="mt-6 text-lg text-gray-600 dark:text-gray-400">
			<p>A comprehensive showcase of my technical capabilities and problem-solving approach across various technologies and domains.</p>
		</div>
		
		<!-- Active Projects -->
		{#if activeProjects.length > 0}
			<div class="mt-16">
				<div class="flex items-center gap-3 mb-8">
					<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Currently Active</h2>
					<span class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-green-50 text-green-700 border border-green-200">
						<span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
						In Development
					</span>
				</div>
				<div class="space-y-12">
					{#each activeProjects as project, i}
						<div in:fly={{ y: 20, duration: 400, delay: i * 100 }}>
							<ProjectCard {project} />
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Completed Projects -->
		{#if completedProjects.length > 0}
			<div class="mt-20">
				<div class="flex items-center gap-3 mb-8">
					<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Completed Projects</h2>
					<span class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-50 text-gray-600 border border-gray-200">
						<span class="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
						{completedProjects.length} Projects
					</span>
				</div>
				<div class="grid gap-8 md:grid-cols-2">
					{#each completedProjects as project, i}
						<div in:fly={{ y: 20, duration: 400, delay: i * 100 }}>
							<ProjectCard {project} />
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div> 