<template>
  <div id="uploadImage">
    <v-btn
      fab
      :disabled="!!disabled"
      class="elevation-0 btn-upload"
      dark>
      <label for="uploadAvatar">
        <Profile-Picture
          :img="img"
          :config="profilePictureConf"/>
      </label>
    </v-btn>
    <input
      id="uploadAvatar"
      @change="changeImage($event)"
      ref="input"
      type="file"
      :disabled="!!disabled"
      accept="image/png, image/jpeg">
  </div>
</template>
<script>
import ProfilePicture from './ProfilePicture'
export default {
  name: 'uploadImage',
  props: [
    'disabled'
  ],
  components: {
    ProfilePicture
  },
  data () {
    return {
      img: this.value,
      file: null,
      profilePictureConf: {
        height: 100,
        width: 100,
        type: 'circle',
        cursor: 'pointer',
        label: 'Subir foto'
      }
    }
  },
  methods: {
    changeImage (e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        const contents = e.target.result
        this.img = contents
        this.file = file
        console.log(this.img, this.file)
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>
<style lang="scss" scoped>
  #uploadImage {
    display: flex;
    justify-content: center;
    align-items: center;
    #uploadAvatar {
      cursor: pointer;
      display: none;
    }
    button {
      background: transparent;
      height: 100px;
      width: 100px;
    }
  }
</style>
