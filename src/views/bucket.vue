<template>
  <div class="bucket">
    <navbar :updateBucket="buckets" />
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
              <li class="breadcrumb-item" aria-current="page">Food order</li>
              <li class="breadcrumb-item active" aria-current="page">Bucket</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>My <strong>Order</strong> Bucket</h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Picture</th>
                  <th scope="col">Foods</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Total Cost</th>
                  <th scope="col">Cancel</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(bucket, index) in buckets" :key="bucket.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + bucket.products.gambar"
                      class="img-fluid shadow"
                      width="250"
                      alt="imeg"
                    />
                  </td>
                  <td>
                    <strong>{{ bucket.products.nama }}</strong>
                  </td>
                  <td>{{ bucket.description ? bucket.description : "-" }}</td>
                  <td>{{ bucket.quantity_order }}</td>
                  <td align="right">Rp.{{ bucket.products.harga }}</td>
                  <td align="right">
                    <strong>
                      Rp.{{
                        bucket.products.harga * bucket.quantity_order
                      }}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash
                      @click="cancelOrder(bucket.id)"
                    ></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Cost : </strong>
                  </td>
                  <td align="right">
                    <strong>Rp.{{ totalCost }} </strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="name"> Name: </label>
              <input type="text" class="form-control" v-model="order.name" />
            </div>
            <div class="form-group">
              <label for="tableNum"> Table number: </label>
              <input
                type="number"
                class="form-control"
                v-model="order.tableNum"
              />
            </div>

            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
              <b-icon-cart></b-icon-cart> Checkout
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
  name: "bucket",
  components: {
    navbar,
  },
  data() {
    return {
      buckets: [],
      order: {},
    };
  },
  methods: {
    setBuckets(data) {
      this.buckets = data;
    },
    cancelOrder(id) {
      axios
        .delete("http://localhost:3000/bucket/" + id)
        .then(() => {
          this.$toast.error("Order Canceled ❌", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          //update reload
          axios
            .get("http://localhost:3000/bucket")
            .then((response) => this.setBuckets(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.order.name && this.order.tableNum) {
        this.order.buckets = this.buckets;
        axios
          .post("http://localhost:3000/orderan", this.order)
          .then(() => {

            // delete all bucket
            this.buckets.map(function (item) {
              return axios
                .delete("http://localhost:3000/bucket/" + item.id)
                .catch((error) => console.log(error))
            });

            this.$router.push({ path: "/succesOrder" });
            this.$toast.success("Checkout Complete ✔", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Please insert ur name & table 📛", {
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
      .get("http://localhost:3000/bucket")
      .then((response) => this.setBuckets(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalCost() {
      return this.buckets.reduce(function (items, data) {
        return items + data.products.harga * data.quantity_order;
      }, 0);
    },
  },
};
</script>

<style>
</style>