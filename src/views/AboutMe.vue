<template>
  <h1>About me</h1>
  <div class="container">
    <div class="pic-container">
      <img src="@/assets/images/louise.jpg" alt="picture"/>
    </div>
    <div class="text-container">
      <p>
        Hi and welcome 💫
      </p>
      <p>
        I’m Louise (she/her) and I have been interested in computer science ever since I took an extra credit class
        learning
        Component Pascal during my Bachelor of Arts’ degree. After obtaining my Japanese & English degree, I started
        learning software development in <a href="https://42.fr/en/homepage/" target="_blank">42 Paris</a> in the hope
        of
        one day creating video games that make people feel ✨feels✨
      </p>
      <p>
        I have since worked on several gaming
        <router-link to="/">projects</router-link>
        both for school and fun, and also been employed as a full-stack developer during 3 years in a Swiss tech
        company.
        I’m currently looking for work in the gaming industry, don’t hesitate to take a look at my <a
          href="../../static/Resume_Louise_Fatton.pdf" target="_blank">resume</a> and/or <a
          href="mailto:louise.fatton@hotmail.fr">get in touch</a>.
      </p>
      <p>
        The first games I played were on GameBoy and I think it’s probably why my favourite type of games is 2D
        (especially
        ones like Stardew Valley ♥), even if I enjoy the occasional Horizon or Assassin’s Creed game. The genre I’m
        least
        comfortable with is probably FPS, which is quite ironic as the project I’ve spent most time on (6 months) was a
        game based on a mix of 93 Doom and Duke Nukem 3D. I still very much enjoyed developing it but unfortunately
        wasn't its most efficient tester.
      </p>
      <p>
        When I’m not developing or playing games, I enjoy hanging out with my friends, cats, and plants. I also
        like reading, drinking tea, and pole dancing.
      </p>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
@import "@/assets/theme/colors";

.container {
  padding-bottom: 5%;
  display: flex;
  flex-wrap: wrap;

  .pic-container {
    width: 35%;
    padding-right: 1%;
    padding-top: 0.5%;

    img {
      width: 100%;
    }
  }

  .text-container {
    width: 63%;
    padding-left: 1%;

    p {
      padding-bottom: 1%;
    }
  }

  @media (max-width: 793px) {
    display: block;

    .pic-container {
      float: left;
      padding-right: 2%;
      width: calc(155px + (235 - 155) * ((100vw - 320px) / (793 - 320)));;
    }

    .text-container {
      width: 100%;
    }
  }
}
</style>