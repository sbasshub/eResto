<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <a class="navbar-brand" href="/">eResto</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/bucket">
            Buckets
            <b-icon-bag></b-icon-bag>
            <span class="badge badge-success ml-2">{{ updateBucket ? updateBucket.length : orderan_quantity.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "navbar",
  data() {
    return {
      orderan_quantity: []
    }
  },
  props: ['updateBucket'],
  methods: {
    setQuantity(data) {
      this.orderan_quantity = data
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/bucket")
      .then((response) => this.setQuantity(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>