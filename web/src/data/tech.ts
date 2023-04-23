import type { Tech } from './types';

export const tech = {
	ts: {
		name: 'TypeScript',
		image: '',
	},
	js: {
		name: 'JavaScript',
		image: '',
	},
	go: {
		name: 'Go',
		image: '',
	},
	elixir: {
		name: 'Elixir',
		image: '',
	},
	vue: {
		name: 'Vue.js',
		image: '',
	},
} satisfies { [key: string]: Tech };
