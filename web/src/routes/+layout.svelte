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
    text-decoration-color: #555;
  }

  :global(a:hover) {
    text-decoration-color: #fff;
  }

  main {
    max-width: 550px;
    padding: 16px;
    padding-top: 32px;
  }
</style>
