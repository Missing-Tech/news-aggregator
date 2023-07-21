import { writable, type Writable } from "svelte/store";

export let currentUser: Writable<Account> | null = writable();
