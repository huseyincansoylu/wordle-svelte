import { WORDS } from "./constants/words"

export function createGrid() {
    const grid: string[][] = []

    for (let i = 0; i < 6; i++) {
        grid.push([])

        for (let x = 0; x < 5; x++) {
            grid[i][x] = ""
        }
    }

    return grid;
}


export function getRandomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase()
}