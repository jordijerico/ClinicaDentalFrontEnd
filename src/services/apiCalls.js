import axios from "axios"

const root = "http://localhost:4000"

export const loginMe = async (body) => {
    return await axios.post(`${root}/auth/login`,body)
}

export const profile = async (token) => {
    return await axios.get(`${root}/user/profile`,token)
}

export const registerMe = async (body) => {


    
    // return await axios.post(`${root}/login`,body)
}