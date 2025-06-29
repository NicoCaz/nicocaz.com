<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { projects } from '$lib/data/projects';
	import { personalInfo } from '$lib/data/personalInfo';
	import { experience } from '$lib/data/experience';
	import Skills from '$lib/components/Skills.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { fly } from 'svelte/transition';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	

</script>

<MetaTags
	title="{personalInfo.name} - {personalInfo.title}"
	description={personalInfo.shortBio}
/>



<section class="container relative overflow-hidden">
	<!-- Background gradient - more subtle -->
	<div class="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
	
	<div class="mx-auto flex max-w-[980px] flex-col items-center gap-6 py-16 md:py-20 lg:py-28">
		<!-- Professional avatar -->
		<div class="relative">
			<div class="h-28 w-28 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg flex items-center justify-center text-3xl font-bold text-white">
				{personalInfo.name.split(' ').map(n => n[0]).join('')}
			</div>
			<div class="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-3 border-white dark:border-gray-900"></div>
		</div>
		
		<div class="text-center space-y-3">
			<h1 class="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
				{personalInfo.name}
			</h1>
			
			<div class="flex items-center justify-center gap-3">
				<div class="h-px w-12 bg-gray-300 dark:bg-gray-600"></div>
				<h2 class="text-lg font-medium text-gray-600 dark:text-gray-400 md:text-xl">
					{personalInfo.title}
				</h2>
				<div class="h-px w-12 bg-gray-300 dark:bg-gray-600"></div>
			</div>
		</div>
		
		<p class="max-w-[700px] text-center text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
			{personalInfo.shortBio}
		</p>
		
		<div class="flex flex-col sm:flex-row gap-4">
			<a href="/projects" class="inline-flex h-11 items-center justify-center rounded-lg bg-gray-900 dark:bg-white px-8 text-sm font-medium text-white dark:text-gray-900 transition-colors hover:bg-gray-800 dark:hover:bg-gray-100">
				View Projects
			</a>
			<a href="/experience" class="inline-flex h-11 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-8 text-sm font-medium text-gray-900 dark:text-white transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
				Experience
			</a>
		</div>
	</div>
</section>

<section class="container px-4 py-16 md:py-20">
	<div class="mx-auto max-w-[980px]">
		<div class="flex flex-col items-center gap-6 text-center mb-16">
			<div class="relative">
				<h2 class="text-4xl font-bold tracking-tight md:text-5xl text-gray-900 dark:text-white">
					Work Experience
				</h2>
				<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
			</div>
			<p class="max-w-[600px] text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
				My professional journey and the roles that shaped my career
			</p>
		</div>
		<div class="space-y-6">
			{#each experience as exp, i}
				<div in:fly={{ y: 20, duration: 400, delay: i * 100 }}>
					<ExperienceCard {exp} />
				</div>
			{/each}
		</div>
	</div>
</section>


<!-- Skills section with custom padding handled internally -->
<Skills/>

<section class="container px-4 py-16 md:py-20">
	<div class="mx-auto max-w-[980px]">
		<ProjectSection {projects} />
	</div>
</section>

<section class="container px-4 py-16 md:py-20">
	<div class="mx-auto max-w-[980px]">
		<SocialLinks />
	</div> 
</section>

