import {
  domain,
  API,
  version
} from './configs'

import axios from 'axios'

let domainApiVersion = domain + API + version

export const isLoggedIn = () => {
  return axios.get(domainApiVersion + 'IsAuth.php')
}

export const singUp = (data) => {
  return axios.post(domainApiVersion + 'Singup.php', data)
}

export const login = (data) => {
  return axios.post(domainApiVersion + 'Login.php', data)
}

export const logout = () => {
  return axios.get(domainApiVersion + 'Logout.php')
}

export const getUserData = () => {
  return axios.post(domainApiVersion + 'GetUser.php')
}

export const createProject = (data) => {
  return axios.post(domainApiVersion + 'CreateProject.php', data)
}

export const getProjectsByUser = () => {
  return axios.get(domainApiVersion + 'GetProjects.php')
}

export const updateNameProject = (data) => {
  return axios.post(domainApiVersion + 'UpdateNameProject.php', data)
}

export const deleteProject = (data) => {
  return axios.post(domainApiVersion + 'DeleteProject.php', data)
}
