<template>
<ion-app>
  <ion-card>
    <ion-card-header class="header-card">
      <ion-card-title class="header-title">Inicio de sesión</ion-card-title>
    </ion-card-header>
      <!--<img v-if="logo" class="logo" src="@/assets/logo.png"/>-->
        <ion-item>
          <img v-if="logo" class="logo" src="@/assets/logo.png"/>
        </ion-item>
    <ion-card-content>
       <ion-item>
        <IonInputVue v-model="form.email" placeholder="Correo electrónico"  name="email" type="text"></IonInputVue>
        </ion-item>
        <ion-item>
        <IonInputVue v-model="form.password" placeholder="Contraseña"  name="password" type="password"></IonInputVue>
        </ion-item>
    </ion-card-content>
  </ion-card>
  <div class="bottom-buttons">
      <ion-button  @click="loginIn()">Iniciar sesión</ion-button>
      <ion-button  @click="presentAlert">¿Olvidaste tu contraseña?</ion-button>
    </div>
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
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginIn () {
      console.log('Submitting form', this.form)
      this.isLoading = true
      let data = new FormData()
      for (let k in this.form) {
        if (this.form[k]) {
          data.append(k, this.form[k])
        }
      }
      login(data).then(response => {
        let r = response.data
        if (r.code === 1) {
          this.$router.push('Prueba')
          window.location.reload()
        } else {
          this.errorModal = true
          return this.$ionic.alertController
            .create({
              header: 'Error',
              message: 'Datos incorrectos',
              buttons: ['Aceptar']
            })
            .then(a => a.present())
        }
        this.isLoading = false
      })
        .catch(error => console.error('Error:', error))
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
