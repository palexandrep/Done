<template>
    <div class="global-container">
        <app-header></app-header>
        <div class="container-inscription orange-box">
            <h2>INSCRIPTION</h2>
            <form action="">
                <div class="input-field">
                    <input id="pseudo" value="Pseudo" type="text" required>
                    <input id="password" value="Mot de passe" type="text" required>
                    <input id="confirme" value="Confirmer le mot de passe" type="text" required>
                </div>
                <router-link to="/">
                    <button class="button button-tiny-2">RETOUR</button>
                </router-link>
                <button class="button button-tiny-1">GO!</button>
            </form>
        </div>
    </div>
</template>

<script>

import Header from './Header'

export default {

components: {
    'app-header': Header
},

  name: 'inscription',
  data () {
    return {
        pseudo: '',
        password: '',
        confirmPassword: ''
    }
  }
}
</script>


<style scoped>

</style>
