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
    
    <!-- Professional Footer -->
    <footer class="relative mt-16 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <!-- Left side - Brand -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 font-bold text-sm">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div class="font-semibold text-gray-900 dark:text-white">{personalInfo.name}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{personalInfo.title}</div>
            </div>
          </div>
          
          <!-- Center - Quick Links -->
          <nav class="flex items-center gap-6">
            <a href="/" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
            <a href="/projects" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="/experience" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="/about" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
          </nav>
          
          <!-- Right side - Social Links -->
          <div class="flex items-center gap-3">
            {#if personalInfo.social.github}
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <span class="text-sm">💻</span>
              </a>
            {/if}
            {#if personalInfo.social.linkedin}
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <span class="text-sm">💼</span>
              </a>
            {/if}
            {#if personalInfo.social.twitter}
              <a 
                href={personalInfo.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <span class="text-sm">🐦</span>
              </a>
            {/if}
          </div>
        </div>
        
        <!-- Bottom row -->
        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. Built with SvelteKit & TailwindCSS.
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