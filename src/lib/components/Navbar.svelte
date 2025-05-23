<script lang="ts">
	import { page } from '$app/stores';
	import { personalInfo } from '$lib/data/personalInfo';
	import { onMount } from 'svelte';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';

	let isScrolled = false;
	let isMobile = false;

	function handleScroll() {
		isScrolled = window.scrollY > 0;
	}

	function checkMobile() {
		isMobile = window.innerWidth < 768; // Adjust breakpoint as needed
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', checkMobile);
		handleScroll();
		checkMobile();
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

<div
	class="border-b fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-background/80 backdrop-blur-sm'
		: 'bg-background'}"
>
	<div class="container flex h-16 items-center">
		<a href="/" class="mr-6 flex items-center space-x-2">
			{#if !isMobile}
				<span class="font-semibold inline-block">{personalInfo.name}</span>
			{/if}
		</a>
		<nav
			class="flex items-center text-sm font-medium {isMobile ? 'space-x-2' : 'space-x-6'}"
		>
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

		<div class="ml-auto">
			<Button onclick={toggleMode} variant="outline" size="icon">
				{#if $mode === 'dark'}
					<Sun
						class="h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out scale-0 -rotate-90 dark:scale-100 dark:rotate-0"
					/>
				{:else}
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] text-black transition-all duration-300 ease-in-out scale-100 rotate-0 dark:scale-0 dark:rotate-90"
					/>
				{/if}
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</div>
</div> 