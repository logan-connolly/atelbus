<template>
  <div class="footer">
    <div class="contact-info">
      <a href="tel: +1 (301) 210-5100">+1 (301) 210-5100</a>
      <a href="mailto:info@atelbus.com">info@atelbus.com</a>
    </div>
    <div class="company-name">
      © ATEL Bus & Truck Service Center, Inc.
    </div>
    <div class="social-media">
      <a
        href="https://www.linkedin.com/company/atel-bus-&-truck-service-center/"
      >
        <fa :icon="['fab', 'linkedin']" />
      </a>
      <a
        href="https://www.facebook.com/pg/ATEL-Bus-Truck-Service-Center-Inc-406003592850990"
      >
        <fa :icon="['fab', 'facebook-square']" />
      </a>
      <a
        href="https://www.yelp.com/biz/atel-bus-and-truck-service-center-beltsville-2"
      >
        <fa :icon="['fab', 'yelp']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}

.footer {
  grid-column: 1 / -1;
  grid-row: 3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #13478e;
  font-size: 0.8rem;
  color: #fff;
}

.contact-info {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
  font-size: 0.7rem;
}

.company-name {
  font-size: 1rem;
}

.social-media {
  display: inline-flex;
  margin-right: 1rem;
  gap: 1em;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .footer {
    justify-content: space-between;
  }
  .contact-info {
    margin-left: 3rem;
  }
  .social-media {
    margin-right: 3rem;
  }
  .company-name {
    display: none;
  }
}
</style>
