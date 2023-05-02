<script lang="ts" context="module">
  export type Project = {
    name: string;
    description?: string;
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

<ul>
  {#each projects as project}
    <li class={project.img ? 'hasimg' : ''}>
      <h3>{project.name}</h3>
      {#if project.description}
        <p>{project.description}</p>
      {/if}
      {#if project.web || project.src}
        <nav>
          {#if project.web}
            <span>
              <a href={project.web}>{new URL(project.web).hostname}</a>
              <Linkicon />
            </span>
          {/if}
          {#if project.src}
            <a href={project.src}>source code</a>
          {/if}
        </nav>
      {/if}
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
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
    margin: 0;
  }
  li {
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
  li.hasimg {
    aspect-ratio: 21/9;
  }
  @media (max-width: 500px) {
    li.hasimg {
      aspect-ratio: 16/9;
    }
  }
  h3 {
    margin: 0;
    font-size: 20px;
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
  nav {
    display: flex;
    gap: 12px;
    line-height: 1.5;
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
  li:hover img {
    transform: scale(1.04) rotate(2deg);
  }
</style>
