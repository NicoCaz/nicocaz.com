<script lang="ts">
    import { fly } from 'svelte/transition';
    import { skills } from '$lib/data/education';

	const skillsWithIcons = skills.map((skill) => {
		let icon;
		switch (skill.category) {
			case 'Programming Languages':
				icon = '💻';
				break;
			case 'Databases':
				icon = '🗄️';
				break;
			case 'Cloud & DevOps':
				icon = '☁️';
				break;
			case 'Other Skills':
				icon = '🛠️';
				break;
			default:
				icon = '✨';
		}
		return {
			...skill,
			icon
		};
	});
</script>

<section class="container">
	<div class="mx-auto max-w-[980px] py-4 md:py-4">
		<div class="flex flex-col items-center gap-4 text-center">
			<h2 class="text-3xl font-bold tracking-tight md:text-4xl">Skills</h2>
			<p class="max-w-[750px] text-lg text-muted-foreground">
				A quick overview of my technical skills.
			</p>
		</div>
		<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each skillsWithIcons as skill, i}
				<div
					in:fly={{ y: 20, duration: 600, delay: i * 150 }}
					class="group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
				>
					<div class="flex items-center gap-4 mb-5">
						{#if skill.icon}
							<span class="text-3xl text-primary drop-shadow-sm">{skill.icon}</span>
						{/if}
						<h3 class="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
							{skill.category}
						</h3>
					</div>
					<ul class="space-y-2.5 text-sm text-muted-foreground">
						{#each skill.items as item}
							<li class="flex items-center gap-2.5">
								<span class="w-2 h-2 rounded-full bg-primary/70 group-hover:bg-primary transition-colors duration-300"></span>
								<span class="group-hover:text-foreground transition-colors duration-300">{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section> 