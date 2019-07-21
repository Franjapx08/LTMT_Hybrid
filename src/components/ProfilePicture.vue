<template>
  <div id="profile-picture"
    :class="conf.type"
    :style="styles +  `background-image: url('${pictureImg}');`">
    <div v-if="conf.label">
      {{ conf.label }}
    </div>
  </div>
</template>
<script>
import { domain } from './../utils/configs.js'
let defaultProfile = require('@/assets/profile.png')
export default {
  name: 'ProfilePicture',
  props: [
    /**
    * @key --> img {[ string ]}
    * @key --> height {[ string, int, float ]}
    * @key --> width {[ string, int, float ]}
    * @key --> type {[ string ]} @values --> {[ circle, square ]}
    */
    'config',
    'img'
  ],
  data () {
    return {
      // Config default values
      conf: {
        height: false,
        width: false,
        type: 'circle',
        cursor: false,
        label: false
      },
      defaultProfile
    }
  },
  computed: {
    styles () {
      return [
        this.conf.width ? `width: ${this.conf.width}px;` : '',
        this.conf.height ? `height: ${this.conf.height}px;` : '',
        this.conf.cursor ? `cursor: ${this.conf.cursor};` : ''
      ].join('')
    },
    pictureImg () {
      return this.img ? ((this.img.substring(0, 4) !== 'data' ? (domain + 'avatars/') : ('')) + this.img) : defaultProfile
    }
  },
  created () {
    // Overwrite configuration
    this.conf = {
      ...this.conf,
      ...this.config
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/palette.scss';
  #profile-picture {
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    >div {
      height: 30px;
      padding: 5px;
      background: $bg-secondary-color;
      font-size: 10px;
      width: 100%;
    }
  }
  // TYPES
  .circle {
    border-radius: 50%;
  }
  .square {
    border-radius: 3px
  }
</style>
