<template>
  <div id="login-wrapper">
    <v-app-bar color="primary" app>
      <img id="logo" src="../assets/logo.png"/>
      <span class="title">Iniciar Sesión</span>
    </v-app-bar>
    <v-content class="contenido">
      <v-card class="login-container">
        <v-text-field
          v-model="email"
          :disabled="disableInputs"
          prepend-icon="mdi-account"
          type="email"
          label="Correo Electrónico"
        ></v-text-field>
        <v-text-field
            prepend-icon="mdi-lock"
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="Contraseña"
            :disabled="disableInputs"
            @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-btn @click="login()" :disabled="disableInputs" :loading="disableInputs" color="primary">Login</v-btn>
      </v-card>
    </v-content>
  </div>
</template>

<script>
import { login } from '../utils/services'
export default {
  name: 'App',
  data: () => ({
    email: '',
    password: '',
    showPassword: false,
    disableInputs: false,
    uuid: null,
    model: null
  }),
  created () {
    // eslint-disable-next-line
    this.model = device.model
    // eslint-disable-next-line
    this.uuid = device.uuid
  },
  methods: {
    login () {
      this.disableInputs = true
      let data = new FormData()
      data.append('email', this.email)
      data.append('password', this.password)
      data.append('uuid', this.uuid)
      data.append('model', this.model)
      login(data).then(response => {
        // eslint-disable-next-line
        console.log(response)
        this.disableInputs = false
      })
    }
  }
};
</script>

<style lang="scss">
  #login-wrapper {
    height: 100%;
    width: 100%;
    #logo {
      max-width: 40px;
      margin-right: 10px;
    }
    .title {
      color: white;
    }
    .contenido {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      .login-container {
        margin: 0 10px;
        padding: 5px;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
