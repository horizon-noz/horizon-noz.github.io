<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import { theme } from '$lib/stores/theme';

	function toggleTheme() {
		const next = get(theme) === 'dark' ? 'light' : 'dark';

		theme.set(next);

		document.documentElement.classList.toggle('dark', next === 'dark');

		localStorage.setItem('theme', next);
	}
</script>

<button onclick={toggleTheme} class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700" aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<Sun size={20} />
	{:else}
		<Moon size={20} />
	{/if}
</button>
