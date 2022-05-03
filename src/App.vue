<template>

  <div class="navbar navbar-expand-lg justify-content-center bg-light " id="app">
  <TopNav/>
  </div>
  <router-view />

</template>

<script>
import TopNav from './components/TopNav.vue'
export default{
components:{
  TopNav
}
}
</script>

<style>

</style>
