<script lang="ts">
	import { fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import LinkList from '$lib/LinkList.svelte';
	import Animate from '$lib/Animate.svelte';
	import Logo from '$lib/Logo.svelte';

	export let data;
	const { links } = data;

	const ANIMATION_START = 100;
	const ANIMATION_DELAY = 300;
</script>

<div class="w-full max-w-2xl mx-auto">
	<Animate>
		<a transition:fade class="mb-12 fill-white" href="https://spacedrifter.band"><Logo /></a>
		<div class="flex flex-col gap-8 w-full">
			{#if links.events.length > 0}
				<div
					transition:fade={{
						easing: backOut
					}}
					class="w-full"
				>
					<LinkList links={links.events} title="Gigs" />
				</div>
			{/if}
			{#if links.music.length > 0}
				<div
					transition:fade={{
						delay: ANIMATION_DELAY * links.events.length,
						easing: backOut
					}}
					class="w-full"
				>
					<LinkList
						links={links.music}
						title="Music"
						delay={ANIMATION_DELAY * links.events.length}
					/>
				</div>
			{/if}
			{#if links.social.length > 0}
				<div
					transition:fade={{
						delay: ANIMATION_DELAY * (links.music.length + links.events.length),
						easing: backOut
					}}
					class="w-full"
				>
					<LinkList
						links={links.social}
						title="Socials"
						delay={ANIMATION_DELAY * (links.music.length + links.events.length)}
					/>
				</div>
			{/if}
		</div>
	</Animate>
</div>
