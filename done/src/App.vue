<template>
  <div id="app">
    <router-view/>
    <div class="footer-decoration"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Julius Sans One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

body{
  margin: 0;
  padding: 0;
  background-color: #C9283E;
  background-image: url("assets/img/background-small.svg");
  background-repeat: no-repeat;
  background-position: right;
  background-attachment: fixed;
  background-size: cover;
}

</style>
