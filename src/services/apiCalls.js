import axios from "axios"

const root = "http://localhost:4000"

export const loginMe = async (body) => {
    return await axios.post(`${root}/auth/login`, body)
}

export const getProfile = async (token) => {

    var config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };
    return await axios.get(`${root}/user/profile`, config)
}

export const registerMe = async (body) => {

    return await axios.post(`${root}/auth/register`, body)
}