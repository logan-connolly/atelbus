<template>
  <page-layout name="Contact Us">
    <template v-slot:header>
      Looking for expert vehicle maintenance and repair services in the DMV
      area? Contact ATEL today via phone or email to schedule an appointment or
      simply stop by our convenient location at
      <a
        href="https://g.page/ATELBusandTruck?share"
        target="_blank"
        rel="noopener"
        >12120 Conway Rd, Beltsville, MD</a
      >. Our experienced technicians are available <strong>Mon-Fri</strong> from
      <strong>8am-5pm</strong> to provide you with top-notch service and get you
      back on the road as soon as possible. Don't hesitate to get in touch - we
      look forward to hearing from you!
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
          <a target="_blank" href="mailto:info@atelbus.com">
            <fa :icon="['fas', 'envelope-square']" />
            <span>info@atelbus.com</span>
          </a>
        </div>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12392.555081894823!2d-76.8861638!3d39.0577516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd27dd8b154634017!2sATEL%20Bus%20and%20Truck%20Service%20Center%2C%20Inc.!5e0!3m2!1sen!2sde!4v1611768520264!5m2!1sen!2sde"
          width="100%"
          frameborder="0"
          style="border: 0"
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
    title: "ATEL Bus & Truck | Contact",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ATEL Bus & Truck contact information via email, phone and Google maps",
      },
    ],
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #13478e;
}

a:hover {
  color: #071b36;
}

a svg {
  color: #13478e;
  font-size: 1.5rem;
}

a span {
  margin-left: 10px;
}

iframe {
  width: 650px;
  height: 350px;
}

.store-hours {
  font-weight: 700;
}

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

.map {
  margin-top: 2rem;
}

@media screen and (max-width: 768px) {
  iframe {
    width: 100%;
    height: 200px;
  }
  .contact-items {
    justify-content: flex-start;
    padding: 1.5rem;
  }
}
</style>
