<script lang="ts">
    import { fly } from 'svelte/transition';
    import { skills } from '$lib/data/education';

	const skillsWithIcons = skills.map((skill) => {
		let icon, color;
		switch (skill.category) {
			case 'Programming Languages':
				icon = '💻';
				color = 'bg-blue-600';
				break;
			case 'Databases':
				icon = '🗄️';
				color = 'bg-green-600';
				break;
			case 'Cloud & DevOps':
				icon = '☁️';
				color = 'bg-purple-600';
				break;
			case 'Other Skills':
				icon = '🛠️';
				color = 'bg-gray-600';
				break;
			default:
				icon = '✨';
				color = 'bg-gray-600';
		}
		return {
			...skill,
			icon,
			color
		};
	});
</script>

<section class="container relative px-4 py-16 md:py-20">
	<!-- Background pattern - more subtle -->
	<div class="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-900/50 dark:to-gray-800/50 rounded-2xl"></div>
	
	<div class="relative mx-auto max-w-[980px]">
		<div class="flex flex-col items-center gap-4 text-center mb-12">
			<div class="relative">
				<h2 class="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
					Technical Skills
				</h2>
				<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
			</div>
			<p class="max-w-[600px] text-gray-600 dark:text-gray-300 leading-relaxed">
				Technical expertise and professional capabilities
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each skillsWithIcons as skill, i}
				<div
					in:fly={{ y: 20, duration: 400, delay: i * 100 }}
					class="group relative rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600"
				>
					<!-- Content -->
					<div class="relative">
						<!-- Header -->
						<div class="flex items-center gap-4 mb-6">
							<div class="w-12 h-12 rounded-lg {skill.color} flex items-center justify-center text-xl text-white">
								{skill.icon}
							</div>
							<div class="flex-1">
								<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
									{skill.category}
								</h3>
								<span class="text-sm text-gray-500 dark:text-gray-400">
									{skill.items.length} technologies
								</span>
							</div>
						</div>
						
						<!-- Skills list -->
						<div class="space-y-2">
							{#each skill.items as item}
								<div class="flex items-center gap-3 p-2 rounded-md bg-gray-50 dark:bg-gray-700/50">
									<span class="flex-shrink-0 w-1.5 h-1.5 rounded-full {skill.color}"></span>
									<span class="text-sm font-medium text-gray-700 dark:text-gray-300">
										{item}
									</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section> 