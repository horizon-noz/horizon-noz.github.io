<script>
	const waNumber = '6289654205697';
	const waMessage = 'Halo Tim Horizon Studio, saya tertarik untuk mendiskusikan proyek saya.';

	const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

	const services = [
		{
			title: 'Web Development',
			desc: 'Pembuatan website responsif dan modern untuk kebutuhan bisnis, company profile, hingga e-commerce.',
			icon: '🌐'
		},
		{
			title: 'Mobile Apps',
			desc: 'Pengembangan aplikasi Android dan iOS native maupun hybrid yang user-friendly.',
			icon: '📱'
		},
		{
			title: 'UI/UX Design',
			desc: 'Desain antarmuka yang intuitif dan pengalaman pengguna yang memanjakan mata.',
			icon: '🎨'
		}
	];
</script>

<svelte:head>
	<title>Horizon Studio | Software House</title>
	<meta name="description" content="Horizon Studio - Membangun solusi digital terbaik untuk bisnis Anda." />

	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%232563eb%22/><text x=%2250%22 y=%2270%22 font-size=%2265%22 font-family=%22sans-serif%22 font-weight=%22bold%22 fill=%22white%22 text-anchor=%22middle%22>H</text></svg>"
	/>
</svelte:head>

<div class="min-h-screen bg-slate-50 font-sans text-slate-800">
	<!-- Navbar -->
	<header class="fixed z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
		<nav class="container mx-auto flex items-center justify-between px-6 py-4">
			<!-- Logo H -->
			<a href="/" class="group flex items-center gap-3">
				<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-2xl font-bold text-white shadow-md transition group-hover:bg-blue-700">H</div>
				<span class="text-xl font-bold tracking-tight text-slate-900"> Horizon Studio </span>
			</a>

			<div class="hidden space-x-8 font-medium text-slate-600 md:flex">
				<a href="#layanan" class="transition hover:text-blue-600">Layanan</a>
				<a href="#portofolio" class="transition hover:text-blue-600">Portofolio</a>
				<a href="#tentang" class="transition hover:text-blue-600">Tentang Kami</a>
			</div>

			<!-- Tombol WhatsApp Navbar -->
			<a href={waLink} target="_blank" rel="noopener noreferrer" class="hidden items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-green-200/50 transition hover:bg-green-600 md:flex">
				<!-- SVG Icon WhatsApp -->
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
					/>
				</svg>
				Hubungi Kami
			</a>
		</nav>
	</header>

	<!-- Hero Section -->
	<section class="px-6 pt-32 pb-20 md:pt-48 md:pb-32">
		<div class="container mx-auto max-w-4xl text-center">
			<h1 class="mb-6 text-5xl leading-tight font-extrabold text-slate-900 md:text-7xl">
				Wujudkan Visi Digital Anda Bersama <span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Horizon Studio</span>
			</h1>
			<p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">Kami adalah software house yang berdedikasi untuk mentransformasi ide cemerlang Anda menjadi produk digital berkinerja tinggi, modern, dan scalable.</p>
		</div>
	</section>

	<!-- Services Section -->
	<section id="layanan" class="bg-white py-10">
		<div class="container mx-auto px-6">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Layanan Kami</h2>
				<p class="mx-auto max-w-2xl text-slate-600">Solusi teknologi end-to-end untuk membantu bisnis Anda tumbuh dan beradaptasi di era digital.</p>
			</div>

			<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
				{#each services as service}
					<div class="group rounded-2xl border border-slate-100 bg-slate-50 p-8 transition duration-300 hover:shadow-xl hover:shadow-slate-200/50">
						<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white text-4xl shadow-sm transition-transform group-hover:scale-110">
							{service.icon}
						</div>
						<h3 class="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
						<p class="leading-relaxed text-slate-600">{service.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA / Contact Section -->
	<section id="kontak" class="py-20">
		<div class="container mx-auto max-w-4xl px-6">
			<div class="relative overflow-hidden rounded-3xl bg-slate-900 p-10 text-center shadow-2xl md:p-16">
				<div class="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
				<div class="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"></div>

				<h2 class="relative z-10 mb-6 text-3xl font-bold text-white md:text-4xl">Siap Untuk Membangun Sesuatu Yang Hebat?</h2>
				<p class="relative z-10 mx-auto mb-10 max-w-xl text-slate-300">Mari diskusikan kebutuhan proyek Anda. Tim kami siap memberikan konsultasi gratis untuk langkah awal Anda via WhatsApp.</p>

				<a href={waLink} target="_blank" rel="noopener noreferrer" class="relative z-10 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-current" viewBox="0 0 24 24">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
						/>
					</svg>
					Chat via WhatsApp
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-slate-200 bg-white py-10">
		<div class="container mx-auto px-6 text-center text-slate-500">
			<p>&copy; {new Date().getFullYear()} Horizon Studio. All rights reserved.</p>
		</div>
	</footer>
</div>