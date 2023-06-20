<script lang="ts" context="module">
  export type Project = {
    name: string;
    description?: string;
    tech: string[];
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
    <li class={`project ${project.img ? 'hasimg' : ''}`}>
      <h3>{project.name}</h3>
      {#if project.description}
        <p>{project.description}</p>
      {/if}
      <div class="footer">
        {#if project.web || project.src}
        <nav>
          
        </nav>
        {/if}
        {#if project.tech}
          <ul class="tech">
            {#if project.web}
              <span>
                <a href={project.web}>{new URL(project.web).hostname}</a>
                <Linkicon />
              </span>
            {/if}
            {#if project.src}
              <span>
                <a href={project.src}>source code</a>
              </span>
            {/if}
            {#each project.tech as tech}
              <li>{tech}</li>
            {/each}
          </ul>
        {/if}
      </div>
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
  .project.hasimg {
    aspect-ratio: 2/1;
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
  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding-left: 0;
  }
  .tech span {
    padding: 0 1px;
  }
  .tech li {
    list-style-type: none;
    font-size: 12px;
    background-color: #222222BF;
    padding: 4px 8px;
    border-radius: 10px;
  }
</style>
