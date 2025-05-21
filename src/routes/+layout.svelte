<script lang="ts">
	import '../app.css';
	import Layout from '$lib/components/layout/Layout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores';
	import { personalInfo } from '$lib/data/personalInfo';
	import { seoConfig } from '$lib/config/seo';

	$: title = $page.data.title 
		? `${$page.data.title} | ${personalInfo.name}`
		: `${personalInfo.name} - ${personalInfo.title}`;
	$: description = $page.data.description || personalInfo.shortBio;
</script>

<MetaTags
	title={title}
	titleTemplate={seoConfig.titleTemplate}
	description={description}
	canonical={`${seoConfig.canonical}${$page.url.pathname}`}
	openGraph={{
		...seoConfig.openGraph,
		title,
		description,
		url: $page.url.href,
		siteName: personalInfo.name
	}}
	twitter={{
		...seoConfig.twitter,
		title,
		description,
	}}
	additionalMetaTags={seoConfig.additionalMetaTags}
	additionalLinkTags={seoConfig.additionalLinkTags}
/>

<Layout>
	<slot />
</Layout>
