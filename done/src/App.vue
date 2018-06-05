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

*{
  font-family: 'Assistant', sans-serif;
  color: white;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
  font-family: 'Julius Sans One', sans-serif;
  margin: 0;
}

body{
  margin: 0;
  padding: 0;
}

.global-container{
  width: 100%;
  height: 100vh;
  background-color: #C9283E;
  background-image: url("assets/img/background-small.svg");
  background-repeat: no-repeat;
  background-position: right;
  background-attachment: fixed;
  background-size: cover;
}

.footer-decoration{
  width: 100%;
  height: 20vh;
  position: absolute;
  top: 80vh;
  background: linear-gradient( to top, rgba(240,67,58,1), rgba(240,67,58,0));
}

.orange-box{
  background-color: #F0433A;
  position: relative;
  top: 30vh;
  width: 100%;
  z-index: 10;
  box-shadow: 0px -20px 30px  rgba(130,3,51,0.4);
}

.hidden{
  display: none;
}

.alert-box{
  width: 80%;
  height: 50vh;
  position: absolute;
  z-index: 15;
  left: 10%;
  top: 30vh;
  background-color: red;
  padding-top: 100px;
  border-radius: 10px;
}
/*--- buttons--*/

.button{
  border-radius: 100%;
  color: white;
  background: linear-gradient( -120deg,#820333, #2e112d);
  border: solid 3px #c9283e;
  font-weight: 200;
  margin: 0;
}
.button-big{
  height: 220px;
  width: 220px;
  font-size: 38px;
  position: relative;
  top: 100px;
}
.button-small{
  height: 180px;
  width: 180px;
  font-size: 28px;
  position: relative;
  top: -100px;
}
button:focus {
    outline: 0px;
}
button:active {
    transform: scale(0.99);
}

.button-tiny-1{
  height: 110px;
  width: 110px;
  font-size: 28px;
  position: relative;
  top: 40px;
  font-weight: 200;
  left: 10%;
}
.button-tiny-2{
  height: 90px;
  width: 90px;
  font-size: 16px;
  position: relative;
  font-weight: 200;
}

.button-position{
  margin-right: 40px;
  top: 35px;
  left: 10%;
}

.close-btn{
  margin-top: 50px;
}
/*--- login & inscription --- */

.input-field{
    display: flex;
    flex-direction: column;
}
input{
    width: 60%;
    margin: auto;
    margin-bottom: 40px;
    background: linear-gradient(#820333, #c9283e);
    border-radius: 50px;
    border: 0;
    padding: 12px;
    position: relative;
    font-size: 20px;
    color: rgba(255, 255, 255,0.6);
    border: solid 3px #F0433A;
    /*background-image: url("../assets/img/input-bg.svg");*/
}
input:last-child{
    margin-bottom: 10px;;
}
input:focus {
    outline: 0px;
    border: solid 3px #c9283e;
    color: rgba(255, 255, 255,1);
    transition: border 0.3s ease-in, color 0.3s ease-in;
}
h2{
    position: relative;
    top: -43px;
    font-weight: 800;
    font-size: 44px;
    color: #F0433A;
    text-align: left;
    margin-left: 5%;
}

.container-inscription{
    top: 20vh;
}

</style>
