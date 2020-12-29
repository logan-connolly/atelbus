<template>
  <page-layout name="Contact Us">
    <template v-slot:header>
      Get in touch with us by filling out the contact form.
    </template>
    <template v-slot:content>
      <div class="contact-form">
        Insert Contact Form here
      </div>
    </template>
  </page-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-form {
  color: red;
}
</style>
