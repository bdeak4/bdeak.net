<script>
  import '@fontsource/inter';
</script>

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
  }

  :global(a:hover) {
    text-decoration: none;
  }

  main {
    max-width: 500px;
    padding: 16px;
    padding-top: 32px;
  }
</style>
