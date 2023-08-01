import { writable } from "svelte/store";

export let solitaire_open = writable<Boolean>(false)
export let pinball_open = writable<Boolean>(false)