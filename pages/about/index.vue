<template>
  <page-layout name="About">
    <template v-slot:header>
      <p>
        ATEL Bus & Truck is a family-owned business. Established in 1994, we
        have over 25 years of experience in motor repairs and services. We
        provide high quality, reliable and comprehensive bus, truck and RV
        services for the public and private sector.
      </p>
      <p>
        We service bus, fleets, recreational vehicles (RV), motorhomes, cars,
        sport utility vehicle (SUV) and trucks in the Washington D.C. and
        Baltimore areas. We accept all insurance policies.
      </p>
      <p>
        While it is unfortunate that we cannot offer a handshake, you can still
        meet the team below:
      </p>
    </template>
    <template v-slot:content> </template>
</template>

<script>
export default {
  head: {
    title: "ATEL | About",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ATEL Bus & Truck's company history and introduction to team"
      }
    ]
  }
};
</script>
