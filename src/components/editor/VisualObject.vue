<template>
  <div :style="layerStyles" :class="'contenedor ' + data.class" v-if="data && data.type === 'contenedor'">
    <template v-for="(lay) in hierarchy.inside">
      <Visual-Object
        class="layer-container"
        :identifier="lay"
        :key="'vObj#' + lay"/>
    </template>
  </div>
  <v-btn class="boton" v-else :style="layerStyles" @click="btnClick()"></v-btn>
</template>
<script>
import VisualObject from './VisualObject'
export default {
  name: 'VisualObject',
  data () { return {} },
  props: [
    'identifier'
  ],
  components: {
    VisualObject
  },
  computed: {
    data () {
      return this.$store.state.Layers[this.identifier]
    },
    hierarchy () {
      return this.$store.state.LayerHierarchy[this.identifier]
    },
    layerStyles () {
      let styles = ''
      if (this.data) {
        styles += `background-color: ${this.data.properties.backgroundColor.value.hex8}; `
        styles += `width: ${this.data.properties.width.value}${this.data.properties.width.measure}; `
        styles += `height: ${this.data.properties.height.value}${this.data.properties.height.measure}; `
        // eslint-disable-next-line
        console.log('IMAGE -->', this.data.properties.backgroundImage.value)
        styles += `background-image: url('${this.data.properties.backgroundImage.value}'); `
      }
      return styles
    }
  },
  methods: {
    btnClick () {
      /* TODO: HANDLE BTN CLICK */
      // eslint-disable-next-line
      console.log('CLICK')
    }
  },
  created () {}
}
</script>
<style lang="scss">
  .contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
  }
  .boton {
    background-position: center;
    background-size: cover;
  }
</style>
