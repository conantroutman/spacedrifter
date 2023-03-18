<script lang="ts">
    import { fade } from 'svelte/transition';
	import LinkList from "$lib/LinkList.svelte";


    export let data;
    const { links } = data;
</script>

<main>
    <div class="container">
        <h1 transition:fade>Spacedrifter</h1>
        {#if links.events.length > 0}
            <LinkList links={links.events} title="Events" />
        {/if}
        {#if links.music.length > 0}
            <LinkList links={links.music} title="Music" />
        {/if}
        {#if links.social.length > 0}
            <LinkList links={links.social} title="Socials" />
        {/if}
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