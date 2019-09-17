<template>
  <div>
    <!-- BAR -->
    <v-app-bar color="primary" app>
      <img id="logo" src="../assets/logo.png"/>
      <span class="title">Mis Proyectos</span>
      <div class="flex-grow-1"></div>
      <v-btn color="white" icon @click="logOut()">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- BODY -->
    <v-content v-if="!loading" class="contenido">
      <v-list>
        <v-list-item-group v-model="item" color="primary">
           <v-list-item
            v-for="item in projects"
            :key="item.id"
            @click="navigateToProject(item.id)">
            {{ item.name }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-content>
    <v-content class="loading-container" v-else>
      <v-progress-linear
        class="loader"
        color="primary"
        indeterminate
        height="6"
      ></v-progress-linear>
    </v-content>
  </div>
</template>

<script>
import { isAuth, getProjects, setProjectToPhone, phoneHasProject } from '../utils/services'
export default {
  name: 'Projects',
  data () {
    return {
      item: null,
      loading: true,
      projects: []
    }
  },
  created () {
    if (localStorage.getItem('session')) {
      let localUserData = JSON.parse(localStorage.getItem('session')) 
      this.$store.commit('setUserData', localUserData)
      let data = new FormData()
      data.append('id', localUserData.id)
      isAuth(data).then(response => {
        if(response.data.code === 1) {
          if (this.userData && this.projectId)
            this.navigateToProject(false)
          else
            this.getProjects()
        } else {
          this.$router.replace('login')
        }
        // eslint-disable-next-line
        console.log(response)
      })
    } else {
      this.loading = false
    }
  },
  computed: {
    userData () {
      return this.$store.state.userData
    },
    uuid () {
      return this.$store.state.uuid
    },
    projectId () {
      return this.$store.state.projectId
    }
  },
  methods: {
    getProjects () {
      let data = new FormData()
      data.append('user_id', this.userData.id)
      getProjects(data).then(response => {
        // eslint-disable-next-line
        console.log(response, '<-- LIST')
        if (response.data.code === 1) {
          this.projects = response.data.data
          this.loading = false
        }
      })
    },
    navigateToProject (id) {
      if (id) {
        let data = new FormData()
        data.append('uuid', this.uuid)
        data.append('project_id', id)
        setProjectToPhone(data).then(response => {
          if (response.data.code === 1) {
            localStorage.setItem('projectId', id)
            this.$store.commit('setProjectId', id)
            this.$router.replace({ path: 'project', query: { id } })
          }
        })
      } else {
        let data = new FormData()
        data.append('uuid', this.uuid)
        phoneHasProject(data).then(response => {
          if (response.data.code === 1) {
            if (response.data.data.id_Project != null && response.data.data.id_Project != 'null') {
              localStorage.setItem('projectId', response.data.data.id_Project)
              this.$store.commit('setProjectId', response.data.data.id_Project)
            }
            this.$router.replace({ path: 'project', query: { id: response.data.data.id_Project } })
          }
        // eslint-disable-next-line
        }).catch(error => {
          this.$router.replace({ path: 'project', query: { id: this.projectId } })
        } )
      }
    },
    logOut () {
      this.$store.dispatch('unsetData')
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss">
  #logo {
    max-width: 40px;
    margin-right: 10px;
  }
  .title {
    color: white;
  }
</style>
