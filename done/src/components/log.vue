<template>
  <div>
    <app-header></app-header>
    <div class="container-log">
      <button class="button button-small">INSCRIPTION</button>
      <button class="button button-big">CONNEXION</button>
    </div>
  </div>
  
</template>

<script>

import Header from './Header'

export default {

  components: {
    'app-header': Header
  },

  name: 'log',
  data () {
    return {

    }
  }
}
</script>


<style scoped>

.button{
  border-radius: 100%;
  height: 200px;
  width: 200px;
  color: white;
  background: linear-gradient(to left,#820333, #2e112d);
  border-color: #c9283e;
  font-size: 28px;
  font-weight: lighter;
}

.container-log{
  background-color: #F0433A;
  position: relative;
  top: 30vh;
  width: 100%;
}

</style>
