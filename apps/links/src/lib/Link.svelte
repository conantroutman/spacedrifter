<script lang="ts">
	import 'iconify-icon';

	export let href: string;
	export let label: string;
	export let icon: string | undefined = undefined;

	$: icon;
</script>

<div
	class="relative rounded-full outline outline-2 outline-white transition duration-200 ease-in-out hover:bg-white hover:text-black"
>
	<a
		{href}
		target="_blank"
		rel="noreferrer"
		class="flex items-center justify-center p-2 text-xl relative"
		title={label}
	>
		{#if icon}
			<div class="absolute left-0 h-full aspect-square p-2 flex items-center">
				<iconify-icon {icon} class="text-3xl" />
			</div>
		{/if}
		<p class="m-0 text-center">{label}</p>
	</a>
</div>
