<script>
  import About from '../components/about.svelte';
  import Contact from '../components/contact.svelte';
  import Organizations from '../components/organizations.svelte';
  import Projects from '../components/projects.svelte';
  import Section from '../components/section.svelte';
  import { work, nonprofits, projects } from '../data';
</script>

<div class="sections">
  <Section title="about">
    <About />
  </Section>

  <Section title="work">
    <Organizations organizations={work} />
  </Section>

  <Section title="nonprofits">
    <Organizations organizations={nonprofits} />
  </Section>

  <Section title="projects">
    <Projects {projects} />
  </Section>

  <Section title="contact">
    <Contact />
  </Section>
</div>

<style>
  .sections {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
</style>
