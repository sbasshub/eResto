<template>
  <div class="card shadow card-product" >
    <img :src=" 'assets/images/' + product.gambar " class="card-img-top" alt="food images" />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }} </h5>
      <p class="card-text">
          Harga: Rp. {{ product.harga }}
      </p>
      <router-link class="btn btn-success" :to="'/foods/'+ product.id"><b-icon-cart></b-icon-cart> Order now</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardProduct",
  props: ["product"],
};
</script>

<style></style>
