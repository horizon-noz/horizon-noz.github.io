<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: {
		children?: Snippet;
	} = $props();
</script>

<div class="rounded-xl border p-6">
	{#if children}
		{@render children()}
	{/if}
</div>