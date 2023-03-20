<script lang="ts">
	import { onMount } from 'svelte';

	let play = false;

	onMount(() => {
		play = true;
	});
</script>

{#if play}
	<slot />
{/if}
