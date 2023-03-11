<template>
  <page-layout name="About">
    <template v-slot:header>
      <p>
        Welcome to ATEL, our family-owned company that has been providing
        top-quality service for buses, trucks, and RVs since 1998. Our passion
        for the industry is evident in every service we provide.
      </p>
      <p>
        At ATEL, we take great pride in our expertise, commitment, and
        outstanding customer service. Our team of certified technicians has
        years of experience and training, allowing us to deliver the best
        service possible to our clients.
      </p>
      <p>
        We understand that a breakdown or maintenance issue with your vehicle
        can be a major inconvenience, which is why we offer timely and efficient
        repairs to get you back on the road as soon as possible. Our services
        include routine maintenance, diagnostic testing, brake repairs, engine
        repairs, transmission service, and more.
      </p>
      <p>
        We use only the highest quality parts and equipment to ensure the
        longevity and reliability of your vehicle. Our team is dedicated to
        providing you with personalized service that meets your unique needs and
        exceeds your expectations.
      </p>
      <p>
        Thank you for considering ATEL for your vehicle service needs. We look
        forward to earning your trust and becoming your go-to service provider
        for years to come.
      </p>
    </template>
    <template v-slot:content> </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    title: "ATEL Bus & Truck | About",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "ATEL Bus & Truck's company history and introduction to team",
      },
    ],
  },
};
</script>

<style scoped>
p {
  margin-bottom: 1rem;
}
</style>
