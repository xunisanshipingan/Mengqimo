<template>
  <Navbar></Navbar>
  <router-view/>
</template>

<script> 
  import Navbar from "@/components/Utils/NavBar.vue";
  export default{
    name : "home",
    components : {Navbar},
  }
    
</script>

<style lang="less">
#app {
  font-family: 'FZSJ';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--black-lighter);
  min-height: 100vh;
}
#app:before{
  content: '';
  background-image: url("./assets/images/main_img.jpg");
  filter: opacity(80%) saturate(85%) grayscale(10%);
  background-position: 50%;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
}
</style>
