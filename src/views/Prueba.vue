
<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Proyecto sub</ion-card-subtitle>
      <ion-card-title>Proyecto titulo</ion-card-title>
    </ion-card-header>
    <ion-card-content>
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptatibus aspernatur ullam nisi! Dolores reprehenderit asperiores enim quasi officiis consectetur esse voluptate iure sapiente! R
     eprehenderit architecto unde totam ex quasi?
    </ion-card-content>
          <ion-button  @click="logOut()">Cerrar sesión</ion-button>
  </ion-card>
</template>

<script>
import { logout } from './../utils/services.js'

export default {
  methods: {
    logOut () {
      logout().then((response) => {
        let r = response.data
        if (r.code === 1) {
          this.$router.push('/')
          window.location.reload()
        }
      })
    }
  }
}
</script>
