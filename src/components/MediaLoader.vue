<template>
  <div v-if="project.name == 'Fractol'" class="images-container fractol">
    <div class="image-container" v-for="img in project.images" :key="img.id">
      <img :src="getImgSrc(img)" :alt="project.name"/>
    </div>
  </div>
  <div v-else class="image-container" v-for="img in project.images" :key="img.id">
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
</template>

<script setup>
const props = defineProps(['project'])

console.log(props.project)

function getImgSrc(image) {
  return require("../assets/images/" + image.name + ".png")
}
</script>

<style lang="less" scoped>
.fractol {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;

  .image-container {
    width: 49%;
  }
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
</style>