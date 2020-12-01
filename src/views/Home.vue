<template>
  <div class="home">
    <navbar />
    <div class="container">
    <hero/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import hero from '@/components/hero.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    hero
  }
}
</script>
