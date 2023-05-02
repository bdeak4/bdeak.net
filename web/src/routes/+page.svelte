<script>
  import Organizations from '../components/organizations.svelte';
  import Projects from '../components/projects.svelte';
  import Section from '../components/section.svelte';
  import { work, nonprofits, projects } from '../data';
</script>

<!-- <h1>Bartol Deak</h1>

code:
<a href="/projects">projects</a>
<a href="https://github.com/bdeak4">github</a>
<br />
reach out:
<a href="https://twitter.com/bd4245">twitter</a>
<a href="https://discordapp.com/users/848855064244256788">discord</a>
<a href="mailto:b@bdeak.net">email</a> -->

<div class="sections">
  <Section title="about">smth about me</Section>

  <Section title="work">
    <Organizations organizations={work} />
  </Section>

  <Section title="nonprofits">
    <Organizations organizations={nonprofits} />
  </Section>

  <Section title="projects">
    <Projects {projects} />
  </Section>
</div>

<style>
  .sections {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
</style>
