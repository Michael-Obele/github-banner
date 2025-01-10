<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ContGrid from './ContGrid.svelte';
	import { Github, Twitter, Linkedin, Download, Palette, Type } from 'lucide-svelte';

	const features = [
		{
			icon: Github,
			title: 'GitHub Integration',
			description: 'Connect to your GitHub account to directly pull your contribution graph data.'
		},
		{
			icon: Twitter,
			title: 'Optimized for Twitter',
			description: 'Generate banners perfectly sized for Twitter headers.'
		},
		{
			icon: Linkedin,
			title: 'Ideal for LinkedIn',
			description: 'Create banners that fit seamlessly as LinkedIn background images.'
		},
		{
			icon: Download,
			title: 'Easy Download',
			description: 'Download your generated banner in high-resolution PNG format.'
		},
		{
			icon: Palette,
			title: 'Customizable Colors',
			description: 'Choose from a variety of color palettes or create your own custom scheme.'
		},
		{
			icon: Type,
			title: 'Add Custom Text',
			description: 'Personalize your banner by adding your name, tagline, or other text.'
		}
		// ... Add more features
	];
</script>

<section class="hero bg-gray-100 py-16 text-center dark:bg-gray-900">
	<div class="container mx-auto">
		<h1 class="text-4xl font-bold text-gray-800 dark:text-gray-200">
			Showcase Your Coding Journey
		</h1>
		<p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
			Create Stunning GitHub Contribution Banners for LinkedIn & Twitter
		</p>
		<Button href="#create-banner" class="mt-6">Create Your Banner</Button>
	</div>
</section>

<section class="features bg-white py-12 dark:bg-gray-800">
	<div class="container mx-auto">
		<h2 class="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-gray-200">
			Key Features
		</h2>
		<div class="features-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<div
					class="flex flex-col items-center rounded-lg bg-gray-50 p-6 shadow-md transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
				>
					<feature.icon class="h-10 w-10 text-primary" />
					<h3 class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
						{feature.title}
					</h3>
					<p class="mt-2 text-center text-gray-600 dark:text-gray-400">{feature.description}</p>
				</div>
			{/each}
		</div>
		<section id="create-banner">
			<ContGrid class="mt-12" />
		</section>
	</div>
</section>

<section class="examples bg-gray-100 py-12 dark:bg-gray-900">
	<div class="container mx-auto">
		<h2 class="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-gray-200">
			Example Banners
		</h2>
		<div class="gallery grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Example Banners -->
		</div>
	</div>
</section>

<footer class="bg-gray-800 py-6 text-center dark:bg-gray-900">
	<div class="container mx-auto">
		<p class="text-gray-400 dark:text-gray-500">&copy; 2023 GitHub Banner. All rights reserved.</p>
	</div>
</footer>
