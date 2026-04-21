<script lang="ts">
  import { Map, Activity, Brain, Building2, Heart, Code2, ArrowUpRight } from 'lucide-svelte';
  import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '$lib/components/ui/card';

  const { project, class: className = '' } = $props();

  const iconComponents: Record<string, any> = {
    'Map': Map,
    'Activity': Activity,
    'Brain': Brain,
    'Building2': Building2,
    'Heart': Heart,
    'Code2': Code2
  };

  function getIconComponent(iconName?: string) {
    return iconName && iconComponents[iconName] ? iconComponents[iconName] : Code2;
  }

  function getTechColor(tech: string) {
    const colors: Record<string, string> = {
      'SvelteKit':   'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'React':       'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'TypeScript':  'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Python':      'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Java':        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'PostgreSQL':  'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Docker':      'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
      'AWS':         'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Cloudflare':  'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    };
    return colors[tech] ?? 'bg-secondary text-secondary-foreground';
  }

  const isActive = $derived(project.status === 'active');
  const IconComponent = $derived(getIconComponent(project.icon));
  const link = $derived(project.url ?? project.repository ?? null);
</script>

<Card class="group transition-shadow hover:shadow-md {className}">
  <CardHeader>
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-muted text-muted-foreground">
          <IconComponent size={20} />
        </div>
        <CardTitle>{project.title}</CardTitle>
      </div>

      <span class="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium {isActive ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-secondary text-secondary-foreground'}">
        <span class="h-1.5 w-1.5 rounded-full {isActive ? 'bg-green-500' : 'bg-muted-foreground'}"></span>
        {isActive ? 'Active' : 'Completed'}
      </span>
    </div>

    <CardDescription class="mt-2 leading-relaxed">{project.description}</CardDescription>
  </CardHeader>

  <CardContent class="space-y-4">
    {#if project.features?.length > 0}
      <ul class="space-y-1.5">
        {#each project.features.slice(0, 3) as feature}
          <li class="flex items-start gap-2 text-sm text-muted-foreground">
            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"></span>
            <span>{feature}</span>
          </li>
        {/each}
        {#if project.features.length > 3}
          <li class="pl-3 text-xs text-muted-foreground">+{project.features.length - 3} more</li>
        {/if}
      </ul>
    {/if}

    <div class="flex flex-wrap gap-1.5">
      {#each project.technologies as tech}
        <span class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium {getTechColor(tech)}">
          {tech}
        </span>
      {/each}
    </div>
  </CardContent>

  {#if link}
    <CardFooter>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
      >
        {project.url ? 'View project' : 'View repository'}
        <ArrowUpRight class="h-3.5 w-3.5" />
      </a>
    </CardFooter>
  {/if}
</Card>
