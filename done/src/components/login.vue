<template>
    <div class="global-container global-container-login">
        <app-header></app-header>
        <div class="container-inscription orange-box">
            <h2>CONNEXION</h2>
            <form action="">
                <div class="input-field">
                    <input id="pseudo" value="Pseudo" type="text" required>
                    <input id="password" value="Mot de passe" type="text" required>
                </div>
                <router-link to="/">
                    <button class="button button-tiny-2 button-position">RETOUR</button>
                </router-link>
                <button class="button button-tiny-1" @click.prevent="pushInfo">GO!</button>
            </form>
        </div>
        <div v-show="alert" class="alert-box">
            <p>{{ errorMsg }}</p>
            <button class="button button-tiny-2 close-btn" @click.prevent="close">OK</button>
        </div>
        <div v-show="alert" class="filter"></div>
    </div>
</template>

<script>

import Header from './Header'

export default {

    components: {
        'app-header': Header
    },

    name: 'login',
    data () {
        return {
            pseudo: '',
            password: '',
            alert: false,
            errorMsg: 'vous n\'avez pas rempli les champs correctement bande de cons!'
        }
    },

    methods:{

        /*toogleClassOpacity = function(){
            const alertopacity = document.querySelector('.alert-box')
            if(alertopacity.hasClass(''))
            
        },*/
        pushInfo: function(){
            const Pseudo = document.querySelector('#pseudo').value
            const Password = document.querySelector('#password').value
            if(Pseudo != '' && Password != ''){
                this.pseudo = Pseudo
                this.password = Password
                alert('ok')
                console.log(this.pseudo)
            }
            else{
                this.alert = true
            }
        },
        close: function(){
            this.alert = false
        }
    }
}

</script>


<style scoped>

</style>
