import axios from "axios"

const root = "http://localhost:5173"

export const loginMe = async (body) => {


    
    return await axios.post(`${root}/login`,body)
}