<template>
  <div class="footer">
    <div class="contact-info">
      (301) 210-5100
    </div>
    <div class="company-name">
      ATEL Bus & Truck Service Center, Inc.
    </div>
    <div class="social-media">
      Facebook
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  grid-column: 1 / -1;
  grid-row: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #13478e;
  font-size: 0.8rem;
  color: #fff;
}

.contact-info {
  margin-left: 1rem;
}

.company-name {
  font-size: 0.8rem;
}

.social-media {
  margin-right: 1rem;
}

@media screen and (max-width: 600px) {
  .footer {
    justify-content: center;
  }
  .contact-info {
    display: none;
  }
  .social-media {
    display: none;
  }
}
</style>
