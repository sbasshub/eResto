<template>
  <div class="hero">
    <!-- desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu, </strong><br />
                in your eResto
              </h2>
              <p>Come on, choose your favorite food now</p>
              <router-link class="btn btn-lg btn-success" to="/foods">
                <b-icon-arrow-down></b-icon-arrow-down> Order now
              </router-link>
              <!-- <router-link class="btn btn-lg btn-success">Order now</router-link> -->
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-5">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu, </strong><br />
                in your eResto
              </h2>
              <p>Come on, choose your favorite food now</p> <br>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-down></b-icon-arrow-down> Order now
              </button>
              <!-- <router-link class="btn btn-lg btn-success">Order now</router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style>
</style>