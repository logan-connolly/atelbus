<template>
  <page-layout name="About">
    <template v-slot:header>
      <p>
        ATEL Bus & Truck is a family-owned business since its inception in 1994.
        We provide high quality, reliable and comprehensive bus, truck and RV
        services for the public and private sector.
      </p>
      <p>
        We thought it would be nice to names to faces before coming into the
        shop. So come meet the team!
      </p>
    </template>

    <template v-slot:content>
      <div class="about">
        <div class="about-person">
          <nuxt-img src="about/male.png" class="about-person-image" />
          <div class="about-person-info">
            <div class="about-person-info__name">Brian Connolly</div>
            <div class="about-person-info__title">President</div>
            <div class="about-person-info__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie lectus orci, viverra posuere ante sodales eget. Donec
              aliquet porttitor.
            </div>
          </div>
        </div>
        <div class="about-person">
          <nuxt-img src="about/female.png" class="about-person-image" />
          <div class="about-person-info">
            <div class="about-person-info__name">Roxanne Connolly</div>
            <div class="about-person-info__title">Accounts Manager</div>
            <div class="about-person-info__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie lectus orci, viverra posuere ante sodales eget. Donec
              aliquet porttitor.
            </div>
          </div>
        </div>
        <div class="about-person">
          <nuxt-img src="about/male.png" class="about-person-image" />
          <div class="about-person-info">
            <div class="about-person-info__name">Oscar</div>
            <div class="about-person-info__title">Shop Manager</div>
            <div class="about-person-info__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie lectus orci, viverra posuere ante sodales eget. Donec
              aliquet porttitor.
            </div>
          </div>
        </div>
        <div class="about-team">
          Team Picture
        </div>
      </div>
    </template>
  </page-layout>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  margin-top: 1rem;
}
.about {
  display: flex;
  flex-direction: column;
}
.about-person {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(6, 1fr);
  border: 0.1em solid #4f5869;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-top: 2rem;
  text-align: left;
  width: 600px;
}
.about-person:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.about-person-image {
  grid-column: 1 / 3;
}
.about-person-info {
  grid-column: 3 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
}
.about-person-info__name {
  font-weight: 700;
}
.about-person-info__title {
  color: #13478e;
  font-size: 0.95rem;
}
.about-person-info__desc {
  margin-top: 1rem;
  color: #4f5869;
  font-size: 0.9rem;
}
.about-team {
  margin-top: 4rem;
  padding: 10rem 8rem;
  border: 0.1em solid #4f5869;
}
@media screen and (max-width: 768px) {
  .about-person {
    width: auto;
  }
  .about-person-info__desc {
    display: none;
  }
  .about-team {
    padding: 4rem 2rem;
  }
}
</style>
