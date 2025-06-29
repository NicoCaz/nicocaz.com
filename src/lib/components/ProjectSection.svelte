<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { fly } from 'svelte/transition';

	const { projects } = $props();

	// Sort projects: active first, then completed
	const sortedProjects = $derived(
		[...projects].sort((a, b) => {
			if (a.status === 'active' && b.status === 'completed') return -1;
			if (a.status === 'completed' && b.status === 'active') return 1;
			return 0;
		})
	);

	const activeProjects = $derived(sortedProjects.filter(p => p.status === 'active'));
	const completedProjects = $derived(sortedProjects.filter(p => p.status === 'completed'));
</script>

<section class="container">
	<div class="mx-auto max-w-[980px] py-8 md:py-12">
		<div class="flex flex-col items-center gap-4 text-center mb-12">
			<h2 class="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
				Projects Portfolio
			</h2>
			<p class="max-w-[600px] text-gray-600 dark:text-gray-300 leading-relaxed">
				A selection of projects that demonstrate my technical capabilities and problem-solving approach
			</p>
		</div>

		<!-- Active Projects -->
		{#if activeProjects.length > 0}
			<div class="mb-12">
				<div class="flex items-center gap-3 mb-6">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Currently Active</h3>
					<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200">
						<span class="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
						In Development
					</span>
				</div>
				<div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
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
			<div>
				<div class="flex items-center gap-3 mb-6">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Completed Projects</h3>
					<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
						<span class="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1.5"></span>
						{completedProjects.length} Projects
					</span>
				</div>
				<div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
					{#each completedProjects as project, i}
						<div in:fly={{ y: 20, duration: 400, delay: i * 100 }}>
							<ProjectCard {project} />
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section> 