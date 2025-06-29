<script lang="ts">
	import { page } from '$app/stores';
	import { personalInfo } from '$lib/data/personalInfo';
	import { onMount } from 'svelte';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import { toggleMode, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';

	let isScrolled = false;
	let isMobile = false;
	let isMobileMenuOpen = false;

	function handleScroll() {
		isScrolled = window.scrollY > 10;
	}

	function checkMobile() {
		isMobile = window.innerWidth < 768;
		if (!isMobile) {
			isMobileMenuOpen = false;
		}
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
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

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/experience', label: 'Experience' },
		{ href: '/about', label: 'About' }
	];
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-200 {isScrolled
		? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50'
		: 'bg-transparent'}"
>
	<div class="container flex h-16 items-center justify-between">
		<!-- Logo/Brand -->
		<a 
			href="/" 
			class="flex items-center space-x-3 group"
			on:click={closeMobileMenu}
		>
			<div class="w-9 h-9 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 font-bold text-sm">
				{personalInfo.name.split(' ').map(n => n[0]).join('')}
			</div>
			{#if !isMobile}
				<div class="hidden sm:block">
					<span class="font-semibold text-gray-900 dark:text-white">{personalInfo.name}</span>
					<div class="text-sm text-gray-600 dark:text-gray-400">{personalInfo.title}</div>
				</div>
			{/if}
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex items-center space-x-1">
			{#each navItems as item}
				<a
					href={item.href}
					class="relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 {
						$page.url.pathname === item.href
							? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
							: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
					}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Right side controls -->
		<div class="flex items-center gap-2">
			<!-- Theme toggle -->
			<Button 
				onclick={toggleMode} 
				variant="outline" 
				size="icon"
				class="w-9 h-9 rounded-md border-gray-200 dark:border-gray-700"
			>
				{#if $mode === 'dark'}
					<Sun class="h-4 w-4" />
				{:else}
					<Moon class="h-4 w-4" />
				{/if}
				<span class="sr-only">Toggle theme</span>
			</Button>

			<!-- Mobile menu button -->
			<Button
				variant="outline"
				size="icon"
				class="md:hidden w-9 h-9 rounded-md border-gray-200 dark:border-gray-700"
				onclick={toggleMobileMenu}
			>
				{#if isMobileMenuOpen}
					<X class="h-4 w-4" />
				{:else}
					<Menu class="h-4 w-4" />
				{/if}
				<span class="sr-only">Toggle menu</span>
			</Button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isMobileMenuOpen}
		<div class="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
			<nav class="container py-4 space-y-1">
				{#each navItems as item}
					<a
						href={item.href}
						class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 {
							$page.url.pathname === item.href
								? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
								: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
						}"
						on:click={closeMobileMenu}
					>
						{item.label}
					</a>
				{/each}
				
				<!-- Contact info in mobile menu -->
				<div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
					<div class="px-3 py-2">
						<div class="text-sm font-medium text-gray-900 dark:text-white">{personalInfo.name}</div>
						<div class="text-sm text-gray-500 dark:text-gray-400">{personalInfo.email}</div>
						<div class="text-sm text-gray-500 dark:text-gray-400">{personalInfo.location}</div>
					</div>
				</div>
			</nav>
		</div>
	{/if}
</header>

<!-- Spacer to prevent content from hiding behind fixed navbar -->
<div class="h-16"></div> 