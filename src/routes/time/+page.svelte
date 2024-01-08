<script lang="ts">
  let now = new Date();

  $: yearStart = new Date(now.getFullYear(), 0);
  $: yearEnd = new Date(now.getFullYear() + 1, 0);

  $: monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  $: monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  $: dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  $: dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let clear: number;
  $: {
    clearInterval(clear);
    clear = setInterval(() => (now = new Date()), 1000);
  }

  const calculatePercentage = (start: Date, end: Date) => {
    const duration = end.getTime() - start.getTime();
    const passed = now.getTime() - start.getTime();
    return ((passed / duration) * 100).toFixed(2);
  };
</script>

<svelte:head>
  <title>time</title>
</svelte:head>

<h1>
  <span>year:</span>
  {calculatePercentage(yearStart, yearEnd)}%
  <span>&nbsp; month:</span>
  {calculatePercentage(monthStart, monthEnd)}%
  <span>&nbsp; day:</span>
  {calculatePercentage(dayStart, dayEnd)}%
</h1>

<style>
  h1 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 150px;
    user-select: none;
  }

  span {
    color: #0891b2;
    opacity: 0.75;
  }
</style>
