<script lang="ts" context="module">
  import type { Project } from './projects.svelte';

  export type Organization = {
    name: string;
    title: string;
    timeline: string;
    projects: Project[];
    web?: string;
  };
</script>

<script lang="ts">
  import Projects from './projects.svelte';

  export let organizations: Organization[];
</script>

<ul>
  {#each organizations as organization}
    <li>
      <div class="header">
        <h2><a href={organization.web}>{organization.name}</a></h2>
        <span>{organization.title}</span>
        <span>{organization.timeline}</span>
      </div>
      <Projects projects={organization.projects} />
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0;
    margin: 0;
  }
  .header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .header span {
    font-size: 12px;
  }
  h2 {
    margin: 0;
    line-height: 1;
    font-size: 24px;
  }
  h2 a {
    text-decoration: none;
  }
</style>
