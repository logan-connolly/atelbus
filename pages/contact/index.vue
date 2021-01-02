<template>
  <page-layout name="Contact Us">
    <template v-slot:header>
      Get in touch with us by filling out the contact form.
    </template>
    <template v-slot:content>
      <contact-form></contact-form>
    </template>
  </page-layout>
</template>

<script>
import ContactForm from "@/components/contact/ContactForm.vue";
export default {
  components: {
    ContactForm
  }
};
</script>

<style scoped>
.contact-form {
  color: red;
}
</style>
