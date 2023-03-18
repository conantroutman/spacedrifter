<script lang="ts">
    export let href: string
    export let label: string
</script>

<div class="container">
    <a {href} target="_self" class="link" title={label}>
        <p class="label">{label}</p>
    </a>
</div>

<style lang="postcss">
    .container {
        background-color: bisque;
        border-radius: 2rem;
    }

    .link {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 1rem;
    }

    .label {
        margin: 0;
        width: 100%;
    }
</style>