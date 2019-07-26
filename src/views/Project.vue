
<template>
<ion-app>
 <!--  <ion-header class="header-tool">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>LTMT</ion-title>
  </ion-toolbar>
</ion-header> -->
 <div id="projects" v-if="loaded">
   <div class="bottom-buttons">
      <div>
         <img class="logo" src="@/assets/vaso.png">
      </div>
       <div>
         <img class="logo" src="@/assets/taza.png">
      </div>
       <div>
         <img class="logo" src="@/assets/gel.png">
      </div>
    </div>
  </div>
  <div style="padding: 5px 0;" v-else>
    <ion-progress-bar type="indeterminate"></ion-progress-bar>
  </div>
</ion-app>
</template>

<script>

export default {
  data () {
    return {
      projectsLoaded: false,
      userDataLoaded: false
    }
  },
  methods: {
    loaded () {
      this.projectsLoaded = true
      return this.userDataLoaded && this.projectsLoaded
    }
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
      > div {
        display: block;
        width: 100%;
        margin-bottom: 12px;
        background: #1976D2;
        color: white;
        border-radius: 15px;
      }
    }
  }
  .logo{
   display: block;
   margin-left: auto;
   margin-right: auto;
   width: 30%;
  }
  .header-tools{
    background: #1976D2;
  }
  #projects{
    margin-top: 20px;
  }
</style>
