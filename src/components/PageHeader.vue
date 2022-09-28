<template>
  <header>
    <div class="title">
      <h1>
        Louise Fatton
      </h1>
      <div class="subtitle">
        Game Developer Portfolio
      </div>
    </div>
    <NavigationMenu />
  </header>
</template>

<script setup>
import NavigationMenu from "@/components/NavigationMenu";
</script>

<style lang="less" scoped>
@import "@/assets/theme/colors";

header {
  border-bottom: 1px solid @secondary-border-color;

  .title {
    h1 {
      text-align: left;
      padding-bottom: 0;
      font-weight: 200;
    }

    .subtitle {
      color: @secondary-text-color;
      font-style: italic;
      font-size: 16px;
    }
  }
}
</style>