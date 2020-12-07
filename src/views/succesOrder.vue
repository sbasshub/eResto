<template>
  <div class="succes-Order">
    <navbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <h2><strong>Success</strong></h2>
          <h4>
            Your order was on the way!! 😎 <br />
            <img src="../assets/images/menunggu.png" alt="wait!!" width="300" />
            <br />
            please wait...
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";

export default {
  name: "succesOrder",

  components: { navbar },
};
</script>

<style>
</style>