<script lang="ts">
	export let href: string;
	export let label: string;
</script>

<div class="container">
	<a {href} target="_blank" rel="noreferrer" class="link" title={label}>
		<p class="label">{label}</p>
		<!-- <i class="icon">Icon</i> -->
	</a>
</div>

<style lang="postcss">
	.container {
		position: relative;
		border-radius: 10rem;
		outline: 2px solid black;
		color: black;
		transition: 0.2s ease-in-out;
	}

	.container:hover {
		background-color: black;
		color: white;
	}

	.link {
		display: flex;
		align-items: center;
		text-align: center;
		padding: 1rem;
		text-decoration: none;
		color: unset;
	}

	.label {
		margin: 0;
		width: 100%;
		font-size: 1.25rem;
	}

	.icon {
		position: absolute;
		border-radius: 100%;
		background-color: black;
		height: 2rem;
		width: 2rem;
	}
</style>
