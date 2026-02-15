<script lang="ts">
  import type { Achievement } from '$lib/data/types';

  const { achievement } = $props();
</script>

<div
  class="group relative rounded-lg border border-amber-200/50 dark:border-amber-800/40 bg-gradient-to-br from-amber-50/50 to-white dark:from-amber-950/20 dark:to-gray-800 p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-amber-300 dark:hover:border-amber-700/50"
>
  <div class="absolute top-0 left-0 w-1 h-full bg-amber-500 dark:bg-amber-600 rounded-l-lg"></div>

  <div class="flex items-start justify-between gap-4 mb-4">
    <div class="flex items-center gap-3">
      <div
        class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500 dark:bg-amber-600 flex items-center justify-center text-white"
        aria-hidden="true"
      >
        <span class="text-xl">🏆</span>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {achievement.prize}
        </h3>
        <p class="text-sm font-medium text-amber-700 dark:text-amber-400">
          {achievement.event}
        </p>
      </div>
    </div>
    <span
      class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 flex-shrink-0"
    >
      {achievement.period}
    </span>
  </div>

  {#if achievement.project}
    <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
      Proyecto: <strong>{achievement.project}</strong>
    </p>
  {/if}

  <div class="flex flex-wrap gap-3">
    {#if achievement.projectUrl}
      <a
        href={achievement.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 underline underline-offset-2"
      >
        Ver en ETHGlobal
        <span aria-hidden="true">↗</span>
      </a>
    {/if}
    {#if achievement.certificateUrl}
      <a
        href={achievement.certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 underline underline-offset-2"
      >
        Certificado (PDF)
        <span aria-hidden="true">↗</span>
      </a>
    {/if}
  </div>
</div>
