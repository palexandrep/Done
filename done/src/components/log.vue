<template>
  <div class="global-container">
    <app-header></app-header>
    <div class="container-log orange-box">
      <router-link to="/inscription">
        <button class="button button-small">INSCRIPTION</button>
      </router-link>
      <router-link to="/login">
        <button class="button button-big">CONNEXION</button>
      </router-link>
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
  },
  mounted() {
    this.$http.get('mysql:host=localhost;dbname=done;charset=utf8', 'root', 'root').then(
      (response)=> {
        console.log('sucsess', response)
      },
      (response)=>{
        console.log('error', response)
      }
    )
  }
}
</script>


<style>

</style>
