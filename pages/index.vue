<template>
  <div class="welcome">
    <div class="welcome-text">
      <div class="welcome-text__title">
        Keep your vehicles on the road
        <span class="welcome-text__subtitle">where they belong</span>
      </div>
      <div class="welcome-text__info">
        Strategically located in Beltsville, MD, we are able to service buses,
        RVs, cars and SUVs in and around the DMV.
      </div>
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
  text-align: center;
}
.welcome-text > div {
  margin-top: 2rem;
}
.welcome-text__title {
  font-size: 2.75rem;
}
.welcome-text__subtitle {
  font-size: 2.75rem;
  font-weight: bold;
  color: #13478e;
}
.welcome-text__info {
  margin: 1rem 4rem;
  font-size: 1.2rem;
}
@media screen and (max-width: 600px) {
  .welcome-text__title {
    margin-top: 2rem;
    font-size: 2.25rem;
  }
  .welcome-text__subtitle {
    font-size: 2.25rem;
    font-weight: 700;
  }
  .welcome-text__info {
    font-size: 1rem;
  }
}

.buttons {
  display: inline-flex;
  justify-content: start;
  margin-top: 2rem;
}
.button {
  display: inline-block;
  padding: 0.76em 1.9em;
  border: 0.1em solid #000000;
  margin: 0 0.8em 0.8em 0;
  border-radius: 8px;
  box-sizing: border-box;
  text-decoration: none;
  color: #000000;
  background-color: #ffffff;
  text-align: center;
  transition: all 0.15s;
  font-weight: bold;
}
.button:hover {
  box-shadow: 5px 5px 5px #999;
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
    font-size: 0.9rem;
  }
}
</style>
