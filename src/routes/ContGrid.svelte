<script lang="ts">
	import { onMount } from 'svelte';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { getTextGrid, willTextFit } from '$lib/utils/textGrid';
	import html2canvas from 'html2canvas'; // Import html2canvas

	// Constants
	const ROWS = 7;
	const COLS = 52;

	// Banner Sizes
	const LINKEDIN_BANNER_WIDTH = 1584;
	const LINKEDIN_BANNER_HEIGHT = 396;
	const TWITTER_BANNER_WIDTH = 1500;
	const TWITTER_BANNER_HEIGHT = 500;

	// Reactive variables
	let textPosition = $state({ row: 0, col: 0 });
	let grid = $state<number[][]>([]);
	let intensity = $state(1);
	let isDrawing = $state(false);
	let textInput = $state('');

	let props = $props();

	// Initialize grid on mount
	onMount(() => {
		initializeGrid();
	});

	function initializeGrid() {
		grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
	}

	function handleMouseDown(row: number, col: number) {
		isDrawing = true;
		updateCell(row, col);
	}

	function handleMouseEnter(row: number, col: number) {
		if (isDrawing) {
			updateCell(row, col);
		}
	}

	function handleMouseUp() {
		isDrawing = false;
	}

	function updateCell(row: number, col: number) {
		const newGrid = [...grid];
		newGrid[row][col] = intensity;
		grid = newGrid;
	}

	function getCellColor(value: number) {
		switch (value) {
			case 0:
				return 'bg-gray-100 dark:bg-gray-800';
			case 1:
				return 'bg-green-200 dark:bg-green-900';
			case 2:
				return 'bg-green-400 dark:bg-green-700';
			case 3:
				return 'bg-green-600 dark:bg-green-500';
			case 4:
				return 'bg-green-800 dark:bg-green-300';
			default:
				return 'bg-gray-100 dark:bg-gray-800';
		}
	}

	function handleIntensityChange(event: Event) {
		const target = event.target as HTMLInputElement | null;
		console.log(target?.value);
		if (target) {
			intensity = Math.min(4, Math.max(0, parseInt(target.value)));
		}
	}

	function handleTextInput(event: Event) {
		const target = event.target as HTMLInputElement | null;
		if (target) {
			textInput = target.value;
			// Call writeText with current position
			writeText(textPosition.row, textPosition.col);
		}
	}

	function handleCellClick(row: number, col: number) {
		textPosition = { row, col };
		// Call writeText with new position
		writeText(row, col);
	}

	function writeText(startRow = 0, startCol = 0) {
		grid = getTextGrid(textInput, ROWS, COLS, intensity, startRow, startCol);
	}

	async function exportAsImage(width: number, height: number, platform: string) {
		const gridElement = document.querySelector('.select-none') as HTMLElement; // Select the grid container
		if (gridElement) {
			const canvas = await html2canvas(gridElement, {
				width: width, // Set desired width
				height: height // Set desired height
			});

			const link = document.createElement('a');
			link.download = `contribution-grid-${platform}.png`;
			link.href = canvas.toDataURL('image/png');
			link.click();
		}
	}
</script>

<Card.Root class="w-full max-w-4xl {props.class}">
	<Card.Header>
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold">GitHub Contribution Grid</h2>
			<div class="space-x-2">
				<Button variant="outline" onclick={initializeGrid} class="text-sm">Clear Grid</Button>
				<Button
					variant="outline"
					onclick={() => exportAsImage(LINKEDIN_BANNER_WIDTH, LINKEDIN_BANNER_HEIGHT, 'linkedin')}
					class="text-sm">Export for LinkedIn</Button
				>
				<Button
					variant="outline"
					onclick={() => exportAsImage(TWITTER_BANNER_WIDTH, TWITTER_BANNER_HEIGHT, 'twitter')}
					class="text-sm">Export for Twitter</Button
				>
			</div>
		</div>
	</Card.Header>

	<Card.Content>
		<div class="mb-4 space-y-4">
			<div>
				<label for="intensity" class="mb-2 block text-sm font-medium">
					Intensity Level (1-4):
				</label>
				<Input
					id="intensity"
					type="number"
					bind:value={intensity}
					oninput={(e) => handleIntensityChange(e)}
					class="w-24"
				/>
			</div>
			<div>
				<label for="text-input" class="mb-2 block text-sm font-medium"> Text Input: </label>
				<Input
					id="text-input"
					type="text"
					bind:value={textInput}
					oninput={(e) => handleTextInput(e)}
					class="w-full"
				/>
			</div>
		</div>

		<div class="select-none" onmouseleave={() => (isDrawing = false)} role="presentation">
			<div
				class="grid gap-1"
				style="grid-template-columns: repeat({COLS}, minmax(0, 1fr)); width: fit-content;"
				role="grid"
			>
				{#each grid as row, rowIndex}
					{#each row as cell, colIndex}
						<div
							class="h-4 w-4 cursor-pointer rounded-sm border border-gray-200
					   transition-colors duration-200 dark:border-gray-700 {getCellColor(cell)}"
							onmousedown={() => handleMouseDown(rowIndex, colIndex)}
							onmouseenter={() => handleMouseEnter(rowIndex, colIndex)}
							onmouseup={handleMouseUp}
							role="gridcell"
							tabindex="0"
						></div>
					{/each}
				{/each}
			</div>
		</div>

		<div class="mt-4 text-sm text-gray-500">
			Click and drag to draw on the grid. Use the intensity level to change contribution strength.
		</div>
	</Card.Content>
</Card.Root>
