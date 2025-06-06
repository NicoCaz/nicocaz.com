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



<section class="container relative">
	<div class="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-12 md:py-12 lg:py-24">
		<h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
			{personalInfo.name}
		</h1>
		
		<h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
			{personalInfo.title}
		</h1>
		<p class="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
			{personalInfo.shortBio}
		</p>
		<div class="flex gap-4">
			<a href="/projects" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
				View all my work
			</a>
		</div>
	</div>
</section>

<section class="container">
	<div class="mx-auto max-w-[980px] py-8 md:py-12">
		<div class="flex flex-col items-center gap-4 text-center">
			<h2 class="text-2xl font-bold leading-tight tracking-tighter md:text-4xl">Work Experience</h2>
			<p class="max-w-[750px] text-lg text-muted-foreground">
				My professional journey and roles
			</p>
		</div>
		<div class="mt-8 space-y-12">
			{#each experience as exp, i}
				<div in:fly={{ y: 20, duration: 600, delay: i * 200 }}>
					<ExperienceCard {exp} />
				</div>
			{/each}
		</div>
	</div>
</section>


<section class="container">
	<div class="mx-auto max-w-[980px] py-4 md:py-4">
		<div class="mt-8">
			<Skills/>
		</div>
	</div>
</section>

<section class="container">
	<div class="mx-auto max-w-[980px] py-8 md:py-12">
		<ProjectSection {projects} />
	</div>
</section>


<section class="container">
	<div class="mx-auto max-w-[980px] py-8 md:py-12">
		<SocialLinks />
	</div> 
</section>

