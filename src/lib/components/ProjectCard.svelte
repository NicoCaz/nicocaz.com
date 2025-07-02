<script lang="ts">
  // Import Lucide icons
  // To add new icons: 1) Import the icon from lucide-svelte, 2) Add to iconComponents map, 3) Update the type in types.ts
  import { Map, Activity, Brain, Building2, Heart, Code2 } from 'lucide-svelte';

  const { project, featured = false, class: className = '' } = $props();
  
  // Map of icon names to Lucide components
  // Available icons: Map (🗺️), Activity (📊), Brain (🧠), Building2 (🏢), Heart (❤️), Code2 (💻)
  const iconComponents: Record<string, any> = {
    'Map': Map,
    'Activity': Activity,
    'Brain': Brain,
    'Building2': Building2,
    'Heart': Heart,
    'Code2': Code2
  };
  
  // Function to get the appropriate icon component
  function getIconComponent(iconName?: "Map" | "Activity" | "Brain" | "Building2" | "Heart" | "Code2") {
    if (iconName && iconComponents[iconName]) {
      return iconComponents[iconName];
    }
    return Code2; // Default fallback icon
  }

  function getTechColor(tech: string) {
    const colors: Record<string, string> = {
      'SvelteKit': 'bg-orange-50 text-orange-700 border border-orange-200',
      'React': 'bg-blue-50 text-blue-700 border border-blue-200',
      'TypeScript': 'bg-blue-50 text-blue-700 border border-blue-200',
      'Python': 'bg-green-50 text-green-700 border border-green-200',
      'Java': 'bg-red-50 text-red-700 border border-red-200',
      'PostgreSQL': 'bg-indigo-50 text-indigo-700 border border-indigo-200',
      'Docker': 'bg-cyan-50 text-cyan-700 border border-cyan-200',
      'AWS': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
      'Cloudflare': 'bg-orange-50 text-orange-700 border border-orange-200'
    };
    return colors[tech] || 'bg-gray-50 text-gray-700 border border-gray-200';
  }
  
  function getStatusInfo(status: string) {
    if (status === 'active') {
      return {
        label: 'Currently Active',
        color: 'bg-green-50 text-green-700 border border-green-200',
        icon: '🔄',
        dotColor: 'bg-green-500'
      };
    } else {
      return {
        label: 'Completed',
        color: 'bg-gray-50 text-gray-600 border border-gray-200',
        icon: '✓',
        dotColor: 'bg-gray-400'
      };
    }
  }

  const IconComponent = $derived(getIconComponent(project.icon));
  const statusInfo = $derived(getStatusInfo(project.status));
</script>

<div class="group relative rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 {project.status === 'active' ? 'ring-1 ring-green-200 dark:ring-green-800' : ''} {className}">
  <!-- Project header -->
  <div class="p-6 pb-4">
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-3">
        <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
          <IconComponent size={24} />
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <!-- Project status -->
          <div class="flex items-center gap-2 mt-1">
            <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium {statusInfo.color}">
              <span class="w-1.5 h-1.5 rounded-full {statusInfo.dotColor} mr-1.5"></span>
              {statusInfo.label}
            </span>
            {#if project.url}
              <span class="inline-flex items-center text-xs text-blue-600 dark:text-blue-400">
                Live Project
              </span>
            {:else if project.repository}
              <span class="inline-flex items-center text-xs text-gray-500 dark:text-gray-400">
                Repository
              </span>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Project content -->
  <div class="px-6 pb-6 space-y-4">
    <!-- Description -->
    <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
      {project.description}
    </p>
    
    <!-- Features -->
    {#if project.features && project.features.length > 0}
      <div>
        <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-2">
          Key Features
        </h3>
        <ul class="space-y-1">
          {#each project.features.slice(0, 3) as feature}
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
              <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></span>
              <span class="leading-relaxed">{feature}</span>
            </li>
          {/each}
          {#if project.features.length > 3}
            <li class="text-sm text-gray-500 dark:text-gray-400 font-medium ml-3.5">
              +{project.features.length - 3} more features
            </li>
          {/if}
        </ul>
      </div>
    {/if}

    <!-- Technologies -->
    <div>
      <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-2">
        Technologies
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each project.technologies as tech}
          <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium {getTechColor(tech)}">
            {tech}
          </span>
        {/each}
      </div>
    </div>

    <!-- Action button -->
    {#if project.url || project.repository}
      <div class="flex justify-end pt-2">
        <a
          href={project.url || project.repository}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg {project.status === 'active' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'} dark:bg-white text-white dark:text-gray-900 text-sm font-medium transition-colors dark:hover:bg-gray-100"
        >
          <span>{project.url ? (project.status === 'active' ? 'View Live Project' : 'View Project') : 'View Repository'}</span>
          <span>→</span>
        </a>
      </div>
    {/if}
  </div>
</div>
