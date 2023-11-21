<template>
  <h1>About me</h1>
  <div class="container">
    <div class="pic-container">
      <img src="@/assets/images/louise.jpg" alt="picture"/>
    </div>
    <div class="text-container">
      <div class="middle-aligned">
        <p>
          Hi and welcome 💫
        </p>
        <p>
          I’m Louise (she/her) and I have been interested in computer science ever since I took an extra credit class
          learning
          Component Pascal during my Bachelor of Arts degree. After obtaining my Japanese & English degree, I started
          learning software development in <a href="https://42.fr/en/homepage/" target="_blank">42 Paris</a> in the hope
          of
          one day creating video games that make people feel ✨feels✨
        </p>
        <p>
          I have since worked on several gaming
          <router-link to="/">projects</router-link>
          both for school and fun, and also been employed as a .NET developer during 3 years in a Swiss tech
          company.
          I’m currently a game programmer at <a href="https://ouatstudios.net/">OuatStudios</a>.
        </p>
        <p>
          When I’m not developing or playing games, I enjoy hanging out with my friends, cats, and plants. I also
          like reading, drinking tea, and climbing.
        </p>
        <p>
          If you have any questions or just want to talk, feel free to <a href="mailto:louise.fatton@hotmail.fr">contact me</a>!
        </p>
      </div>
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
    width: 30%;
    padding-right: 1%;
    padding-top: 0.5%;

    img {
      width: 100%;
    }
  }

  .text-container {
    width: 55%;
    padding-left: 1%;

    p {
      padding-bottom: 3%;
    }

    @media (min-width: 794px) {
      position: relative;

      .middle-aligned {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
  }

  @media (min-width: 1550px) {
    .pic-container {
      width: 35%;
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