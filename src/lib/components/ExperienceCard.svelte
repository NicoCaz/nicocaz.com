<script lang="ts">
  import { Separator } from '$lib/components/ui/separator';
  
  const { exp } = $props();
</script>

<div class="group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground h-full flex flex-col">
  <h3 class="text-xl font-semibold">{exp.title}</h3>
  <p class="text-sm text-muted-foreground">
    {exp.company} | {exp.period}
  </p>
  
  <div class="mt-4 flex-grow">
    <p class="text-sm text-muted-foreground">{exp.description}</p>
    {#if exp.responsibilities && exp.responsibilities.length > 0}
      <Separator class="my-4" />
      <h4 class="mb-2 text-sm font-medium text-foreground">Key Responsibilities:</h4>
      <ul class="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        {#each exp.responsibilities as responsibility}
          <li>{responsibility}</li>
        {/each}
      </ul>
    {/if}
  </div>
</div> 