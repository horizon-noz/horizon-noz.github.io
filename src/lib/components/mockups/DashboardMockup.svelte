<script lang="ts">
	import { BarChart3, Users, ShoppingCart, DollarSign } from 'lucide-svelte';
</script>

<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
	<!-- Window Header -->
	<div class="mb-6 flex items-center gap-2">
		<div class="h-3 w-3 rounded-full bg-red-400"></div>
		<div class="h-3 w-3 rounded-full bg-yellow-400"></div>
		<div class="h-3 w-3 rounded-full bg-green-400"></div>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-2 gap-4">
		<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors dark:border-slate-700 dark:bg-slate-800">
			<div class="flex items-center justify-between">
				<Users class="text-blue-600 dark:text-blue-400" size={20} />
				<span class="text-sm font-medium text-green-500">+12%</span>
			</div>

			<p class="mt-4 text-sm text-slate-500 dark:text-slate-400">Users</p>

			<h3 class="mt-1 text-2xl font-bold text-slate-900 dark:text-white">12.4K</h3>
		</div>

		<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors dark:border-slate-700 dark:bg-slate-800">
			<div class="flex items-center justify-between">
				<DollarSign class="text-emerald-600 dark:text-emerald-400" size={20} />
				<span class="text-sm font-medium text-green-500">+8%</span>
			</div>

			<p class="mt-4 text-sm text-slate-500 dark:text-slate-400">Revenue</p>

			<h3 class="mt-1 text-2xl font-bold text-slate-900 dark:text-white">$18K</h3>
		</div>
	</div>

	<!-- Chart -->
	<div class="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
		<div class="mb-5 flex items-center justify-between">
			<h3 class="font-semibold text-slate-900 dark:text-white">Analytics</h3>

			<BarChart3 size={18} class="text-slate-500 dark:text-slate-400" />
		</div>

		<div class="flex h-40 items-end gap-3">
			<div class="w-full rounded-t bg-blue-300" style="height:35%"></div>
			<div class="w-full rounded-t bg-blue-400" style="height:60%"></div>
			<div class="w-full rounded-t bg-blue-500" style="height:45%"></div>
			<div class="w-full rounded-t bg-blue-600" style="height:80%"></div>
			<div class="w-full rounded-t bg-cyan-500" style="height:65%"></div>
			<div class="w-full rounded-t bg-blue-700" style="height:95%"></div>
		</div>
	</div>

	<!-- Recent Orders -->
	<div class="mt-6 space-y-3">
		{#each [1, 2, 3] as row}
			<div class="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors dark:border-slate-700 dark:bg-slate-800">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
						<ShoppingCart size={18} />
					</div>

					<div>
						<p class="font-medium text-slate-900 dark:text-white">
							Order #102{row}
						</p>

						<p class="text-sm text-slate-500 dark:text-slate-400">Completed</p>
					</div>
				</div>

				<span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"> Paid </span>
			</div>
		{/each}
	</div>
</div>
