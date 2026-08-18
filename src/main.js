import './styles.css';
import { hydrate } from 'svelte';
import App from './App.svelte';

// The page is already complete in the HTML. All this does is turn the
// entrance on and hand the attract loop over to Svelte.
document.documentElement.classList.replace('no-js', 'loaded');

hydrate(App, { target: document.getElementById('app') });
