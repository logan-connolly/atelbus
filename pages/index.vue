<template>
  <div class="welcome">
    <div class="welcome-title">
      Keep your vehicles on the road
      <span class="welcome-subtitle">where they belong</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-title {
  font-size: 2.75rem;
}

.welcome-subtitle {
  font-size: 2.75rem;
  color: #014f86;
}

@media screen and (max-width: 600px) {
  .welcome-title {
    font-size: 1.75rem;
  }
  .welcome-subtitle {
    font-size: 1.75rem;
  }
}
</style>
