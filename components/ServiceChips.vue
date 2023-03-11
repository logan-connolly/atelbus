<template>
  <div class="chips">
    <div class="chip" v-for="(item, index) in items" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>

<style scoped>
.chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.chip {
  display: inline-block;
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding: 0 25px;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 50px;
  border-radius: 25px;
  background-color: #13478e;
  color: white;
}
@media screen and (min-width: 1200px) {
  .chips {
    margin: 0 8rem;
  }
}
</style>
