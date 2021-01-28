<template>
  <page-layout name="Contact Us">
    <template v-slot:header>
      Get in touch with us immediately via phone or email. Or simply stop by and
      visit us!
    </template>
    <template v-slot:content>
      <div class="contact-items">
        <div class="contact-item">
          <a href="tel: +1 (301) 210-5100">
            <fa :icon="['fas', 'phone-square-alt']" />
            <span>(301) 210-5100</span>
          </a>
        </div>
        <div class="contact-item">
          <a href="mailto:info@atelbus.com">
            <fa :icon="['fas', 'envelope-square']" />
            <span>info@atelbus.com</span>
          </a>
        </div>
        <div class="contact-item contact-item__address">
          <a href="https://g.page/ATELBusandTruck?share">
            <fa :icon="['fas', 'map-marker-alt']" />
            <span>12120 Conway Rd</span>
          </a>
        </div>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12392.555081894823!2d-76.8861638!3d39.0577516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd27dd8b154634017!2sATEL%20Bus%20and%20Truck%20Service%20Center%2C%20Inc.!5e0!3m2!1sen!2sde!4v1611768520264!5m2!1sen!2sde"
          width="100%"
          height="420"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ATEL Bus & Truck contact information via email, phone and Google maps"
      }
    ]
  }
};
</script>

<style scoped>
.page-divider {
  margin-bottom: 2rem;
}

.contact-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contact-item {
  padding-left: 2rem;
  padding-bottom: 1.2rem;
}

a {
  text-decoration: none;
  color: #000;
}

a:hover {
  color: #13478e;
}

a svg {
  color: #13478e;
  font-size: 1.5rem;
}

a span {
  margin-left: 10px;
}

.map {
  margin-top: 2rem;
}

@media screen and (max-width: 768px) {
  .contact-items {
    justify-content: flex-start;
    padding: 1.5rem;
  }
  .map {
    display: none;
  }
}
</style>
