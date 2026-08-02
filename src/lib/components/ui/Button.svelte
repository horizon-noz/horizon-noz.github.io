<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		href = '',
		target,
		rel,
		class: className = ''
	}: {
		children: Snippet;
		href?: string;
		target?: string;
		rel?: string;
		class?: string;
	} = $props();
</script>

<a {href} {target} {rel} class={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 ${className}`}>
	{@render children()}
</a>
