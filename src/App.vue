<template>
  <div id="app">
    <p><router-link to="/home">Top</router-link></p>
    <p><router-link to="/about">About</router-link></p>
    <p><router-link to="/works">Works</router-link></p>
    <p><router-link to="/contact">Contact</router-link></p>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: 'app',
}
</script>
