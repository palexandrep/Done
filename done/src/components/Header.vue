<template>
  <header class="header">
    <div class="container-logo">
      <img class="logo" src="../assets/img/logo.svg" alt="logo">
      <h1>{{ msg }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: '-DONE-'
    }
  }
}
</script>


<style scoped>

.logo{
  width: 130px;
  position: absolute;
  transform: translateX(-45px);
  top: 25px;
}

h1{
  position: relative;
  z-index: 10;
  top: 20px;
}

h1, h2 {
  font-weight: lighter;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
