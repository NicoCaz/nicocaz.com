<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Navbar from '$lib/components/Navbar.svelte';
  import { personalInfo } from '$lib/data/personalInfo';
  let mounted = false;
  const currentYear = new Date().getFullYear();

  onMount(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    mounted = true;
  });
</script>

{#if mounted}
  <div
    class="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased"
    transition:fade={{ duration: 150 }}
  >
    <Navbar />
    <main class="relative">
      <div
        in:fade={{ duration: 300, delay: 150 }}
        out:fade={{ duration: 150 }}
      >
        <slot />
      </div>
    </main>
    
    <!-- Footer: sitemap + copyright only. Contact lives on home connect card. -->
    <footer class="relative mt-16 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav class="flex items-center gap-6">
            <a href="/" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
            <a href="/projects" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="/experience" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="/about" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
          </nav>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} {personalInfo.name}
          </p>
        </div>
      </div>
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
  
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    overflow-x: hidden;
  }
</style> 