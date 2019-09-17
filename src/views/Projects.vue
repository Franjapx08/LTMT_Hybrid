<template>
  <div>
    <!-- BAR -->
    <v-app-bar color="primary" app>
      <img id="logo" src="../assets/logo.png"/>
      <span class="title">Mis Proyectos</span>
    </v-app-bar>
    <!-- BODY -->
    <v-content class="contenido">
      Projects
    </v-content>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  #logo {
    max-width: 40px;
    margin-right: 10px;
  }
  .title {
    color: white;
  }
</style>
