<script lang="ts">
	import './layout.css';

	let { children } = $props();
	export const prerender = true;
	export const trailingSlash = 'always';
</script>

{@render children()}
