<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import './layout.css';

	let { children } = $props();

	onMount(() => {
		theme.set(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
	});
</script>

<svelte:head>
	<title>Horizon Studio</title>
	<meta name="description" content="Software House Indonesia" />
	<meta name="description" content="Horizon Studio adalah software house Indonesia yang menyediakan jasa pembuatan website, aplikasi mobile, dashboard, ERP, POS, dan solusi digital modern." />
	<meta name="keywords" content="software house, web development, mobile app, dashboard, ERP, POS, website company profile, jasa pembuatan website, Horizon Studio, software house malang, studio malang, web malang, service komputer malang" />
	<meta name="author" content="Horizon Studio" />
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Horizon Studio | Software House Indonesia" />
	<meta property="og:description" content="Bangun website, aplikasi mobile, dashboard, ERP dan solusi digital modern bersama Horizon Studio." />
	<meta property="og:image" content="https://domainanda.com/og-image.png" />
	<meta property="og:url" content="https://domainanda.com" />
	<meta property="og:site_name" content="Horizon Studio" />

	<link rel="icon" href="/favicon.png" type="image/png" />
	<link rel="canonical" href="https://horizon-noz.github.io/" />

	<meta name="theme-color" content="#2563eb" />

	<script type="application/ld+json">
	<script>
		{JSON.stringify(schema)}
	</script>
</svelte:head>
{@render children()}
