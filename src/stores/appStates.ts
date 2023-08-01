import { writable } from "svelte/store";

export let solitaire_open = writable<Boolean>(false)
export let pinball_open = writable<Boolean>(false)
export let internet_open = writable<Boolean>(false)
export let about_open = writable<Boolean>(false)