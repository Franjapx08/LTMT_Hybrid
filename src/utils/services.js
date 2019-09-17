import axios from 'axios'
import { serverURL, APIroute, APIversion } from './config'

const domainApiVersion = serverURL + APIroute + APIversion

export const isAuth = (data) => {
    return axios.post(domainApiVersion + 'isAuthMobile.php', data)
}

export const login = data => {
    return axios.post(domainApiVersion + 'LoginMobile.php', data)
}

export const logout = () => {
    return axios.get(domainApiVersion + 'Logout.php')
}
