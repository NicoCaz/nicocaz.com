<script lang="ts">
  import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '$lib/components/ui/card';
  import { Separator } from '$lib/components/ui/separator';

  const { exp } = $props();
</script>

<Card class="group transition-shadow hover:shadow-md">
  <CardHeader>
    <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div class="space-y-0.5">
        <CardTitle>{exp.title}</CardTitle>
        <CardDescription class="font-medium">{exp.company}</CardDescription>
      </div>
      <span class="inline-flex shrink-0 items-center self-start rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
        {exp.period}
      </span>
    </div>
  </CardHeader>

  <CardContent class="space-y-4">
    <p class="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

    {#if exp.responsibilities?.length > 0}
      <Separator />
      <ul class="space-y-2">
        {#each exp.responsibilities as item}
          <li class="flex items-start gap-2 text-sm text-muted-foreground">
            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"></span>
            <span class="leading-relaxed">{item}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </CardContent>
</Card>
