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
      <a class="game-url" v-if="project.gameUrl" :href=project.gameUrl target="_blank">play</a>
    </h2>
    <div class="languages-used">
      {{ project.language }}
    </div>
    <ProjectContentLoader :project="project"/>
  </div>
</template>

<script setup>
import projectsData from "@/assets/projects.json"
import ProjectContentLoader from "@/components/ProjectContentLoader";

const projects = projectsData

</script>

<style lang="less" scoped>
@import "@/assets/theme/colors";

.project-container {
  padding: 5% 0;
  border-bottom: 1px solid @primary-border-color;

  .game-url {
    float: right;
    font-weight: 700;
    color: #192833;
    background-color: #FEF6B2;
    text-decoration-line: none;
    padding: 0 1%;
    margin-right: 6%;
    border-radius: 6%;
    text-transform: uppercase;
  }

  .languages-used {
    font-size: 13px;
    color: @text-color;
    display: block;
    padding-top: 0.5%;
  }

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: none;
  }
}
</style>