<script lang="ts" context="module">
  export type Project = {
    name: string;
    description?: string;
    tech?: string[];
    web?: string;
    src?: string;
    img?: string;
    imgbrightness?: number;
  };
</script>

<script lang="ts">
  import Linkicon from './linkicon.svelte';

  export let projects: Project[];
</script>

<ul class="projects">
  {#each projects as project}
    <li class="project" class:hasimg={project.img}>
      <h3>{project.name}</h3>
      {#if project.description}
        <p>{project.description}</p>
      {/if}
      <ul class="footer">
        {#if project.web}
          <li class="link">
            <a href={project.web}>{new URL(project.web).hostname}</a>
            <Linkicon />
          </li>
        {/if}
        {#if project.src}
          <li class="link">
            <a href={project.src}>source code</a>
          </li>
        {/if}
        {#if project.tech}
          {#each project.tech as tech}
            <li class="tech">{tech}</li>
          {/each}
        {/if}
      </ul>
      {#if project.img}
        <img
          src={project.img}
          alt=""
          style={`filter: brightness(${project.imgbrightness || 0.2})`}
        />
      {/if}
    </li>
  {/each}
</ul>

<style>
  .projects {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
    margin: 0;
  }
  .project {
    border: 1px solid #333;
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 8px;
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 600px) {
    .project.hasimg {
      aspect-ratio: 2/1;
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    user-select: none;
    object-fit: cover;
    object-position: top left;
    transition: transform 0.3s ease-out;
  }
  .project:hover img {
    transform: scale(1.04) rotate(2deg);
  }
  h3 {
    margin: 0;
    font-size: 20px;
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding-left: 0;
  }
  .footer li {
    list-style-type: none;
  }
  .footer .link {
    padding: 1px;
  }
  .footer .tech {
    font-size: 12px;
    background-color: #222222bf;
    padding: 4px 8px;
    border-radius: 10px;
  }
</style>
