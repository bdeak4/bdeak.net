<script lang="ts">
  export let title: string;
</script>

<section class="container">
  <h2 class="title">{title}</h2>
  <div class="content">
    <slot />
  </div>
</section>

<style>
  .container {
    display: flex;
    flex-direction: row-reverse;
  }
  .title {
    position: sticky;
    top: 0;
    align-self: flex-start;
    writing-mode: vertical-rl;
    margin: 0;
    margin-top: -32px;
    padding-top: 32px;
    padding-left: 16px;
    font-size: 36px;
    text-transform: uppercase;
    line-height: 1;
  }
  .content {
    flex-grow: 1;
  }
</style>
