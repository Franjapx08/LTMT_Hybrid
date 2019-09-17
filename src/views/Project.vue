<template>
  <div> PROJECT </div>
</template>

<script>
import { getProject } from '../utils/services'
export default {
  name: 'Project',
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
        const dataSet = JSON.parse(response.data.data.data)
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

<style>
</style>