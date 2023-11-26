<div class="container">
  <img src="https://github.com/bdeak4.png" alt="" />
  <div class="text">
    <h1>Bartol Deak</h1>
    <p>DevOps / Software Engineer</p>
    <nav>
      <a href="https://github.com/bdeak4">GitHub</a>
      <a href="https://twitter.com/bd4245">Twitter</a>
      <a href="https://discordapp.com/users/848855064244256788">Discord</a>
      <a href="mailto:b@bdeak.net">b@bdeak.net</a>
    </nav>
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    position: relative;
  }
  img {
    width: 122px;
    height: 122px;
    border-radius: 50%;
    transition: transform 5s linear;
  }
  img:hover {
    transform: rotate(360deg);
  }
  @media (max-width: 600px) {
    .container {
      margin-top: 56px;
    }
    img {
      position: absolute;
      top: -61px;
      right: 24px;
      border: 1px solid #333;
    }
  }
  @media (max-width: 500px) {
    .container {
      margin-top: 35px;
    }
    img {
      width: 76px;
      height: 76px;
      top: -38px;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 16px;
    flex-grow: 1;
  }
  h1 {
    margin: 0;
    line-height: 1;
    font-size: 24px;
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
  nav {
    display: flex;
    gap: 8px;
    line-height: 1.5;
    flex-wrap: wrap;
  }
</style>
