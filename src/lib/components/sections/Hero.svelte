<script lang="ts">
	import { ArrowRight, MessageCircleMore } from 'lucide-svelte';
	import DashboardMockup from '../mockups/DashboardMockup.svelte';
</script>

<section class="relative overflow-hidden pt-36 pb-24 lg:pt-28 lg:pb-36">
	<!-- Background -->
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"></div>
	<div class="absolute -top-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl"></div>

	<div class="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
		<!-- Left -->

		<div class="mx-auto max-w-4xl text-center">
			<h1 class="mt-8 text-5xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
				Membangun
				<span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Solusi Digital </span>

				yang Cepat, Modern, dan Scalable.
			</h1>

			<p class="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">Horizon Studio membantu startup, UMKM, dan perusahaan membangun website, aplikasi mobile, dan sistem informasi yang dirancang untuk berkembang bersama bisnis Anda.</p>

			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a href="#layanan" class="inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-900 dark:text-slate-100 px-7 py-3.5 font-semibold transition hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-800">
					Lihat Layanan
					<ArrowRight size={18} />
				</a>
			</div>
		</div>

		<!-- Right -->

		<div>
			<DashboardMockup />
		</div>
	</div>
</section>
