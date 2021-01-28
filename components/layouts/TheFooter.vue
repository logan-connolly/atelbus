<template>
  <footer>
    <div class="contact-info">
      <a href="tel: +1 (301) 210-5100">(301) 210-5100</a>
    </div>
    <div class="company-name">
      © ATEL Bus & Truck Service Center, Inc.
    </div>
    <div class="social-media">
      <a
        href="https://www.linkedin.com/company/atel-bus-&-truck-service-center/"
        title="linkedin"
      >
        <fa :icon="['fab', 'linkedin']" />
      </a>
      <a
        href="https://www.facebook.com/pg/ATEL-Bus-Truck-Service-Center-Inc-406003592850990"
        title="facebook"
      >
        <fa :icon="['fab', 'facebook-square']" />
      </a>
      <a
        href="https://www.yelp.com/biz/atel-bus-and-truck-service-center-beltsville-2"
        title="yelp"
      >
        <fa :icon="['fab', 'yelp']" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}

footer {
  grid-column: 1 / -1;
  grid-row: 3;
  display: flex;
  flex-shrink: 0;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background: #13478e;
  font-size: 0.8rem;
  color: #fff;
}

.contact-info {
  margin-left: 1rem;
  font-size: 1.1rem;
}

.company-name {
  font-size: 1.2rem;
}

.social-media {
  display: inline-flex;
  margin-right: 1rem;
  font-size: 24px;
}

.social-media > a {
  margin: 0 10px;
}

@media screen and (max-width: 768px) {
  .footer {
    justify-content: space-between;
  }
  .contact-info {
    margin-left: 1rem;
  }
  .social-media {
    margin-right: 1rem;
  }
  .company-name {
    display: none;
  }
}
</style>
