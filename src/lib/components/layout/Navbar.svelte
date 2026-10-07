<script lang="ts">
	import { ChevronDown, Globe, Menu, MessageCircle, MessageCircleMore, Package, ShoppingCart, X } from 'lucide-svelte';

	import Logo from '$lib/components/ui/Logo.svelte';
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';

	import { autoAnimateAction } from '$lib/actions/autoAnimate';
	import { waLink } from '$lib/utils/whatsapp';

	const menus = [
		{
			title: 'Layanan',
			href: '#layanan',
			icon: Globe
		},
		{
			title: 'Produk',
			icon: Package,
			children: [
				{
					title: 'Point Of Sales',
					href: 'https://horizon-noz.github.io/horizonpos',
					icon: ShoppingCart,
					description: 'Sistem Point of Sales untuk bisnis retail'
				}
			]
		},
		{
			title: 'Kontak',
			href: '#kontak',
			icon: MessageCircle
		}
	];

	let open = $state(false);
	let productOpen = $state(false);
	let scrolled = $state(false);

	let menuButton: HTMLButtonElement;
	// svelte-ignore non_reactive_update
	let mobileMenu: HTMLDivElement;

	function closeMenu() {
		open = false;
		productOpen = false;
	}

	function toggleProduct() {
		productOpen = !productOpen;
	}

	$effect(() => {
		if (typeof window === 'undefined') return;

		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};

		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				open = false;
				productOpen = false;
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				open = false;
				productOpen = false;
			}
		};

		const handleOutsideClick = (event: MouseEvent) => {
			if (!open) return;

			const target = event.target as Node;

			if (!mobileMenu?.contains(target) && !menuButton?.contains(target)) {
				open = false;
				productOpen = false;
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

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-8 lg:flex">
			{#each menus as menu}
				{#if menu.children}
					<div class="group relative">
						<button type="button" class="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
							<svelte:component this={menu.icon} size={17} strokeWidth={2} />

							{menu.title}

							<ChevronDown size={15} class="transition-transform duration-200 group-hover:rotate-180" />
						</button>

						<!-- Dropdown -->
						<div class="pointer-events-none invisible absolute top-full left-1/2 w-82 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
							<div class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-2xl backdrop-blur-2xl dark:border-slate-700/80 dark:bg-slate-900/95">
								{#each menu.children as child}
									<a href={child.href} target="_blank" rel="noopener noreferrer" class="group/item flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-white/10">
										<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform duration-200 group-hover/item:scale-105 dark:bg-blue-950/60 dark:text-blue-400">
											<svelte:component this={child.icon} size={20} strokeWidth={2} />
										</div>

										<div class="min-w-0">
											<div class="font-semibold text-slate-800 dark:text-slate-100">
												{child.title}
											</div>

											<div class="mt-0.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
												{child.description}
											</div>
										</div>
									</a>
								{/each}
							</div>
						</div>
					</div>
				{:else}
					<a href={menu.href} class="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
						<svelte:component this={menu.icon} size={17} strokeWidth={2} />

						{menu.title}
					</a>
				{/if}
			{/each}
		</nav>

		<!-- Desktop Actions -->
		<div class="hidden items-center gap-3 lg:flex">
			<ThemeToggle />

			<a href={waLink} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:scale-105 hover:bg-blue-700">
				<MessageCircleMore size={18} />
				Hubungi Kami
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button bind:this={menuButton} onclick={() => (open = !open)} class="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl text-slate-700 transition-all duration-200 hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-white/10" aria-label="Toggle menu" aria-expanded={open}>
			<Menu size={24} class={`absolute transition-all duration-300 ease-in-out ${open ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />

			<X size={24} class={`absolute transition-all duration-300 ease-in-out ${open ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`} />
		</button>
	</div>

	<!-- Mobile Navigation -->
	<div use:autoAnimateAction>
		{#if open}
			<div bind:this={mobileMenu} class="lg:hidden">
				<nav class="container mx-auto px-4 pb-4">
					<div class="rounded-3xl border border-white/20 bg-white/60 p-3 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/60">
						<div class="flex flex-col gap-1">
							{#each menus as menu}
								{#if menu.children}
									<!-- Mobile Product -->
									<button type="button" onclick={toggleProduct} class="flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3 font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-400">
										<span class="flex items-center gap-3">
											<svelte:component this={menu.icon} size={18} />

											{menu.title}
										</span>

										<ChevronDown size={18} class={`transition-transform duration-300 ${productOpen ? 'rotate-180' : ''}`} />
									</button>

									{#if productOpen}
										<div class="ml-3 border-l border-slate-200 pl-3 dark:border-slate-700">
											{#each menu.children as child}
												<a href={child.href} target="_blank" rel="noopener noreferrer" onclick={closeMenu} class="flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-white/10">
													<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
														<svelte:component this={child.icon} size={18} />
													</div>

													<div>
														<div class="font-medium text-slate-700 dark:text-slate-200">
															{child.title}
														</div>

														<div class="text-xs text-slate-500 dark:text-slate-400">
															{child.description}
														</div>
													</div>
												</a>
											{/each}
										</div>
									{/if}
								{:else}
									<a href={menu.href} onclick={closeMenu} class="flex items-center gap-3 rounded-2xl px-4 py-3 font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-400">
										<svelte:component this={menu.icon} size={18} />

										{menu.title}
									</a>
								{/if}
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
