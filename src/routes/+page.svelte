<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';

	import Hero from '$lib/components/sections/Hero.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import CTA from '$lib/components/sections/CTA.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<div class="min-h-screen bg-slate-50 dark:bg-slate-950">
	<Navbar />

	<Hero />

	<Services />

	<CTA />

	<Footer />
</div>
