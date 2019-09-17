import axios from 'axios'
import { serverURL, APIroute, APIversion } from './config'

const domainApiVersion = serverURL + APIroute + APIversion

// TODO: CATCH all this async stuff

export const isAuth = (data) => {
    return axios.post(domainApiVersion + 'isAuthMobile.php', data)
}

export const login = data => {
    return axios.post(domainApiVersion + 'LoginMobile.php', data)
}

export const logout = () => {
    return axios.get(domainApiVersion + 'Logout.php')
}

export const getProjects = (data) => {
    return axios.post(domainApiVersion + 'GetProjectsMobile.php', data)
}

export const setProjectToPhone = (data) => {
    return axios.post(domainApiVersion + 'PhoneSetProject.php', data)
}

export const phoneHasProject = (data) => {
    return axios.post(domainApiVersion + 'PhoneHasProject.php', data)
}
