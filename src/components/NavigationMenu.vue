<template>
  <nav>
    <router-link to="/" class="nav-link" active-class="active">My projects</router-link>
    <router-link to="/AboutMe" active-class="active">About me</router-link>
  </nav>
</template>

<script setup>

</script>

<style lang="less" scoped>
nav {
  padding-top: 2%;
  padding-bottom: 1%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;

  a {
    width: 20%;
    text-decoration: none;

    &.active {
      text-decoration: underline;
    }
  }
}
</style>