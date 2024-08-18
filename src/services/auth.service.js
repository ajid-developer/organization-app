import axios from "axios";

export const login = (data, callback) => {
    axios.post("http://localhost:8080/api/v1/auth/login", data)  
    .then(res => {
        callback(true, res.data);
    }).catch(err => {
        callback(false, err);
    })
} 

export const registration = (data, callback) => {
    axios.post("http://localhost:8080/api/v1/users/registration", data)  
    .then(res => {
        callback(true, res.data);
    }).catch(err => {
        callback(false, err);
    })
} 