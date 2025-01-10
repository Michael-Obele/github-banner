// src/lib/utils/textGrid.ts
import { LETTERS } from './letterPatterns';

export function getTextGrid(
	text: string,
	rows: number,
	cols: number,
	intensity: number,
	startRow: number = 0,
	startCol: number = 0
): number[][] {
	// Initialize empty grid
	const grid = Array.from({ length: rows }, () => Array(cols).fill(0));

	// Convert text to uppercase since our patterns are uppercase
	const upperText = text.toUpperCase();

	let currentCol = startCol;
	const currentRow = startRow;

	// Process each character
	for (let i = 0; i < upperText.length; i++) {
		const char = upperText[i];
		const pattern = LETTERS[char];

		// Skip unknown characters
		if (!pattern) continue;

		// Check if we have enough space horizontally
		if (currentCol + pattern[0].length > cols) break;

		// Check if we have enough space vertically
		if (currentRow + pattern.length > rows) break;

		// Draw the character
		for (let y = 0; y < pattern.length; y++) {
			for (let x = 0; x < pattern[y].length; x++) {
				if (pattern[y][x] === 1) {
					grid[currentRow + y][currentCol + x] = intensity;
				}
			}
		}

		// Move to next character position (add 1 space between characters)
		currentCol += pattern[0].length + 1;
	}

	return grid;
}

// Optional: Add a helper function to calculate if text will fit
export function willTextFit(text: string, cols: number, startCol: number = 0): boolean {
	const upperText = text.toUpperCase();
	let currentWidth = startCol;

	for (const char of upperText) {
		const pattern = LETTERS[char];
		if (!pattern) continue;

		currentWidth += pattern[0].length + 1; // +1 for spacing
		if (currentWidth > cols) return false;
	}

	return true;
}
