import axios from "axios"

const root = "https://clinicadentalbackend-production.up.railway.app"

export const loginMe = async (body) => {
    return await axios.post(`${root}/auth/login`, body)
}

export const getAllClientsByAdmin = async (token) => {

    var config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
    return await axios.get(`${root}/user/profile/checkallclients`,config)
}

export const getAllAppointmentsByUser = async (token) => {

    var config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
    return await axios.get(`${root}/user/appointments/checkall`,config)
}


export const registerMe = async (body) => {

    return await axios.post(`${root}/auth/register`, body)
}

export const newAppointment = async (body,token) => {
    var config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };


    return await axios.post(`${root}/appointment/appointment`,body, config)
}


export const getAllAppointmentsByDoctor = async (token) => {
    var config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };

    return await axios.post(`${root}/appointment/appointments/checkall/doctor`, config)
}