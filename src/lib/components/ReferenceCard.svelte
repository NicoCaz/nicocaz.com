<script lang="ts">
  const { ref } = $props();

  function getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }
</script>

<div class="group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground h-full flex flex-col">
  <div class="flex items-center gap-4">
    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground font-semibold">
      {getInitials(ref.name)}
    </div>
    <div>
      <h3 class="text-xl font-semibold">{ref.name}</h3>
      <p class="text-sm text-muted-foreground">{ref.title}</p>
    </div>
  </div>
  <div class="mt-4 space-y-2 flex-grow">
    {#if ref.phone}
    <a
      href="tel:{ref.phone}"
      class="block text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      {ref.phone}
    </a>
    {/if}
    {#if ref.email}
    <a
      href="mailto:{ref.email}"
      class="block text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      {ref.email}
    </a>
    {/if}
  </div>
</div> 