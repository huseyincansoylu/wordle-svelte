import { writable } from "svelte/store"
import { createGrid, getRandomWord } from "./utils";



export const gameOver = writable(false)
export const GAME_WORD = writable(getRandomWord())
export const gameInfo = writable({ char: 0, attempt: 0 })
export const guess = writable("")
export const colors = writable(createGrid())
export const board = writable(createGrid())
export const message = writable("")
export const isModalOpen = writable(false)
export const activeModal = writable(null)
export const darkMode = writable("light")
export const win = writable(false)

