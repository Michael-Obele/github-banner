<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="min-h-screen bg-gray-100 p-8 dark:bg-gray-900">
	<h1 class="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">
		About GitHub Contribution Banner Generator
	</h1>
	<p class="mb-4 text-lg text-gray-600 dark:text-gray-400">
		The GitHub Contribution Banner Generator is a tool designed to help users create visually
		appealing banner images for social media platforms like Twitter and LinkedIn. These banners are
		generated using GitHub contribution graphs, allowing users to showcase their GitHub activity in
		a unique and customizable way.
	</p>
	<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">Features</h2>
	<ul class="mb-4 list-inside list-disc text-gray-600 dark:text-gray-400">
		<li>Generate banner images from GitHub contribution graphs</li>
		<li>Customize the text displayed on the banner</li>
		<li>Download the generated banner image</li>
		<li>Share the banner on social media platforms</li>
	</ul>
	<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">How It Works</h2>
	<p class="mb-4 text-lg text-gray-600 dark:text-gray-400">
		Simply enter your GitHub username and the text you want to display on the banner. The app will
		generate a banner image based on your GitHub contribution graph, which you can then download and
		share on your favorite social media platforms.
	</p>
	<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">Contributing</h2>
	<p class="mb-4 text-lg text-gray-600 dark:text-gray-400">
		We welcome contributions from the community! If you'd like to contribute, please check out our <a
			href="/README.md"
			class="text-blue-500 hover:underline">README</a
		> for guidelines on how to get started.
	</p>
	<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">License</h2>
	<p class="text-lg text-gray-600 dark:text-gray-400">
		This project is licensed under the MIT License. See the <a
			href="/LICENSE"
			class="text-blue-500 hover:underline">LICENSE</a
		> file for more details.
	</p>
	<p class="mt-8 text-lg text-gray-600 dark:text-gray-400">
		This project uses Shadcn Svelte components and Tailwind CSS for styling. Visit the <a
			href="/docs"
			class="text-blue-500 hover:underline">documentation</a
		> to learn more.
	</p>
</div>
