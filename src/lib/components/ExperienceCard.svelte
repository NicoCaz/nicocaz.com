<script lang="ts">
  import { Separator } from '$lib/components/ui/separator';
  
  const { exp } = $props();
  
  // Function to get company icon/color based on company name - more professional
  function getCompanyStyle(company: string) {
    if (company.toLowerCase().includes('accenture')) {
      return { color: 'bg-purple-600', icon: '🏢' };
    } else if (company.toLowerCase().includes('welltech')) {
      return { color: 'bg-blue-600', icon: '🔒' };
    } else {
      return { color: 'bg-gray-600', icon: '💼' };
    }
  }
  
  const companyStyle = $derived(getCompanyStyle(exp.company));
</script>

<div class="group relative rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600">
  <!-- Company indicator -->
  <div class="absolute top-0 left-0 w-1 h-full {companyStyle.color} rounded-l-lg"></div>
  
  <!-- Header -->
  <div class="flex items-start justify-between mb-4">
    <div class="flex items-center gap-3">
      <div class="flex-shrink-0 w-10 h-10 rounded-lg {companyStyle.color} flex items-center justify-center text-lg text-white">
        {companyStyle.icon}
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {exp.title}
        </h3>
        <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
          {exp.company}
        </p>
      </div>
    </div>
    <div class="flex-shrink-0 text-right">
      <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
        {exp.period}
      </span>
    </div>
  </div>
  
  <!-- Description -->
  <div class="space-y-4">
    <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{exp.description}</p>
    
    {#if exp.responsibilities && exp.responsibilities.length > 0}
      <Separator class="my-4" />
      <div>
        <h4 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          Key Responsibilities
        </h4>
        <ul class="space-y-2">
          {#each exp.responsibilities as responsibility, i}
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
              <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full {companyStyle.color} mt-2"></span>
              <span class="leading-relaxed">{responsibility}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div> 