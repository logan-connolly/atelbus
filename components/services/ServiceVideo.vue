<template>
  <div class="video">
    <iframe
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["url"]
};
</script>

<style scoped>
.video {
  margin-top: 2rem;
  text-align: center;
}
.video > iframe {
  width: 560px;
  height: 315px;
}

@media screen and (min-width: 1000px) {
  .video > iframe {
    width: 720px;
    height: 420px;
  }
}
@media screen and (max-width: 768px) {
  .video > iframe {
    width: 100%;
  }
}
</style>
