<template>
  <div v-if="project.name == 'Doom-Nukem'" class="project-content-container doom">
    <div class="summary" v-html="project.summary" />
    <div class="details">
      <li v-for="detail in project.details" :key="detail.id">
        {{detail.text}}
      </li>
    </div>
    <div class="image-container">
      <img :src="getImgSrc(project.images[0])" :alt="project.name"/>
    </div>
    <div class="description" v-html="project.description"/>
    <div class="image-container">
      <img :src="getImgSrc(project.images[1])" :alt="project.name"/>
    </div>
    <div class="video-wrapper" v-if="project.video">
      <iframe width="100%" height="100%"
              :src="project.video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen/>
    </div>
  </div>
  <div v-else-if="project.name == 'Fractol'" class="project-content-container fractol">
    <div class="description" v-html="project.description"/>
    <div class="details">
      <li v-for="detail in project.details" :key="detail.id">
        {{detail.text}}
      </li>
    </div>
    <div class="images-container">
      <div class="image-container" v-for="img in project.images" :key="img.id">
        <img :src="getImgSrc(img)" :alt="project.name"/>
      </div>
    </div>
  </div>
  <div v-else class="project-content-container">
    <div class="description" v-html="project.description"/>
    <div class="details">
      <li v-for="detail in project.details" :key="detail.id">
        {{detail.text}}
      </li>
    </div>
    <div class="image-container" v-for="img in project.images" :key="img.id">
      <img :src="getImgSrc(img)" :alt="project.name"/>
    </div>
    <div class="video-wrapper" v-if="project.video">
      <iframe width="100%" height="100%"
              :src="project.video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['project'])

console.log(props.project)

function getImgSrc(image) {
  return require("../assets/images/" + image.name + ".png")
}
</script>

<style lang="less" scoped>
.project-content-container {
  padding: 3% 0;

  div {
    padding-bottom: 1%;
  }

  img {
    max-width: 100%;
  }

  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &.fractol {
    .images-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 5px;

      .image-container {
        width: 49%;
      }
    }
  }
}
</style>