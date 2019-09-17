import axios from 'axios'
import { serverURL, APIroute, APIversion } from './config'

const domainApiVersion = serverURL + APIroute + APIversion

export const isAuth = () => {
    return axios.get(domainApiVersion + 'IsAuth.php')
}

export const login = data => {
    return axios.post(domainApiVersion + 'LoginMobile.php', data)
}

export const logout = () => {
    return axios.get(domainApiVersion + 'Logout.php')
}

export const test = () => {
    return axios.get(domainApiVersion + 'test.php')
}
