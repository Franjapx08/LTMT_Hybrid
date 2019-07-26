<template>
<ion-app>
 <ion-header class="header-tool">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>LTMT</ion-title>
  </ion-toolbar>
</ion-header>
</ion-app>
</template>

<script>
import { login } from './../utils/services.js'
export default {
  name: 'LoginForm',
  props: ['logo'],
  data () {
    return {
      // Login data
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .bottom-buttons {
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 610px) {
      display: block;
      > button {
        display: block;
        width: 100%;
        color: #1976D2;
      }
    }
  }
  .logo{
   display: block;
   margin-left: auto;
   margin-right: auto;
   width: 30%;
  }
  .header-card{
   background: #1976D2;
  }
  .header-title{
   color: white;
  }
</style>
