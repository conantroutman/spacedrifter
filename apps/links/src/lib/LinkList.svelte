<script lang="ts">
	import { fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Link from '$lib/Link.svelte';
	import type { Links } from './types';

	export let links: Links;
	export let title: string;
	export let delay: number = 0;
</script>

<article>
	<h2 class="w-full text-center mb-4 uppercase tracking-wider font-semibold">{title}</h2>
	<ul class="list-none p-0 flex flex-col gap-4">
		{#each links as link, index}
			<li
				transition:fade={{
					delay: (300 + delay) * index,
					easing: backOut
				}}
			>
				<Link href={link.href} label={link.label} icon={link.icon} />
			</li>
		{/each}
	</ul>
</article>
