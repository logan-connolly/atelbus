<template>
  <div class="service-card">
    <nuxt-link :to="service.link">
      <nuxt-image
        :src="service.img"
        :lazy="false"
        class="service-image"
        fit="cover"
        sizes="200,340:350,700:300,1000:350,1200:400"
      />
      <div class="service-overlay">
        <div class="service-overlay__text">
          {{ service.name }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["service"]
};
</script>

<style>
.service-card {
  position: relative;
}
.service-image {
  border-radius: 5%;
  box-shadow: 5px 5px 5px #999;
}
.service-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  border-radius: 5%;
  background-color: #13478e;
}
.service-card .service-overlay {
  opacity: 0.6;
}
.service-card:hover .service-overlay {
  opacity: 0.9;
}
.service-card:hover .service-overlay {
  box-shadow: 10px 10px 10px #999;
}
.service-card:hover .service-overlay__text {
  font-weight: bold;
  opacity: 1;
}
.service-overlay__text {
  color: white;
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
