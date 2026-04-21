<script lang="ts">
	import { personalInfo } from '$lib/data/personalInfo';
	import { Github, Linkedin, Twitter, Mail, Check } from 'lucide-svelte';
	let showCopyMessage = false;

	function copyEmail() {
		navigator.clipboard.writeText(personalInfo.email);
		showCopyMessage = true;
		setTimeout(() => (showCopyMessage = false), 2000);
	}
</script>

<div class="flex flex-col items-center gap-4 text-center">
	<h2 class="text-3xl font-bold tracking-tight md:text-4xl">Let's Connect</h2>
	<p class="max-w-[750px] text-lg text-muted-foreground">Find me on social media</p>
	<div class="mt-6 flex gap-4">
		<a
			href={personalInfo.social.github}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Visit my GitHub profile"
			class="rounded-full bg-accent p-3 text-accent-foreground transition-colors hover:bg-accent/80"
		>
			<Github class="h-6 w-6" />
		</a>
		<a
			href={personalInfo.social.linkedin}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Visit my LinkedIn profile"
			class="rounded-full bg-accent p-3 text-accent-foreground transition-colors hover:bg-accent/80"
		>
			<Linkedin class="h-6 w-6" />
		</a>
		<a
			href={personalInfo.social.twitter}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Visit my Twitter profile"
			class="rounded-full bg-accent p-3 text-accent-foreground transition-colors hover:bg-accent/80"
		>
			<Twitter class="h-6 w-6" />
		</a>
		<button
			on:click={copyEmail}
			aria-label="Copy email to clipboard"
			class="relative rounded-full bg-accent p-3 text-accent-foreground transition-colors hover:bg-accent/80"
		>
			{#if showCopyMessage}
				<span class="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-accent px-2 py-1 text-xs text-accent-foreground">
					Copied!
				</span>
				<Check class="h-6 w-6" />
			{:else}
				<Mail class="h-6 w-6" />
			{/if}
		</button>
	</div>
</div>
