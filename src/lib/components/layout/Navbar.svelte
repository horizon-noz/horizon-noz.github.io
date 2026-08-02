<script lang="ts">
	import { Menu, MessageCircleMore, X } from 'lucide-svelte';

	import Logo from '$lib/components/ui/Logo.svelte';
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';

	import { autoAnimateAction } from '$lib/actions/autoAnimate';
	import { waLink } from '$lib/utils/whatsapp';

	const menus = [
		{ title: 'Layanan', href: '#layanan' },
		{ title: 'Produk', href: '' },
		{ title: 'Kontak', href: '' }
	];

	let open = $state(false);
	let scrolled = $state(false);

	let menuButton: HTMLButtonElement;
	// svelte-ignore non_reactive_update
	let mobileMenu: HTMLDivElement;

	function closeMenu() {
		open = false;
	}

	$effect(() => {
		if (typeof window === 'undefined') return;

		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};

		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				open = false;
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				open = false;
			}
		};

		const handleOutsideClick = (event: MouseEvent) => {
			if (!open) return;

			const target = event.target as Node;

			if (!mobileMenu?.contains(target) && !menuButton?.contains(target)) {
				open = false;
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		window.addEventListener('keydown', handleKeyDown);
		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	});
</script>

<header class={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/20 bg-white/80 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/80' : 'border-b border-transparent bg-white/40 backdrop-blur-md dark:bg-slate-950/40'}`}>
	<div class="container mx-auto flex h-16 items-center justify-between px-6">
		<Logo />

		<nav class="hidden items-center gap-8 lg:flex">
			{#each menus as menu}
				<a href={menu.href} class="relative text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
					{menu.title}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-3 lg:flex">
			<ThemeToggle />

			<a href={waLink} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:scale-105 hover:bg-blue-700">
				<MessageCircleMore size={18} />
				Hubungi Kami
			</a>
		</div>

		<button bind:this={menuButton} onclick={() => (open = !open)} class="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl text-slate-700 transition-all duration-200 hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-white/10" aria-label="Toggle menu">
			<Menu size={24} class={`absolute transition-all duration-300 ease-in-out ${open ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />

			<X size={24} class={`absolute transition-all duration-300 ease-in-out ${open ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`} />
		</button>
	</div>

	<div use:autoAnimateAction>
		{#if open}
			<div bind:this={mobileMenu} class="lg:hidden">
				<nav class="container mx-auto px-4 pb-4">
					<div class="rounded-3xl border border-white/20 bg-white/60 p-3 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/60">
						<div class="flex flex-col gap-1">
							{#each menus as menu}
								<a href={menu.href} onclick={closeMenu} class="rounded-2xl px-4 py-3 font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-400">
									{menu.title}
								</a>
							{/each}
						</div>

						<div class="my-4 border-t border-white/20 dark:border-white/10"></div>

						<div class="flex items-center justify-between">
							<ThemeToggle />

							<a href={waLink} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:scale-105 hover:bg-blue-700">
								<MessageCircleMore size={18} />
								Hubungi Kami
							</a>
						</div>
					</div>
				</nav>
			</div>
		{/if}
	</div>
</header>
