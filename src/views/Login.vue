<template>
  <div id="login-wrapper">
    <v-app-bar color="primary" app>
      <img id="logo" src="../assets/logo.png"/>
      <span class="title">Login</span>
    </v-app-bar>
    <v-content class="contenido">
      <v-card class="login-container">
        <v-text-field
          v-model="email"
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
            @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-btn color="primary">Login</v-btn>
      </v-card>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    email: '',
    password: '',
    showPassword: false
  }),
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
