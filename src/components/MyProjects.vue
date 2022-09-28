<template>
  <h1>My projects list</h1>
  <div class="project-container" v-for="project in projects" :key="project.id">
    <h2>
      <a :href=project.url target="_blank">
        {{ project.name }}
      </a>
      -
      <span class="setting">
            {{ project.setting }}
          </span>
    </h2>
    <div class="languages-used">
      {{ project.language }}
    </div>
    <div class="description" v-html="project.description"/>
    <MediaLoader :project="project"/>
  </div>
</template>

<script setup>
import projectsData from "@/assets/projects.json"
import MediaLoader from "@/components/MediaLoader";

const projects = projectsData

</script>

<style lang="less" scoped>
@import "@/assets/theme/colors";

.project-container {
  padding: 5% 0;
  border-bottom: 1px solid @primary-border-color;

  .languages-used {
    font-size: 13px;
    color: @secondary-text-color;
    display: block;
    padding-top: 0.5%;
  }

  .description {
    padding: 3% 0;
  }

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: none;
  }
}


</style>