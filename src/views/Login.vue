<template>
 <div id="Login" class="view bg-image">
    <Login-Form :logo="true"/>
  </div>
  </template>

<script>
import { isLoggedIn } from './../utils/services.js'
import LoginForm from '../components/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  created () {
    isLoggedIn()
      .then((response) => {
        let r = response.data
        if (r.code === 1) {
          this.$router.push('Prueba')
        }
      })
  }
}
</script>
<style lang="scss" scoped>
  #Login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .loginBox {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
