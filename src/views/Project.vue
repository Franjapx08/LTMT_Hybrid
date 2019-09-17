<template>
  <div id="project-container">
    <template v-for="(lay, layIndex) in LayerHierarchy">
      <Visual-Object
        v-if="lay.level === 0"
        class="layer-container"
        :identifier="layIndex"
        :key="'vObj#' +  layIndex"/>
    </template>
  </div>
</template>

<script>
import { getProject } from '../utils/services'
import VisualObject from '../components/editor/VisualObject'
import { serverURL } from '../utils/config'
export default {
  name: 'Project',
  components: {
    VisualObject
  },
  computed: {
    userData () {
      return this.$store.state.userData
    },
    projectId () {
      return this.$store.state.projectId
    },
    Layers () {
      return this.$store.state.Layers
    },
    LayerHierarchy () {
      return this.$store.state.LayerHierarchy
    }
  },
  created () {
    this.$store.dispatch('restoreData')
    let data = new FormData()
    data.append('project_id', this.projectId)
    data.append('user_id', this.userData.id)
    getProject(data).then(response => {
      if (response.data.code === 1) {
        let dataSet = JSON.parse(response.data.data.data)
        for( const key in dataSet[0]) {
          dataSet[0][key].properties.backgroundImage.value = dataSet[0][key].properties.backgroundImage.value.replace('http://www.localhost:81/', serverURL)
        }
        // eslint-disable-next-line
        console.log(dataSet[0])
        /* 0 = Layers | 1 = Layer Hierarchy */
        this.$store.dispatch('updateProject', {
          projectId: this.projectId,
          Layers: dataSet[0],
          LayerHierarchy: dataSet[1]
        })
        // eslint-disable-next-line
        console.log(this.Layers, this.LayerHierarchy)
      } else {
        localStorage.removeItem('projectId')
        this.$store.commit('setProjectId', null)
      }
    })
  }
}
</script>
<style lang="scss">
  #project-container {
    background: white;
    display: flex;
    flex-direction: column;
  }
</style>