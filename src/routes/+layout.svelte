<script lang="ts">
	import '../app.css';
	import Layout from '$lib/components/layout/Layout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores';
	import { personalInfo } from '$lib/data/personalInfo';
	import { seoConfig } from '$lib/config/seo';
	import { ModeWatcher } from "mode-watcher";

	$: title = $page.data.title
		? `${$page.data.title} | ${personalInfo.name}`
		: `${personalInfo.name} - ${personalInfo.title}`;
	$: description = $page.data.description || personalInfo.shortBio;

	const personJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: personalInfo.name,
		url: seoConfig.canonical,
		image: `${seoConfig.canonical}/og-image.png`,
		jobTitle: 'Senior Software Engineer',
		email: `mailto:${personalInfo.email}`,
		description: personalInfo.longBio,
		address: {
			'@type': 'PostalAddress',
			addressCountry: personalInfo.location
		},
		worksFor: {
			'@type': 'Organization',
			name: 'Bull Market Brokers'
		},
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'Universidad Nacional de Mar del Plata'
		},
		knowsAbout: [
			'Software Engineering',
			'Fintech',
			'Web3',
			'TypeScript',
			'.NET',
			'Python',
			'Solidity',
			'System Design'
		],
		sameAs: [
			personalInfo.social.github,
			personalInfo.social.linkedin,
			personalInfo.social.twitter
		]
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(personJsonLd)}<\/script>`}
</svelte:head>

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
	<ModeWatcher/>
	<slot />
</Layout>
