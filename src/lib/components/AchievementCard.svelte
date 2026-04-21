<script lang="ts">
  import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '$lib/components/ui/card';
  import { ArrowUpRight } from 'lucide-svelte';
  import type { Achievement } from '$lib/data/types';

  const { achievement }: { achievement: Achievement } = $props();
</script>

<Card class="border-amber-200 dark:border-amber-800/50 transition-shadow hover:shadow-md">
  <CardHeader>
    <div class="flex items-start justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-amber-100 dark:bg-amber-900/30 text-xl" aria-hidden="true">
          🏆
        </div>
        <div>
          <CardTitle>{achievement.prize}</CardTitle>
          <CardDescription class="text-amber-700 dark:text-amber-400 font-medium">{achievement.event}</CardDescription>
        </div>
      </div>
      <span class="inline-flex shrink-0 items-center rounded-md bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 text-xs font-medium text-amber-800 dark:text-amber-200">
        {achievement.period}
      </span>
    </div>
  </CardHeader>

  {#if achievement.project}
    <CardContent>
      <p class="text-sm text-muted-foreground">
        Project: <span class="font-medium text-foreground">{achievement.project}</span>
      </p>
    </CardContent>
  {/if}

  {#if achievement.projectUrl || achievement.certificateUrl}
    <CardFooter class="gap-4">
      {#if achievement.projectUrl}
        <a
          href={achievement.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 dark:text-amber-400 underline-offset-4 hover:underline"
        >
          {achievement.projectLinkLabel ?? 'View project'}
          <ArrowUpRight class="h-3.5 w-3.5" />
        </a>
      {/if}
      {#if achievement.certificateUrl}
        <a
          href={achievement.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 hover:underline hover:text-foreground"
        >
          {achievement.certificateLinkLabel ?? 'Certificate'}
          <ArrowUpRight class="h-3.5 w-3.5" />
        </a>
      {/if}
    </CardFooter>
  {/if}
</Card>
