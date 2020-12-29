<template>
  <div class="welcome">
    <div class="welcome-title">
      Keep your vehicles on the road
      <span class="welcome-subtitle">where they belong</span>
    </div>
    <div class="buttons">
      <nuxt-link to="services" class="button button__primary"
        >Our Services</nuxt-link
      >
      <nuxt-link to="contact" class="button button__secondary"
        >Contact Us</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  text-align: center;
}

.welcome-title {
  font-size: 2.75rem;
}

.welcome-subtitle {
  font-size: 2.75rem;
  color: #13478e;
}

@media screen and (max-width: 600px) {
  .welcome-title {
    font-size: 1.75rem;
  }
  .welcome-subtitle {
    font-size: 1.75rem;
    font-weight: 700;
  }
}

.buttons {
  display: inline-flex;
  justify-content: start;
  gap: 0.5em;
}

.button {
  display: inline-block;
  padding: 0.46em 1.6em;
  border: 0.1em solid #000000;
  margin: 0 0.2em 0.2em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #000000;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  text-align: center;
  transition: all 0.15s;
}

.button:hover {
  text-shadow: 0 0 2em rgba(255, 255, 255, 1);
}

.button__primary {
  background-color: #13478e;
  color: #fff;
}

.button__secondary {
  border-color: #13478e;
  background-color: rgba(0, 0, 0, 0);
  color: #13478e;
}

@media all and (max-width: 30em) {
  .button {
    display: block;
    margin: 0.4em auto;
  }
}
</style>
