<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Navbar from '$lib/components/Navbar.svelte';
  import { personalInfo } from '$lib/data/personalInfo';
  let mounted = false;

  onMount(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    mounted = true;
  });
</script>

{#if mounted}
  <div
    class="min-h-screen bg-background font-sans antialiased"
    transition:fade={{ duration: 150 }}
  >
    <Navbar />
    <main class="container mx-auto px-4 py-8">
      <div
        in:fade={{ duration: 300, delay: 150 }}
        out:fade={{ duration: 150 }}
      >
        <slot />
      </div>
    </main>
    <footer class="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </footer>
  </div>
{/if}

<style>
  :global(:root) {
    --animation-default: 0.3s ease-in-out;
    --animation-fast: 0.15s ease-in-out;
    --animation-slow: 0.5s ease-in-out;
  }

  :global(.dark) {
    color-scheme: dark;
  }
</style> 