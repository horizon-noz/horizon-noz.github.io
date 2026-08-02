import {
	Globe,
	Smartphone,
	Palette,
	ServerCog,
	CloudCog,
	ShieldCheck
} from 'lucide-svelte';

export const services = [
	{
		icon: Globe,
		title: 'Web Development',
		description:
			'Website company profile, landing page, dashboard, ERP hingga e-commerce.'
	},
	{
		icon: Smartphone,
		title: 'Mobile Development',
		description:
			'Aplikasi Android & iOS menggunakan teknologi native maupun cross-platform.'
	},
	{
		icon: Palette,
		title: 'UI / UX Design',
		description:
			'Desain modern dengan fokus pada pengalaman pengguna.'
	},
	{
		icon: ServerCog,
		title: 'Backend & API',
		description:
			'REST API, authentication, database dan integrasi sistem.'
	},
	{
		icon: CloudCog,
		title: 'Cloud & DevOps',
		description:
			'Deployment, Docker, CI/CD hingga monitoring server.'
	},
	{
		icon: ShieldCheck,
		title: 'Maintenance',
		description:
			'Support, bug fixing, update fitur dan monitoring aplikasi.'
	}
];