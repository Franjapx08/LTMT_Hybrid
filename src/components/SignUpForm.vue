<template>
  <span>
    <v-card-title>
      <span class="headline">Registro</span>
    </v-card-title>
    <v-card-text>
      <v-form>
        <Upload-Image
          v-model="form.img"
          ref="uploadImage"
          :disabled="isLoading"/>
        <v-layout>
          <v-flex xs12 md6>
            <v-text-field :disabled="isLoading" v-model="form.name" prepend-icon="person" name="name" label="Nombre" type="text"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :disabled="isLoading" v-model="form.lastName" prepend-icon="person" name="lastName" label="Apellido(s)" type="text"></v-text-field>
          </v-flex>
        </v-layout>
        <v-text-field :disabled="isLoading" v-model="form.email" prepend-icon="email" name="email" label="Correo electrónico" type="email"></v-text-field>
        <v-text-field :disabled="isLoading" v-model="form.password" prepend-icon="lock_open" name="password" label="Contraseña" type="password"></v-text-field>
        <v-text-field :disabled="isLoading" v-model="form.password2" prepend-icon="lock" name="password2" label="Repita su contraseña" type="password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn :disabled="isLoading" v-if="value" outline color="primary" @click="closeModal()">Cerrar</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :loading="isLoading"
        :disabled="isLoading"
        color="primary"
        @click="sendSignUp()"
      >
        Registrarme
      </v-btn>
    </v-card-actions>
  </span>
</template>
<script>
/**
 * VALUE is only needed if the component is inside a modal
 */
import UploadImage from './UploadImage.vue'
import { singUp } from './../utils/services.js'
export default {
  name: 'SignUpForm',
  props: [
    'value'
  ],
  components: {
    UploadImage
  },
  data () {
    return {
      // Form
      form: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        img: ''
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
      /* Child component image */
      this.$refs.uploadImage.img = ''
      this.$emit('input', false)
    },
    sendSignUp () {
      this.isLoading = true
      this.form.img = this.$refs.uploadImage.file
      console.log(this.form.img)
      let data = new FormData()
      for (let k in this.form) {
        if (this.form[k]) {
          data.append(k, this.form[k])
        }
      }
      singUp(data).then(response => {
        this.isLoading = false
        console.log(response.data, response)
        let r = response.data
        if (r.code === 1) {
          this.closeModal()
        }
      })
        .catch(error => console.error('Error:', error))
    }
  }
}
</script>
