<script lang="ts">
	import Theme from '$lib/components/blocks/Theme.svelte';
	import X from 'lucide-svelte/icons/x';
	import Menu from 'lucide-svelte/icons/menu';

	const navLinks = [
		{ href: '/', text: 'Home' },
		{ href: '/about', text: 'About' }
	];

	let open = $state(false);
</script>

<nav class="bg-white shadow dark:bg-gray-800">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					onclick={() => (open = !open)}
				>
					<span class="sr-only">Open main menu</span>
					<Menu class="h-6 w-6 {open ? 'hidden' : 'block'}" />

					<X class=" h-6 w-6 {open ? 'block' : 'hidden'}" />
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0">
					<a href="/" class="text-xl font-bold text-gray-900 dark:text-white">GitHub Banner</a>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						{#each navLinks as { href, text }}
							<a
								{href}
								class="rounded-md px-3 py-2 text-sm font-medium text-gray-900 dark:text-white"
								>{text}</a
							>
						{/each}
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<Theme />
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" class:hidden={!open} id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2">
			{#each navLinks as { href, text }}
				<a
					{href}
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 dark:text-white"
					>{text}</a
				>
			{/each}
		</div>
	</div>
</nav>
