<template>
  <form @submit.prevent="processForm">
    <label for="name">Name</label>
    <input
      v-model="formData.name"
      type="text"
      id="name"
      placeholder="eg. John Doe"
    />
    <label for="email">Email</label>
    <input
      v-model="formData.email"
      type="text"
      id="email"
      placeholder="johndoe@gmail.com"
    />
    <label for="vehicleType">Vehicle Type</label>
    <select v-model="formData.vehicleType" id="vehicleType">
      <option value="truck">Truck</option>
      <option value="bus">Bus</option>
      <option value="rv">RV</option>
      <option value="other">Other</option>
    </select>
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        vehicleType: ""
      }
    };
  },
  methods: {
    processForm() {
      console.log(this.formData);
      alert("Currently the form does not send information to server");
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        vehicleType: ""
      };
    }
  }
};
</script>

<style scoped>
form {
  width: 400px;
}
@media screen and (max-width: 768px) {
  form {
    width: 400px;
  }
}

input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #13478e;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #1d6bd7;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
