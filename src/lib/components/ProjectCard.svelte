<script lang="ts">
  const { project, featured = false, class: className = '' } = $props();
  console.log(project);
</script>

<div class:featured class:h-full={!featured} class:flex={!featured} class:flex-col={!featured} class="{className} group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
  <h2 class="text-xl font-semibold">{project.title}</h2>
  <p class="mt-4 text-sm text-muted-foreground">{project.description}</p>
  
  {#if project.features && project.features.length > 0}
    <div class="mt-4">
      <h3 class="text-base font-semibold mb-2">Features</h3>
      <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">
        {#each project.features as feature}
          <li>{feature}</li>
        {/each}
      </ul>
    </div>
  {/if}

  <div class="mt-4 flex flex-wrap gap-2">
    {#each project.technologies as tech}
      <span class="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-sm font-medium text-secondary-foreground">
        {tech}
      </span>
    {/each}
  </div>

  {#if project.url}
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      class="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/90"
    >
      View Project <span class="ml-2">→</span>
    </a>
  {/if}
</div>
