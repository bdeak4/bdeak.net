<script>
  import Projects from '../components/projects.svelte';
</script>

<h1>Bartol Deak</h1>

code:
<a href="/projects">projects</a>
<a href="https://github.com/bdeak4">github</a>
<br />
reach out:
<a href="https://twitter.com/bd4245">twitter</a>
<a href="https://discordapp.com/users/848855064244256788">discord</a>
<a href="mailto:b@bdeak.net">email</a>

<h2>personal projects</h2>
<div class="proj">
  <Projects
    projects={[
      {
        name: 'chatter',
        description: `Python Flask web aplikacija koja vrši analizu Reddit komentara
    u svrhu analize korelacije između popularnosti i cijene kriptovalute.`,
        web: 'https://chatter.exposed/',
        src: 'https://github.com/bdeak4/chatter',
        img: 'https://raw.githubusercontent.com/bdeak4/bdeak.net/main/src/img/projects/chatter.webp',
        imgbrightness: 0.4,
      },
      {
        name: 'tree-diff',
        description:
          'Elixir paket napravljen u svrhu lakšeg pristupa i analize javno dostupnih podataka sa stranice Nabava.net.',
        web: 'https://chatter.exposed/',
        src: 'https://github.com/bdeak4/chatter',
        img: 'https://raw.githubusercontent.com/bdeak4/bdeak.net/main/src/img/projects/postsandcomments.png',
      },
      {
        name: 'generate-nft-assets',
        description: '',
        web: '',
        src: '',
      },
      {
        name: 'raid5-seed-phrase',
        description: '',
        src: 'https://github.com/bdeak4/chatter',
      },
      {
        name: 'react-animated-list',
        description: '',
        web: '',
        src: '',
      },
      {
        name: '5x15',
        description: '',
        web: '',
        src: '',
      },
      {
        name: 'ex_nabava',
        description: `Elixir paket napravljen u svrhu lakšeg pristupa i analize
    javno dostupnih podataka sa stranice Nabava.net.`,
        web: 'https://hex.pm/packages/ex_nabava',
        src: 'https://github.com/bdeak4/ex_nabava',
        img: 'https://raw.githubusercontent.com/bdeak4/bdeak.net/main/src/img/projects/ludo.webp',
      },
    ]}
  />
</div>

<style>
</style>
