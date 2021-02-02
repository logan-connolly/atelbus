<template>
  <div class="page">
    <div class="page-name">{{ name }}</div>
    <div class="page-desc">
      <slot name="header"></slot>
    </div>
    <div class="page-divider"></div>
    <div class="page-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  text-align: justify;
}

.page-name {
  color: #13478e;
  font-weight: 700;
  font-size: 2em;
}

.page-desc {
  margin: 1rem auto;
  color: #4f5869;
}

.page-divider {
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 4rem;
  height: 0.25rem;
  border: 2px solid #13478e;
}

@media screen and (max-width: 768px) {
  .page {
    text-align: center;
  }
}
@media screen and (min-width: 1000px) {
  .page-desc {
    margin: 1rem 8rem;
  }
}
</style>
