<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { projects } from '$lib/data/projects';
	import { personalInfo } from '$lib/data/personalInfo';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<MetaTags
	title="Projects"
	description={`A showcase of ${personalInfo.name}'s recent development projects and technical work, featuring ${projects.length} projects across various technologies.`}
/>

<div class="container py-16 sm:py-20">
	<div class="mx-auto max-w-3xl">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Featured Projects</h1>
		<div class="mt-6 text-lg text-gray-600 dark:text-gray-400">
			<p>A selection of projects that demonstrate my technical capabilities and problem-solving approach.</p>
		</div>
		<div class="mt-16 space-y-16">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</div> 