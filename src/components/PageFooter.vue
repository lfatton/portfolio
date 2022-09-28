<template>
  <footer>
    <a class="mail" href="mailto:louise.fatton@hotmail.fr" target="_blank">
      <font-awesome-icon icon="fa-solid fa-envelope" size="xl" />
    </a>
    <a class="github" href="https://github.com/lfatton" target="_blank">
      <font-awesome-icon icon="fa-brands fa-square-github" size="xl" />
    </a>
    <a class="linkedin" href="https://www.linkedin.com/in/louise-fatton" target="_blank">
      <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
    </a>
    <a class="twitter" href="https://twitter.com/basdechapon" target="_blank">
      <font-awesome-icon icon="fa-brands fa-square-twitter" size="xl" />
    </a>
  </footer>
</template>

<script setup>

</script>

<style lang="less" scoped>
@import "@/assets/theme/colors";

footer {
  padding-top: 2%;
  padding-bottom: 1%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  border-top: 1px solid @secondary-border-color;

  a {
    width: 20%;
    text-align: center;
  }
}
</style>