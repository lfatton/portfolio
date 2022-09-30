<template>
  <PageHeader />
  <main>
    <RouterView />
  </main>
  <PageFooter />
</template>

<script setup>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
</script>

<style lang="less">
@import "assets/theme/colors";

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @text-color;
  background-color: @primary-background-color;
  width: 210mm;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    flex-grow: 1;
  }

  > main, footer, header {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 793px) {
    width: 100%;
  }

  @media (max-width: 793px) {
    font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (793 - 320)));
  }
}
</style>
