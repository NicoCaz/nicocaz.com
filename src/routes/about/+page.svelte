<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { education, skills, languages } from '$lib/data/education';
	import { personalInfo } from '$lib/data/personalInfo';
	import EducationCard from '$lib/components/EducationCard.svelte';
</script>

<MetaTags
	title="About Me"
	description={`Learn more about ${personalInfo.name}, a ${personalInfo.title} with expertise in ${skills[0].items.slice(0, 4).join(", ")}`}
/>

<div class="container py-16 sm:py-20">
	<div class="mx-auto max-w-3xl">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
		<div class="mt-6 text-lg text-gray-600 dark:text-gray-400">
			<p>{personalInfo.longBio}</p>
		</div>

		<div class="mt-16">
			<h2 class="text-2xl font-bold tracking-tight">Education</h2>
			<div class="mt-6 space-y-8">
				{#each education as edu}
					<EducationCard education={edu} />
				{/each}
			</div>
		</div>


		<div class="mt-16">
			<h2 class="text-2xl font-bold tracking-tight">Languages</h2>
			<div class="mt-6 space-y-4">
				{#each languages as language}
					<div>
						<h3 class="font-semibold">{language.name}</h3>
						<p class="mt-1 text-gray-600 dark:text-gray-400">{language.level}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
