<script lang="ts">
  const { education } = $props();
</script>

<div class="group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground h-full flex flex-col">
  <h3 class="text-xl font-semibold">{education.degree}</h3>
  <p class="mt-1 text-sm text-muted-foreground">
    {education.institution} | {education.period}
  </p>
  {#if education.description}
  <p class="mt-4 text-sm text-muted-foreground flex-grow">
    {education.description}
  </p>
  {/if}
</div> 