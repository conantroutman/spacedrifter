<script lang="ts">
	import { fade } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import LinkList from '$lib/LinkList.svelte';
	import Animate from '$lib/Animate.svelte';

	export let data;
	const { links } = data;
</script>

<main>
	<div class="container">
		<Animate>
			<h1 transition:fade>Spacedrifter</h1>
			{#if links.events.length > 0}
				<div
					in:fly={{
						x: 100,
						easing: backOut
					}}
				>
					<LinkList links={links.events} title="Gigs" />
				</div>
			{/if}
			{#if links.music.length > 0}
				<div
					in:fly={{
						x: 100,
						delay: 300 * links.music.length,
						easing: backOut
					}}
				>
					<LinkList links={links.music} title="Music" />
				</div>
			{/if}
			{#if links.social.length > 0}
				<div
					in:fly={{
						x: 100,
						delay: 300 * links.music.length,
						easing: backOut
					}}
				>
					<LinkList links={links.social} title="Socials" />
				</div>
			{/if}
		</Animate>
	</div>
</main>

<style lang="postcss">
	main {
		padding: 4rem 1rem;
	}

	.container {
		width: 100%;
		max-width: 680px;
		margin: auto;
	}
</style>
