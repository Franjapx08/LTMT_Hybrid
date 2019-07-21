<template>
  <span>
    <v-card-title>
      <span class="headline">Recuperar contraseña</span>
    </v-card-title>
    <v-card-text>
      <p class="text-xs-justify">Si ha olvidado su contraseña, por favor ingrese el correo electrónico con el que se encuentra registrado. Recibirá un correo electrónico de <b>noreply@ltmt.com</b> con las instrucciones, sigalas para cambiar su contraseña.</p>
      <v-form>
        <v-text-field :disabled="isLoading" v-model="form.email" prepend-icon="email" name="email" label="Correo electrónico" type="email"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn :disabled="isLoading" v-if="value" outline color="primary" @click="closeModal()">Cerrar</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :loading="isLoading"
        :disabled="isLoading"
        color="primary"
        @click="restore()"
      >
        Enviar correo de recuperación
      </v-btn>
    </v-card-actions>
  </span>
</template>
<script>
/**
 * VALUE is only needed if the component is inside a modal
 */
export default {
  name: 'SignUpForm',
  props: [
    'value'
  ],
  data () {
    return {
      // Form
      form: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
      },
      // Interaction
      isLoading: false
    }
  },
  methods: {
    closeModal () {
      for (const key in this.form) {
        this.$set(this.form, key, '')
      }
      this.$emit('input', false)
    },
    restore () {
      this.isLoading = true
      setTimeout(() => (this.isLoading = false), 3000)
    }
  }
}
</script>
