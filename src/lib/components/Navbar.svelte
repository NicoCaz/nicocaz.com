<script lang="ts">
	import { page } from '$app/stores';
	import { personalInfo } from '$lib/data/personalInfo';
	import { onMount } from 'svelte';


	let isDarkTheme = false;

	let isScrolled = false;

	function toggleTheme() {
		isDarkTheme = !isDarkTheme;
		document.documentElement.classList.toggle('dark', isDarkTheme);
	}

	function handleScroll() {
		isScrolled = window.scrollY > 0;
	}

	onMount(() => {
		isDarkTheme = document.documentElement.classList.contains('dark');
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
	class="border-b fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-background'}"
>
	<div class="container flex h-16 items-center">
		<a href="/" class="mr-6 flex items-center space-x-2">
			<span class="font-semibold inline-block">{personalInfo.name}</span>
		</a>
		<nav class="flex items-center space-x-6 text-sm font-medium">
			<a
				href="/"
				class="transition-colors hover:text-foreground/80 text-foreground {$page.url.pathname === '/' ? 'text-foreground' : 'text-foreground/60'}"
				aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			>
				Home
			</a>
			<a
				href="/projects"
				class="transition-colors hover:text-foreground/80 text-foreground {$page.url.pathname === '/projects' ? 'text-foreground' : 'text-foreground/60'}"
				aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
			>
				Projects
			</a>
			<a
				href="/experience"
				class="transition-colors hover:text-foreground/80 text-foreground {$page.url.pathname === '/experience' ? 'text-foreground' : 'text-foreground/60'}"
				aria-current={$page.url.pathname === '/experience' ? 'page' : undefined}
			>
				Experience
			</a>
			<a
				href="/about"
				class="transition-colors hover:text-foreground/80 text-foreground {$page.url.pathname === '/about' ? 'text-foreground' : 'text-foreground/60'}"
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
			>
				About
			</a>
		</nav>

		<button onclick={toggleTheme} class="ml-auto px-4 py-2 border rounded">
			{isDarkTheme ? 'Light Mode' : 'Dark Mode'}
		</button>
	</div>
</div> 