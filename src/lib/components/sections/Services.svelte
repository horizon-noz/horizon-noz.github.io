<script lang="ts">
	import { services } from '$lib/data/services';
</script>

<section id="layanan" class="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
	<!-- Background Glow -->
	<div class="absolute -top-24 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

	<div class="relative container mx-auto px-6">
		<!-- Heading -->
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<span class="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300"> Our Services </span>

			<h2 class="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
				Solusi Digital yang Dibangun
				<span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> untuk Bertumbuh </span>
			</h2>

			<p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">Kami membantu startup, UMKM, dan perusahaan membangun produk digital berkualitas tinggi menggunakan teknologi modern yang cepat, scalable, dan mudah dikembangkan.</p>
		</div>

		<!-- Cards -->
		<div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
			{#each services as service}
				<div class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50 dark:hover:bg-slate-800">
					<!-- Glow -->
					<div class="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10"></div>

					<!-- Icon -->
					<div class="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 dark:bg-blue-950/60 dark:text-blue-400">
						<!-- svelte-ignore svelte_component_deprecated -->
						<svelte:component this={service.icon} size={30} strokeWidth={2} />
					</div>

					<h3 class="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</h3>

					<p class="mt-4 leading-7 text-slate-600 dark:text-slate-400">{service.description}</p>

					<div class="mt- gap- font-mediu text-blue-60 transition-al group-hover:gap- inline-flex items-center dark:text-blue-400">
						Learn More
						<span class="transition-transform duration-300 group-hover:translate-x-1"> → </span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
