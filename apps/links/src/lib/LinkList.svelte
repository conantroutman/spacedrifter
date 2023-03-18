<script lang="ts">
    import Link from "$lib/Link.svelte";

    type Link = {
        href: string,
        label: string
    }

    export let links: Link[]
    export let title: string
</script>

<article>
    <h2>{title}</h2>
    <ul class="links">
        {#each links as link}
            <li>
                <Link href={link.href} label={link.label} />
            </li>
        {/each}
    </ul>
</article>

<style>
    h2 {
        width: 100%;
        text-align: center;
    }

    .links {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>