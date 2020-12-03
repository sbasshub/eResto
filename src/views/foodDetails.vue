<template>
  <div class="food-details">
    <navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-3">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col md-6">
          <img :src="'../assets/images/'+ product.gambar" class="img-fluid shadow" alt="imeg">
        </div>
        <div class="col md-6">
          <h2><strong>{{ product.nama }}</strong></h2> <hr>
          <h5>Harga: <strong>Rp. {{ product.harga }},-</strong> </h5>

          <form class="mt-3">
              <div class="form-group">
                  <label for="order_quantity">
                      Order Quantity
                  </label>
                  <input type="number" class="form-control" >
              </div>
              <div class="form-group">
                  <label for="description">
                      Order Description
                  </label>
                  <textarea class="form-control" placeholder="description: spicy / gravy / message..." ></textarea>
              </div>

              <button type="submit" class="btn btn-success"><b-icon-cart></b-icon-cart> Hand in </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import axios from "axios";

export default {
  name: "foodDetails",
  components: {
    navbar,
  },
  data() {
      return {
          product: {}
      }
  },
  methods: {
      setProduct(data) {
          this.product = data
      }
  },
  mounted() {
    axios
      .get("http://localhost:3000/product/"+this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
