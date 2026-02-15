<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { experience, achievements, references } from '$lib/data/experience';
	import { personalInfo } from '$lib/data/personalInfo';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import AchievementCard from '$lib/components/AchievementCard.svelte';
	import ReferenceCard from '$lib/components/ReferenceCard.svelte';
</script>

<MetaTags
	title="Experience"
	description={`Professional experience and work history of ${personalInfo.name}, including roles at ${experience[0].company} and ${experience[1].company}`}
/>

<div class="container py-16 sm:py-20">
	<div class="mx-auto max-w-3xl">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Professional Experience</h1>
		<div class="mt-6 text-lg text-gray-600 dark:text-gray-400">
		</div>

		<div class="mt-16 space-y-12">
			{#each experience as exp}
				<ExperienceCard {exp} />
			{/each}
		</div>

		<div class="mt-16">
			<h2 class="text-2xl font-bold tracking-tight">Achievements</h2>
			<div class="mt-6 space-y-6">
				{#each achievements as achievement}
					<AchievementCard {achievement} />
				{/each}
			</div>
		</div>

		<div class="mt-16">
			<h2 class="text-2xl font-bold tracking-tight">Professional References</h2>
			<div class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
				{#each references as ref}
					<ReferenceCard {ref} />
				{/each}
			</div>
		</div>
	</div>
</div> 