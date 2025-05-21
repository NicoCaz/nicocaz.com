<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { fly } from 'svelte/transition';

	const { projects } = $props();

	const featuredProject = projects[0];
	const otherProjects = projects.slice(1, 4);
</script>

<section class="container">
	<div class="mx-auto max-w-[980px] py-8 md:py-12">
		<div class="flex flex-col items-center gap-4 text-center">
			<h2 class="text-3xl font-bold tracking-tight md:text-4xl">Recent Projects</h2>
			<p class="max-w-[750px] text-lg text-muted-foreground">
				Take a look at some of my latest work
			</p>
		</div>

		{#if featuredProject}
			<div class="mt-8 mb-12">
				<h3 class="text-2xl font-semibold tracking-tight text-center mb-4">Currently working on</h3>
				<div in:fly={{ y: 20, duration: 600 }}>
					<ProjectCard project={featuredProject} featured={true} />
				</div>
			</div>
		{/if}

		{#if otherProjects.length > 0}
			<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each otherProjects as project, i}
					<div in:fly={{ y: 20, duration: 600, delay: i * 200 }} class="flex">
						<ProjectCard {project} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section> 