<template>
  <div class="home">
    <navbar />
    <div class="container">
      <hero />

      <div class="row mt-5 mb-3">
        <div class="col">
          <h2>Our <strong>Best</strong> Foods</h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye> See More</router-link
          >
        </div>
      </div>

      <div class="row mb-5">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <cardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import hero from "@/components/hero.vue";
import cardProduct from "@/components/cardProduct.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    navbar,
    hero,
    cardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-product")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

    CardProduct