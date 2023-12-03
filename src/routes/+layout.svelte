<script>
  import '@fontsource/inter';
  import Analytics from '../components/analytics.svelte';
</script>

<svelte:head>
  <title>Bartol Deak - DevOps / Software Engineer</title>
</svelte:head>

<Analytics />

<main>
  <slot />
</main>

<style>
  :global(body) {
    font-family: 'Inter';
    color: #fff;
    background-color: #000;
    margin: 0;
  }
  :global(a) {
    color: #fff;
    text-decoration-color: #555;
  }
  :global(a:hover) {
    text-decoration-color: #fff;
  }
  :global(::selection) {
    background-color: #0891b2;
  }
  main {
    max-width: 550px;
    padding: 16px;
    padding-top: 32px;
  }
  /* fix for chrome autofill */
  :global(input:-webkit-autofill),
  :global(input:-webkit-autofill:focus) {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  :global(input[data-autocompleted]) {
    background-color: transparent !important;
  }
</style>
