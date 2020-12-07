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
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
            alt="imeg"
          />
        </div>
        <div class="col md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h5>
            Harga: <strong>Rp. {{ product.harga }},-</strong>
          </h5>

          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="order_quantity"> Order Quantity </label>
              <input
                type="number"
                class="form-control"
                v-model="order.quantity_order"
              />
            </div>
            <div class="form-group">
              <label for="description"> Order Description </label>
              <textarea
                v-model="order.description"
                class="form-control"
                placeholder="description: spicy / gravy / message..."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="ordering">
              <b-icon-cart></b-icon-cart> Hand in
            </button>
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
      product: {},
      order: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    ordering() {
      if (this.order.quantity_order) {
        this.order.products = this.product;
        axios
          .post("http://localhost:3000/bucket", this.order)
          .then(() => {
            this.$router.push({ path: "/bucket"})
            this.$toast.success("Straight to Bucket! ⚡", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      }else {
        this.$toast.error("Please insert ur order! ⛔", {
              type: "error",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/product/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
